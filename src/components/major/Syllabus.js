import React from "react"
import { StyleSheet, ScrollView, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import useClassroomInfo from '../../hooks/useClassroomInfo'
import useWideMode from "../../hooks/useWideMode"
import useChangeIndex from '../../hooks/useChangeIndex'
import useAssetBaseUri from "../../hooks/useAssetBaseUri"

import EditToolData from './EditToolData'
import Document from './Document'

const instructions = {
  margin: 20,
  marginBottom: 20,
  fontWeight: '200',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  instructions: {
    ...instructions,
  },
  instructionsWideMode: {
    ...instructions,
    marginHorizontal: 30,
  },
})

const Syllabus = React.memo(({
  bookId,
  inEditMode,
  viewingPreview,
  goUpdateClassroom,
  classroomQueryString,

  idps,
  accounts,
  books,
  userDataByBookId,
}) => {

  const wideMode = useWideMode()

  const { accountId, classroom, idpId, hasFrontMatterDraftData } = useClassroomInfo({ books, bookId, userDataByBookId })
  const { uid, syllabus, draftData } = classroom || {}

  const changeIndex = useChangeIndex(hasFrontMatterDraftData, (prev, current) => (prev && !current))

  const baseUri = useAssetBaseUri({ idps, accounts, forceCookieInUri: !classroomQueryString })
  const baseUriWithCookieInPath = useAssetBaseUri({ idps, accounts, forceCookieInUri: true })

  const data = {}
  const hasDraft = (draftData || {}).syllabus !== undefined

  if(inEditMode && hasDraft) {
    data.syllabus = draftData.syllabus
  } else if(syllabus) {
    data.syllabus = syllabus
  }

  const uri = data.syllabus && `${baseUri}/enhanced_assets/${uid}/${data.syllabus.filename}${classroomQueryString}`
  const uriWithCookieInPath = data.syllabus && `${baseUriWithCookieInPath}/enhanced_assets/${uid}/${data.syllabus.filename}`

  if(!classroom) return null

  if(inEditMode && !viewingPreview) {
    return (
      <ScrollView style={styles.container}>
        {!data.syllabus &&
          <Text style={wideMode ? styles.instructionsWideMode : styles.instructions}>
            {i18n("Include your course syllabus here to make it easy for students to find.", "", "enhanced")}
          </Text>
        }
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
      name={i18n("Syllabus", "", "enhanced")}
      filename={data.syllabus.filename}
      uri={uri}
      uriWithCookieInPath={uriWithCookieInPath}
      accountId={accountId}
    />
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