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
import { setSelectedToolUid } from "../../redux/actions"

import ToolChip from "./ToolChip"

const styles = StyleSheet.create({
  numWithin: {
    borderRadius: 10,
    borderWidth: 1,
    width: 17,
    height: 17,
    flexShrink: 0,
    lineHeight: 14,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '600',
    marginVertical: -6,
    marginLeft: 8,
  },
  numWithinSelected: {
    opacity: .5,
  },
  popover: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: 0,
  },
  toolChipsScrollView: {
    right: -15,
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
    shadowRadius: 15,
    marginVertical: 3,
  },
})

const GroupedToolsChip = ({
  numToolsWithin,
  style,
  bookId,
  inEditMode,
  spineIdRef,

  books,
  userDataByBookId,

  setSelectedToolUid,

  themedStyle,
  dispatch,
}) => {

  const { visibleTools } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })

  const themedStateEvents = useThemedStates({ dispatch, states: [ 'hover' ] })
  const { baseThemedStyle, altThemedStyleSets } = useThemedStyleSets(themedStyle)
  const [ selectedThemedStyle={} ] = altThemedStyleSets

  const [ showTools, toggleShowTools ] = useToggle(false)

  const spineToolsByCfi = useSpineToolsByCfi({ visibleTools, spineIdRef })

  const { height } = useDimensions().window

  const content = useMemo(
    () => (
      <ScrollView
        style={[
          styles.toolChipsScrollView,
          {
            maxHeight: parseInt(height / 2),
          },
        ]}
        contentContainerStyle={styles.toolChipsContainer}
      >
        {Object.values(spineToolsByCfi).flat().map(({ uid, label, toolType, published_at, name }) => (
          <View
            key={uid}
            style={styles.toolChipContainer}
          >
            <ToolChip
              uid={uid}
              label={label}
              toolType={toolType}
              isDraft={!published_at}
              onPress={() => {
                setSelectedToolUid({ bookId, uid })
                toggleShowTools()
              }}
              status={!published_at ? "draft" : "published"}
              type="button"
            />
          </View>
        ))}
      </ScrollView>
    ),
    [ spineToolsByCfi, bookId ],
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
        >
          <Text
            style={[
              styles.numWithin,
              baseThemedStyle,
              (showTools ? selectedThemedStyle : null),
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