import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import EditToolData from './EditToolData'
import FlipEditor from '../basic/FlipEditor'

import { i18n } from "inline-i18n"
import { textToReactNative } from "../../utils/toolbox"

import useClassroomInfo from '../../hooks/useClassroomInfo'
import useChangeIndex from '../../hooks/useChangeIndex'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    flex: 1,
  },
})

const InstructorsIntroduction = React.memo(({
  bookId,
  inEditMode,
  viewingPreview,
  goUpdateClassroom,

  books,
  userDataByBookId,
}) => {

  const { accountId, classroom, hasDraftData } = useClassroomInfo({ books, bookId, userDataByBookId })

  const changeIndex = useChangeIndex(hasDraftData, (prev, current) => (prev && !current))

  if(!classroom) return null

  const { uid, introduction, draftData } = classroom

  const data = {}
  const hasDraft = (draftData || {}).introduction !== undefined

  if(inEditMode && hasDraft) {
    data.introduction = draftData.introduction
  } else if(introduction) {
    data.introduction = introduction
  }

  if(inEditMode && !viewingPreview) {

    return (
      <EditToolData
        key={changeIndex}
        classroomUid={uid}
        isDefaultClassroom={false}
        accountId={accountId}
        dataStructure={[
          {
            name: 'introduction',
            type: 'text',
            placeholder: i18n("Enter your introduction here.", "", "enhanced"),
          },
        ]}
        data={data}
        goUpdateTool={goUpdateClassroom}
      />
    )
  }

  let content

  try {
    // Check if this is JSON. If not, the following
    // line will throw an error and go to the catch block.
    JSON.parse(data.introduction)

    content = (
      <FlipEditor
        mode="display"
        initialContent={data.introduction || ""}
        style={{
          marginVertical: -20,
          marginHorizontal: -30,

        }}
        wrapperStyle={{
          overflow: 'auto',
          padding: '20px 30px',
        }}
      />
    )
  } catch(e) {
    content = (
      <Text>
        {textToReactNative(data.introduction)}
      </Text>
    )
  }

  return (
    <View style={styles.container}>
      {content}
    </View>
  )

})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(InstructorsIntroduction)