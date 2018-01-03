import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Card, CardItem, Button, Icon, Text, View, ListItem, Left, Radio } from "native-base"
import { StyleSheet, TouchableHighlight, TouchableNativeFeedback, Platform } from "react-native"

import i18n from "../../utils/i18n.js"

import BackFunction from '../basic/BackFunction'

import { setTextSize, setTextSpacing, setTheme } from "../../redux/actions.js"

const themeOptions = [
  {
    id: "author-theme",
    label: i18n("Author's theme"),
  },
  {
    id: "default-theme",
    label: i18n("High contrast"),
  },
  {
    id: "night-theme",
    label: i18n("Low light"),
  },
]

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 6,
    justifyContent: 'center',
  },
  settings: {
    position: 'absolute',
    top: 5,
    left: 7,
    right: 7,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  headerCont: {
    flex: 1,
  },
  header: {
    fontWeight: 'bold',
  },
  settingContainer: {
    paddingTop: 5,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
  },
  setting: {
    flex: 1,
  },
  heading: {
    marginBottom: 5,
    fontSize: 15,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  addRemoveButton: {
    marginRight: 7,
  },
  radioLine: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: -15,
    marginRight: -15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  radio: {
    marginRight: 10,
    marginTop: -2,
  },
})

class DisplaySettings extends React.Component {

  increaseTextSize = () => {
    const { displaySettings, setTextSize } = this.props
    const { textSize } = displaySettings

    setTextSize({ textSize: textSize + 10 })
  }

  decreaseTextSize = () => {
    const { displaySettings, setTextSize } = this.props
    const { textSize } = displaySettings

    setTextSize({ textSize: textSize - 10 })
  }

  // increaseTextSpacing = () => {
  //   const { displaySettings, setTextSpacing } = this.props
  //   const { textSpacing } = displaySettings

  //   setTextSpacing({ textSpacing: textSpacing + 10 })
  // }

  // decreaseTextSpacing = () => {
  //   const { displaySettings, setTextSpacing } = this.props
  //   const { textSpacing } = displaySettings

  //   setTextSpacing({ textSpacing: textSpacing - 10 })
  // }

  render() {
    const { requestHide, displaySettings, setTextSize, setTextSpacing, setTheme } = this.props
    const { textSize, textSpacing, theme } = displaySettings

    const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight
    
    return (
      <View style={styles.container}>
        <BackFunction func={requestHide} />
        <Card style={styles.settings}>

          <View style={styles.headerContainer}>

            <CardItem header style={styles.headerCont}>
              <Text style={styles.header}>{i18n("Display settings")}</Text>
            </CardItem>

            <Button transparent dark
              onPress={requestHide}
            >
              <Icon name='close' />
            </Button>
            
          </View>

          <View style={styles.settingContainer}>
            <View style={styles.setting}>
              <Text style={styles.heading}>{i18n("Text size")}</Text>
              <View style={styles.buttonRow}>
                <Button light
                  style={styles.addRemoveButton}
                  onPress={this.decreaseTextSize}
                >
                  <Icon name='remove' />
                </Button>
                <Button light
                  style={styles.addRemoveButton}
                  onPress={this.increaseTextSize}
                >
                  <Icon name='add' />
                </Button>
              </View>
            </View>

            {/* <View style={styles.setting}>
              <Text style={styles.heading}>{i18n("Spacing")}</Text>
              <View style={styles.buttonRow}>
                <Button light
                  style={styles.addRemoveButton}
                  onPress={this.decreaseTextSpacing}
                >
                  <Icon name='remove' />
                </Button>
                <Button light
                  style={styles.addRemoveButton}
                  onPress={this.increaseTextSpacing}
                >
                  <Icon name='add' />
                </Button>
              </View>
            </View> */}
          </View>

          <View style={styles.settingContainer}>
            <View style={styles.setting}>
              <Text style={styles.heading}>{i18n("Theme")}</Text>
              <View>
                {themeOptions.map(themeOption => (
                  <TouchableComponent
                    key={themeOption.id}
                    onPress={() => setTheme({ theme: themeOption.id })}
                  >
                    <View
                      style={styles.radioLine}
                    >
                      <Radio
                        style={styles.radio}
                        selected={theme === themeOption.id}
                      />
                      <Text>{themeOption.label}</Text>
                    </View>
                  </TouchableComponent>
                ))}
              </View>
            </View>
          </View>

        </Card>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  displaySettings: state.displaySettings,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setTextSize,
  setTextSpacing,
  setTheme,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(DisplaySettings)