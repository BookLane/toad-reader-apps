import React, { useState, useEffect, useRef } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, View, Text, Platform } from "react-native"
import { i18n } from "inline-i18n"
import { getDataOrigin, getReqOptionsWithAdditions, cloneObj, getMBSizeStr, getIdsFromAccountId, safeFetch } from "../../utils/toolbox"
import * as DocumentPicker from 'expo-document-picker'

import Dialog from "./Dialog"
import CoverAndSpin from "../basic/CoverAndSpin"

const styles = StyleSheet.create({
  line: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  uploadingLine: {
    backgroundColor: "rgba(0,0,0,.1)",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 3,
  },
  size: {
    fontWeight: "normal",
    fontSize: 14,
    marginLeft: 5,
  },
  uploading: {
    color: "green",
  },
  failed: {
    color: "red",
  }
})

const FileImporter = ({
  open,
  title,
  fileType,
  multiple,
  relativePath,
  accountId,
  getFileLink,
  getSuccessText,
  onSuccess,
  onClose,

  accounts,
  idps,
}) => {

  const [ mode, setMode ] = useState()
  const [ files, setFiles ] = useState([])
  const filesSelected = useRef()

  useEffect(
    () => {
      if(!open) return

      const { idpId } = getIdsFromAccountId(accountId)
      const { cookie } = accounts[accountId]
      const path = `${getDataOrigin(idps[idpId])}${relativePath}`

      const checkForCancel = () => {
        // There is no straight forward way to detect the file selection was
        // cancelled. So I do it this way, with a 1000 ms delay to allow 
        // fileInput.onchange to first fire.
        setTimeout(() => {
          if(!filesSelected.current) onClose()
        }, 1000)
      }

      window.addEventListener('focus', checkForCancel)

      ;(async () => {

        setMode('selecting')
        setFiles([])
        filesSelected.current = false


        const { type, output } = await DocumentPicker.getDocumentAsync({
          // copyToCacheDirectory: false,
          type: fileType,
          multiple,
        })

        if(type === 'cancel') {
          onClose()
        }

        filesSelected.current = true

        const files = []
        for(let idx=0; idx<output.length; idx++) {
          const file = output[idx]
          files.push({
            file,
            size: file.size,
            name: file.name,
            status: 'queued',
          })
        }

        setMode('uploading')
        setFiles(cloneObj(files))

        for(let idx in files) {

          const fileInfo = files[idx]
          const body = new FormData()
          body.append("file", fileInfo.file)

          fileInfo.status = 'uploading'
          setFiles(cloneObj(files))

          const result = await safeFetch(path, getReqOptionsWithAdditions({
            method: 'POST',
            headers: {
              "x-cookie-override": cookie,
            },
            body,
          }))

          fileInfo.result = await result.json()
          fileInfo.status = 'done'
          setFiles(cloneObj(files))
        }

        setMode('refreshing')

        onSuccess && await onSuccess(files)

        setMode('complete')

      })()

      return () => window.removeEventListener('focus', checkForCancel)
    },
    [ open ],
  )

  if(Platform.OS !== 'web') return null

  return (
    <Dialog
      open={!!open}
      title={title || i18n("Upload")}
      content={
        <View>
          {files.length === 0 &&
            <View style={styles.line}>
              <Text>
                {multiple
                  ? i18n("Select files to import.")
                  : i18n("Select a file to import.")
                }
              </Text>
            </View>
          }
          {files.map(({ name, size, status, result }, idx) => (
            <View
              key={idx}
              style={[
                styles.line,
                status === 'uploading' ? styles.uploadingLine : null,
              ]}
            >
              <Text style={styles.name}>
                {getFileLink
                  ? getFileLink({ mode, name, result })
                  : name
                }
                <Text style={styles.size}>{getMBSizeStr(size)}</Text>
              </Text>
              {status === 'uploading' &&
                <Text style={styles.uploading}>{i18n("Uploading...")}</Text>
              }
              {status === 'done' && !result.success &&
                <Text style={styles.failed}>
                  {{
                    file_too_large: i18n("File size exceeds {{maxMB}} mb max.", result),
                    search_indexing_failed: i18n("Failed. There was an unknown error while creating a search index."),
                    'does-not-exist': i18n("Failed. We did not find a matching book to replace. ISBN, Title and Author must match."),
                    unable_to_process: i18n("Failed. Invalid EPUB file."),
                    search_indexing_too_slow: i18n("Failed. Something about this EPUB is overwhelming the indexing process. Please contact support."),
                    text_content_too_massive_for_search_indexing: i18n("Failed. The text content of this EPUB is too massive to create a search index."),
                    search_indexing_memory_overload: i18n("Failed. This EPUB is causing a memory overload during the indexing process. Please contact support."),
                  }[result.errorType] || i18n("Failed.", result)}
                </Text>
              }
              {getSuccessText
                ? getSuccessText({ result })
                : (
                  !!(result || {}).success &&
                    <Text style={styles.result}>
                      {i18n("Imported successfully.")}
                    </Text>
                )
              }
            </View>
          ))}
          {mode === 'refreshing' && <CoverAndSpin />}
        </View>
      }
      buttons={mode === 'complete' ? null : []}
      onClose={onClose}
    />
  )
}

const mapStateToProps = ({ accounts, idps }) => ({
  accounts,
  idps,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(FileImporter)
