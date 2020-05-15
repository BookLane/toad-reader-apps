import React from "react"
import { StyleSheet, ScrollView } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import { getDataOrigin } from '../../utils/toolbox'
import useClassroomInfo from '../../hooks/useClassroomInfo'
import useChangeIndex from '../../hooks/useChangeIndex'

import EditToolData from './EditToolData'
import Document from './Document'

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  const { accountId, classroom, idpId, hasFrontMatterDraftData } = useClassroomInfo({ books, bookId, userDataByBookId })
  const { uid, syllabus, draftData } = classroom || {}

  const changeIndex = useChangeIndex(hasFrontMatterDraftData, (prev, current) => (prev && !current))

  const data = {}
  const hasDraft = (draftData || {}).syllabus !== undefined

  if(inEditMode && hasDraft) {
    data.syllabus = draftData.syllabus
  } else if(syllabus) {
    data.syllabus = syllabus
  }

  const uri = data.syllabus && `${getDataOrigin(idps[idpId])}/enhanced_assets/${uid}/${data.syllabus.filename}`

  if(!classroom) return null

  if(inEditMode && !viewingPreview) {
    return (
      <ScrollView style={styles.container}>
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
      </ScrollView>
    )
  }

  if(!uri) return null

  return (
    <Document
      name={i18n("Syllabus")}
      filename={data.syllabus.filename}
      uri={uri}
      accountId={accountId}
    />
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