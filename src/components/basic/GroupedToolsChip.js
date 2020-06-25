import React, { useMemo } from "react"
import { StyleSheet, TouchableWithoutFeedback, ScrollView, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Popover, styled } from '@ui-kitten/components'
import useToggle from 'react-use/lib/useToggle'

import useThemedStates from "../../hooks/useThemedStates"
import useThemedStyleSets from "../../hooks/useThemedStyleSets"
import useSpineToolsByCfi from "../../hooks/useSpineToolsByCfi"
import useClassroomInfo from "../../hooks/useClassroomInfo"
import useDimensions from "../../hooks/useDimensions"
import { contentCfiComparator } from "../../utils/toolbox"
import { setSelectedToolUid } from "../../redux/actions"

import ToolChip from "./ToolChip"

const styles = StyleSheet.create({
  numWithinContainer: {
    borderRadius: 14,
    borderWidth: 1,
    width: 28,
    height: 28,
    flexShrink: 0,
    marginVertical: -12,
    marginLeft: 8,
  },
  numWithin: {
    lineHeight: 26,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
  },
  popover: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: 0,
  },
  toolChipsScrollView: {
    right: -7,
  },
  toolChipsContainer: {
    alignItems: 'flex-end',
    padding: 15,
  },
  toolChipContainer: {
    borderRadius: 17,
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginVertical: 3,
  },
})

const GroupedToolsChip = ({
  numToolsWithin,
  style,
  bookId,
  inEditMode,
  spineIdRef,
  setModeToPage,

  books,
  userDataByBookId,

  setSelectedToolUid,

  themedStyle,
  dispatch,
}) => {

  const { visibleTools } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })

  const themedStateEvents = useThemedStates({ dispatch, states: [ 'hover' ] })
  const { baseThemedStyle, labelThemedStyle, altThemedStyleSets } = useThemedStyleSets(themedStyle)
  const [ selectedThemedStyle={}, selectedLabelThemedStyle={} ] = altThemedStyleSets

  const [ showTools, toggleShowTools ] = useToggle(false)

  const spineToolsByCfi = useSpineToolsByCfi({ visibleTools, spineIdRef })

  const { height } = useDimensions().window

  const content = useMemo(
    () => {

      const spineToolSets = Object.values(spineToolsByCfi)
      spineToolSets.sort((a, b) => contentCfiComparator(a[0].cfi, b[0].cfi))

      return (
        <ScrollView
          style={[
            styles.toolChipsScrollView,
            {
              maxHeight: parseInt(height / 2),
            },
          ]}
          contentContainerStyle={styles.toolChipsContainer}
        >
          {spineToolSets.flat().map(({ uid, toolType, data, published_at, name }) => (
            <View
              key={uid}
              style={styles.toolChipContainer}
            >
              <ToolChip
                uid={uid}
                label={name}
                toolType={toolType}
                data={data}
                isDraft={!published_at}
                onPress={() => {
                  setSelectedToolUid({ bookId, uid })
                  toggleShowTools()
                  setModeToPage && setModeToPage({ snapshotZoomed: true })
                }}
                status={!published_at ? "draft" : "published"}
                type="button"
              />
            </View>
          ))}
        </ScrollView>
      )
    },
    [ spineToolsByCfi, bookId, setModeToPage ],
  )

  return (
    <Popover
      visible={showTools}
      placement="left"
      content={content}
      onBackdropPress={toggleShowTools}
      style={styles.popover}
    >
      <TouchableWithoutFeedback onPress={toggleShowTools}>
        <View
          {...themedStateEvents}
          style={[
            styles.numWithinContainer,
            baseThemedStyle,
            (showTools ? selectedThemedStyle : null),
            style,
          ]}
        >
          <Text
            style={[
              styles.numWithin,
              labelThemedStyle,
              (showTools ? selectedLabelThemedStyle : null),
              style,
            ]}
          >
            {numToolsWithin}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </Popover>
  )
}

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setSelectedToolUid,
}, dispatch)

GroupedToolsChip.styledComponentName = 'GroupedToolsChip'

export default connect(mapStateToProps, matchDispatchToProps)(styled(GroupedToolsChip))