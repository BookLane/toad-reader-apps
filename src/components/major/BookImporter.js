import React, { useState, useEffect, useRef } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { StyleSheet, View, Text, Platform } from "react-native"
import i18n from "../../utils/i18n"
import { getDataOrigin, getReqOptionsWithAdditions, cloneObj, getMBSizeStr } from "../../utils/toolbox"
import { Link } from "../routers/react-router"

import Dialog from "./Dialog"
import CoverAndSpin from "../basic/CoverAndSpin"

const styles = StyleSheet.create({
  line: {
    paddingLeft: 20,
    paddingRight: 20,
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
    color: "red",
  },
  failed: {
    fontWeight: "bold",
    color: "red",
  },
  result: {
  },
  bookId: {
    color: "rgba(0,0,0,.4)",
  },
})

const BookImporter = ({
  open,
  accountId,
  updateBooks,
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

      const idpId = accountId.split(':')[0]
      const { cookie } = accounts[accountId]

      const path = `${getDataOrigin(idps[idpId])}/importbook.json`

      const fileInput = document.createElement('input')
      fileInput.type = 'file'
      fileInput.multiple = true
      fileInput.accept = 'application/epub+zip'
      fileInput.click()

      const checkForCancel = () => {
        // There is no straight forward way to detect the file selection was
        // cancelled. So I do it this way, with a 300 ms delay to allow 
        // fileInput.onchange to first fire.
        setTimeout(() => {
          if(!filesSelected.current) onClose()
        }, 300)
      }

      window.addEventListener('focus', checkForCancel)

      fileInput.onchange = async () => {

        filesSelected.current = true

        const files = []
        for(let idx=0; idx<fileInput.files.length; idx++) {
          const file = fileInput.files[idx]
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

          const result = await fetch(path, getReqOptionsWithAdditions({
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

        await updateBooks({ accountId })
  
        setMode('complete')

      }

      setMode('selecting')
      setFiles([])
      filesSelected.current = false

      return () => window.removeEventListener('focus', checkForCancel)
    },
    [ open ],
  )

  if(Platform.OS !== 'web') return null

  return (
    <Dialog
      open={!!open}
      title={i18n("Importing books")}
      content={
        <View>
          {files.length === 0 &&
            <View style={styles.line}>
              <Text>{i18n("Select files to import.")}</Text>
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
                {!!(mode === 'complete' && (result || {}).bookId)
                  ? (
                    <Link
                      to={`/book/${(result || {}).bookId}`}
                    >
                      {name}
                    </Link>
                  )
                  : name
                }
                <Text style={styles.size}>{getMBSizeStr(size)}</Text>
              </Text>
              {status === 'uploading' &&
                <Text style={styles.uploading}>{i18n("Uploading...")}</Text>
              }
              {status === 'done' && !result.success &&
                <Text style={styles.failed}>{i18n("Failed.")}</Text>
              }
              {!!(result || {}).success &&
                <Text style={styles.result}>
                  {(result || {}).note === 'already-associated'
                    ? i18n("Already in the library.")
                    : i18n("Imported successfully.")
                  }
                </Text>
              }
              {!!(result || {}).success &&
                <Text style={styles.bookId}>{i18n("Book id: {{id}}", { id: result.bookId })}</Text>
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

export default connect(mapStateToProps, matchDispatchToProps)(BookImporter)
