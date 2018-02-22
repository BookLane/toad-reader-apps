import React from "react"
import { Text, View, Icon } from "native-base"
import { StyleSheet, TouchableNativeFeedback, TouchableHighlight, Platform } from "react-native"
import i18n from "../../utils/i18n.js"

import HighlighterLabel from '../basic/HighlighterLabel'
import HighlighterNotes from '../basic/HighlighterNotes'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 3,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,.2)',
    backgroundColor: 'white',
  },
  containerTop: {
    bottom: 'auto',
    top: 0,
  },
  colorOption: {
    padding: 15,
  },
  clickablePart: {
    flexDirection: 'row',
  },
  iconAndText: {
    padding: 8,
    flexDirection: 'row',
  },
  close: {
    marginLeft: 10,
    marginTop: -4,
    marginRight: -4,
    marginBottom: -4,
    fontSize: 18,
    backgroundColor: 'rgba(0,0,0,.1)',
    height: 29,
    lineHeight: 24,
    width: 29,
    textAlign: 'center',
    display: 'flex',
  },
  highlight1: {
    backgroundColor: 'rgba(28,96,171,.2)',
  },
})

class Highlighter extends React.PureComponent {

  toggleHighlight = () => {
    
  }

  render() {
    const { selectionInfo } = this.props
    // {"text":"Crossway","spineIdRef":"info","cfi":"/4/2/4,/1:16,/1:24","copyTooltipInLowerHalf":false}

    const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight

    const highlighted = true

    return (
      <View
        style={[
          styles.container,
          (selectionInfo.copyTooltipInLowerHalf && styles.containerTop),
        ]}
      >
        <View style={styles.colorOption}>
          <View style={styles.clickablePart}>
            <TouchableComponent
              onPress={() => {}}
            >
              <View
                style={[
                  styles.iconAndText,
                  styles.highlight1,
                ]}
              >
                <Text>{highlighted ? i18n("Highlighted") : i18n("Highlight the selection")}</Text>
                {highlighted && 
                  <Icon
                    name="close"
                    style={styles.close}
                  />
                }
              </View>
            </TouchableComponent>
          </View>
        </View>
      </View>
    )
  }
}

export default Highlighter