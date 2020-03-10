import React, { useState, useEffect } from "react"
import { StyleSheet, View, Text, Platform } from "react-native"
import * as FileSystem from 'expo-file-system'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import { getDataOrigin, getReqOptionsWithAdditions } from '../../utils/toolbox'
import useClassroomInfo from '../../hooks/useClassroomInfo'
import useChangeIndex from '../../hooks/useChangeIndex'
import useNetwork from '../../hooks/useNetwork'
import useWideMode from "../../hooks/useWideMode"

import EditToolData from './EditToolData'
import WebView from "./WebView"
import CoverAndSpin from "../basic/CoverAndSpin"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerWideMode: {
    marginVertical: 20,
    marginHorizontal: 30,
    flex: 1,
  },
  webViewContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  webView: {
    width: '100%',
    height: '100%',
  },
  error: {
    textAlign: 'center',
    paddingTop: 80,
    fontWeight: '100',
  },
})

const Syllabus = React.memo(({
  bookId,
  inEditMode,
  viewingPreview,
  goUpdateClassroom,

  idps,
  accounts,
  books,
  userDataByBookId,
}) => {

  const { accountId, classroom, idpId, hasDraftData } = useClassroomInfo({ books, bookId, userDataByBookId })
  const { uid, syllabus, draftData } = classroom || {}

  const wideMode = useWideMode()

  const { online } = useNetwork()

  const [ error, setError ] = useState()
  const [ downloading, setDownloading ] = useState()

  const changeIndex = useChangeIndex(hasDraftData, (prev, current) => (prev && !current))

  const data = {}
  const hasDraft = (draftData || {}).syllabus !== undefined

  if(inEditMode && hasDraft) {
    data.syllabus = draftData.syllabus
  } else if(syllabus) {
    data.syllabus = syllabus
  }

  const uri = data.syllabus && `${getDataOrigin(idps[idpId])}/enhanced_assets/${uid}/${data.syllabus.filename}`
  const tempLocalUri = data.syllabus && `${FileSystem.cacheDirectory}syllabus_${uid}_${data.syllabus.filename}`

  useEffect(
    () => {
      if(uri && Platform.OS !== 'web') {
        (async () => {

          if(Platform.OS === 'android') {
            setError("Android does not yet support viewing a syllabus.")
            return
          }

          setDownloading(true)
          setError()

          try {

            const { status } = await FileSystem.downloadAsync(uri, tempLocalUri, getReqOptionsWithAdditions({
              headers: {
                "x-cookie-override": accounts[accountId].cookie,
              },
            }))

            if(status >= 400) {
              setError(i18n("Network error: {{status}}"), { status })
            }

          } catch(err) {
            setError(i18n("Error in retrieving syllabus."))
          }

          setDownloading(false)

        })()
      }
    },
    [ uri, online ],
  )

  if(!classroom) return null

  if(inEditMode && !viewingPreview) {
    return (
      <EditToolData
        key={changeIndex}
        classroomUid={uid}
        isDefaultClassroom={false}
        accountId={accountId}
        dataStructure={[
          {
            name: 'syllabus',
            type: 'file',
            fileTypes: [
              'application/pdf',
              'application/msword',
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            ],
          },
        ]}
        data={data}
        goUpdateTool={goUpdateClassroom}
      />
    )
  }

  if(!uri) return null

  return (
    <View style={wideMode ? styles.containerWideMode : styles.container}>
      {downloading &&
        <CoverAndSpin />
      }
      {!!error &&
        <Text style={styles.error}>
          {!online
            ? i18n("Check your internet connection.")
            : error
          }
        </Text>
      }
      {!downloading && !error &&
        <WebView
          containerStyle={styles.webViewContainer}
          style={styles.webView}
          source={{
            uri: Platform.OS === 'web' ? uri : tempLocalUri,
          }}
          allowingReadAccessToURL={FileSystem.cacheDirectory}
          allowUniversalAccessFromFileURLs={true}
          allowFileAccess={true}
          originWhitelist={['*']}
          mixedContentMode="always"
          bounces={false}  
        />
      }
    </View>
  )
})

const mapStateToProps = ({ idps, accounts, books, userDataByBookId }) => ({
  idps,
  accounts,
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Syllabus)