import React, { useCallback } from "react"
import Constants from 'expo-constants'
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import useNonBlurringOnPress from "../../hooks/useNonBlurringOnPress"

import Icon from './Icon'

import { setHighlight } from "../../redux/actions"

const {
  NUM_COLOR_OPTIONS=3,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  colorOption: {
    width: 8,
    height: 34,
    position: 'relative',
  },
  colorOptionCircle: {
    top: 2,
    bottom: 2,
    left: -11,
    right: -11,
    borderRadius: 15,
    position: 'absolute',
  },
  color1: {
    backgroundColor: '#91afd5',
  },
  color2: {
    backgroundColor: '#d98d95',
  },
  color3: {
    backgroundColor: '#93c58e',
  },
  icon: {
    color: 'black',
    height: 17,
    marginVertical: 5,
    marginHorizontal: 7,
  },
})

const HighlighterColorSwitcher = React.memo(({
  bookId,
  highlight,

  setHighlight,
}) => {

  const color = Math.max(1, Math.min(parseInt(highlight.color, 10), NUM_COLOR_OPTIONS)) || 1

  const switchColorOnPressProps = useNonBlurringOnPress(
    () => {
      setHighlight({
        ...highlight,
        bookId,
        color: (color % NUM_COLOR_OPTIONS) + 1,
      })
    },
    [ color ],
  )

  return (
    <TouchableOpacity
      {...switchColorOnPressProps}
    >
      <View style={styles.container}>
        {Array(NUM_COLOR_OPTIONS).fill().map((x, idx) => (
          <View
            key={idx}
            style={[
              styles.colorOption,
              {
                zIndex: idx+1 === color ? 2 : (idx+1 === 2 ? 1 : 0),
              },
            ]}
          >
            <View
              style={[
                styles.colorOptionCircle,
                styles[`color${idx+1}`],
              ]}
            >
              {idx+1 === color &&
                <Icon name='md-checkmark' style={styles.icon} />
              }
            </View>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  )
})

const mapStateToProps = () => ({
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setHighlight,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(HighlighterColorSwitcher)