import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { getDataOrigin } from '../../utils/toolbox'

import EditToolData from './EditToolData'
import WebView from "./WebView"

import useClassroomInfo from '../../hooks/useClassroomInfo'

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
  goUpdateClassroom,

  idps,
  books,
  userDataByBookId,
}) => {

  const { accountId, classroom, idpId } = useClassroomInfo({ books, bookId, userDataByBookId })


  if(!classroom) return null

  const { uid, syllabus } = classroom

  if(inEditMode) {
    const data = {}

    if(syllabus) {
      data.syllabus = syllabus
    }

    return (
      <EditToolData
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

  if(!syllabus) return null

  return (
    <View style={styles.container}>
      <WebView
        containerStyle={styles.webViewContainer}
        style={styles.webView}
        source={{ uri: `${getDataOrigin(idps[idpId])}/enhanced_assets/${uid}/${syllabus.filename}` }}
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