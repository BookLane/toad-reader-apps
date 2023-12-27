import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"

import useNonBlurringOnPress from "../../hooks/useNonBlurringOnPress"

import Icon from './Icon'

export const defaultColorOptions = [
  '#91afd5',
  '#d98d95',
  '#93c58e',
]

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
  icon: {
    color: 'black',
    height: 17,
    marginVertical: 5,
    marginHorizontal: 7,
  },
})

const ColorSwitcher = React.memo(({
  color,
  colorOptions=defaultColorOptions,
  update,
}) => {

  color = Math.max(1, Math.min(parseInt(color, 10), colorOptions.length)) || 1

  const switchColorOnPressProps = useNonBlurringOnPress(
    () => update((color % colorOptions.length) + 1),
    [ update, color ],
  )

  return (
    <TouchableOpacity
      {...switchColorOnPressProps}
    >
      <View style={styles.container}>
        {Array(colorOptions.length).fill().map((x, idx) => (
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
                {
                  backgroundColor: colorOptions[idx],
                },
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

export default ColorSwitcher