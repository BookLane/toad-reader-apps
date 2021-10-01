import React from "react"
import { StyleSheet, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import useClassroomInfo from '../../hooks/useClassroomInfo'
import useSpineToolsByCfi from "../../hooks/useSpineToolsByCfi"
import useRouterState from "../../hooks/useRouterState"
import { setSelectedToolUid } from "../../redux/actions"

import ToolChip from "../basic/ToolChip"

const styles = StyleSheet.create({
  toolChipContainer: {
    position: 'absolute',
    left: 0,
    height: 28,
  },
})

const BookTools = React.memo(({

  bookId,
  inEditMode,
  inPageTurn,
  spineIdRef,
  toolSpots,
  onToolMove,
  onToolRelease,

  books,
  userDataByBookId,

  setSelectedToolUid,

}) => {

  const { visibleTools } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })
  const { getRouterState, historyPush } = useRouterState()

  const spineToolsByCfi = useSpineToolsByCfi({ visibleTools, spineIdRef })

  const { spots=[], offsetX=0 } = toolSpots || {}

  if((spots[0] || {}).spineIdRef !== spineIdRef || inPageTurn) return null

  return (
    spots
      .map(({ cfi, y, ordering }) => {
        if(ordering !== 0) return null
    
        return (spineToolsByCfi[cfi] || []).map(({ uid, toolType, data, published_at, name }, idx) => (
          <View
            key={uid}
            style={[
              styles.toolChipContainer,
              {
                // Using idx instead of tool ordering, since all may not be displayed
                // given whether we are in edit mode or not.
                top: y + 2 + (idx * 34),
                left: offsetX,
              },
            ]}
          >
            <ToolChip
              uid={uid}
              label={name}
              toolType={toolType}
              data={data}
              isDraft={!published_at}
              onPress={() => setSelectedToolUid({
                bookId,
                uid,
                getRouterState,
                historyPush,      
              })}
              onToolMove={onToolMove}
              onToolRelease={onToolRelease}
              status={!published_at ? "draft" : "published"}
              type="button"
            />
          </View>
        ))
      })
      .flat()
      .filter(Boolean)

  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setSelectedToolUid,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookTools)