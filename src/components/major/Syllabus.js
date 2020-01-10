import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { getDataOrigin } from '../../utils/toolbox'

import EditToolData from './EditToolData'
import WebView from "./WebView"

import useClassroomInfo from '../../hooks/useClassroomInfo'
import useChangeIndex from '../../hooks/useChangeIndex'

const styles = StyleSheet.create({
  container: {
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
})

const Syllabus = React.memo(({
  bookId,
  inEditMode,
  viewingPreview,
  goUpdateClassroom,

  idps,
  books,
  userDataByBookId,
}) => {

  const { accountId, classroom, idpId, hasDraftData } = useClassroomInfo({ books, bookId, userDataByBookId })

  const changeIndex = useChangeIndex(hasDraftData, (prev, current) => (prev && !current))

  if(!classroom) return null

  const { uid, syllabus, draftData } = classroom

  const data = {}
  const hasDraft = (draftData || {}).syllabus !== undefined

  if(inEditMode && hasDraft) {
    data.syllabus = draftData.syllabus
  } else if(syllabus) {
    data.syllabus = syllabus
  }

  if(inEditMode && !viewingPreview) {
    return (
      <EditToolData
        key={changeIndex}
        classroomUid={uid}
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

  if(!data.syllabus) return null

  return (
    <View style={styles.container}>
      <WebView
        containerStyle={styles.webViewContainer}
        style={styles.webView}
        source={{ uri: `${getDataOrigin(idps[idpId])}/enhanced_assets/${uid}/${data.syllabus.filename}` }}
      />
    </View>
  )
})

const mapStateToProps = ({ idps, books, userDataByBookId }) => ({
  idps,
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Syllabus)