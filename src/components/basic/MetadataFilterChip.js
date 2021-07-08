import React from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { styled } from "@ui-kitten/components"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import useThemedStyleSets from '../../hooks/useThemedStyleSets'
import useThemedStates from '../../hooks/useThemedStates'
import { useCallback } from "react/cjs/react.development"
import { textToReactNative } from "../../utils/toolbox"

import { changeLibraryFilter } from "../../redux/actions"

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 15,
    margin: 3,
  },
  chipText: {
    color: 'white',
    maxWidth: 250,
  },
})

const MetadataFilterChip = ({
  metadataKeyId,
  value,
  requestClose,
  style,

  changeLibraryFilter,

  eva: {
    style: themedStyle,
    dispatch,
  }={},
}) => {

  const { baseThemedStyle } = useThemedStyleSets(themedStyle)
  const themedStateEvents = useThemedStates({ dispatch, states: [ 'hover' ] })

  const setFilter = useCallback(
    () => {
      changeLibraryFilter({
        type: 'metadata',
        metadataKeyId,
        value,
      })
      requestClose()
    },
    [ metadataKeyId, value ],
  )

  return (
    <TouchableOpacity
      {...themedStateEvents}
      onPress={setFilter}
    >
      <View
        style={[
          styles.chip,
          baseThemedStyle,
          style,
        ]}
      >
        <Text
          style={styles.chipText}
          numberOfLines={1}
        >
          {textToReactNative(value)}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const mapStateToProps = ({ x }) => ({
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  changeLibraryFilter,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(styled('MetadataFilterChip')(MetadataFilterChip))