import React from "react"
import { StyleSheet, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Text, View, Icon } from "native-base"
import i18n from "../../utils/i18n.js"

import { setHighlight, deleteHighlight } from "../../redux/actions.js";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    maxWidth: '100%',
  },
  emptySpace: {
    flexGrow: 1,
    minWidth: 30,
  },
  iconAndText: {
    padding: 8,
    flexShrink: 1,
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
  highlightText: {
    flexShrink: 1,
  },
  share: {
    padding: 4,
    fontSize: 22,
    lineHeight: 26,
  },
})

class HighlighterLabel extends React.PureComponent {

  toggleHighlight = color => {
    const { selectionInfo, bookId, highlight={}, setHighlight, deleteHighlight } = this.props
    const { spineIdRef, cfi } = selectionInfo || {}
    
    const note = highlight.note || ""

    if(highlight && highlight.color === color) {
      deleteHighlight({
        bookId,
        spineIdRef,
        cfi,
      })
    } else {
      setHighlight({
        bookId,
        spineIdRef,
        cfi,
        color,
        note,      
      })
    }
  }

  toggleHighlight1 = () => this.toggleHighlight(1)

  goShare = () => console.log('hi')

  render() {
    const { selectionInfo, highlight } = this.props
    // {"text":"Crossway","spineIdRef":"info","cfi":"/4/2/4,/1:16,/1:24","copyTooltipInLowerHalf":false}

    const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight

    return (
      <View style={styles.container}>
        <TouchableComponent
          onPress={this.toggleHighlight1}
        >
          <View
            style={[
              styles.iconAndText,
              styles.highlight1,
            ]}
          >
            <Text
              style={styles.highlightText}
              numberOfLines={1}
            >
              {highlight ? selectionInfo.text : i18n("Highlight the selection")}
            </Text>
            {highlight && 
              <Icon
                name="close"
                style={styles.close}
              />
            }
          </View>
        </TouchableComponent>
        <View style={styles.emptySpace} />
        <TouchableOpacity
          onPress={this.goShare}
        >
          <Icon
            name="share"
            style={styles.share}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setHighlight,
  deleteHighlight,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(HighlighterLabel)