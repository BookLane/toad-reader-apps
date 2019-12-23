import React from "react"
import { StyleSheet, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

// import { i18n } from "inline-i18n"
import { getToolbarHeight } from '../../utils/toolbox'
import { getToolInfo } from '../../utils/toolInfo'

import useWideMode from "../../hooks/useWideMode"
import useClassroomInfo from '../../hooks/useClassroomInfo'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    zIndex: 5,
  },
  constainerWideMode: {
    top: getToolbarHeight(),
  },
  topSection: {
    padding: 20,
    paddingBottom: 10,
  },
  topSectionWideMode: {
    flexDirection: 'row',
  },
  bottomSection: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,.1)',
    flex: 1,
    overflow: 'auto',
  },
  bottomSectionWideMode: {
  },
})

const EditTool = React.memo(({
  bookId,
  toolUid,

  books,
  userDataByBookId,
}) => {

  const { toolTypes, toolInfoByType } = getToolInfo()

  const { classroomUid, tools } = useClassroomInfo({ books, bookId, userDataByBookId })
  const tool = tools.filter(({ uid }) => uid === toolUid)[0]

  const wideMode = useWideMode()

  if(!tool) return null

  return (
    <View
      style={[
        styles.container,
        wideMode ? styles.constainerWideMode : null,
      ]}
    >
      <View
        style={[
          styles.topSection,
          wideMode ? styles.topSectionWideMode : null,
        ]}
      >
      </View>
      <View
        style={[
          styles.bottomSection,
          wideMode ? styles.bottomSectionWideMode : null,
        ]}
      >
      </View>
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(EditTool)