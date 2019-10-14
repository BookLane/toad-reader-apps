import React, { useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Ionicons } from "@expo/vector-icons"
import { Button } from "react-native-ui-kitten"
import { StyleSheet, Text, View } from "react-native"

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

const DisplaySettings = React.memo(({
  displaySettings,
  setTextSize,
  requestHide,
  // setTextSpacing,
  // setTheme,
}) => {

  const { textSize } = displaySettings
  // const { textSize, textSpacing, theme } = displaySettings

  const increaseTextSize = useCallback(
    () => {
      setTextSize({ textSize: textSize + 10 })
    },
    [ textSize, setTextSize ],
  )

  const decreaseTextSize = useCallback(
    () => {
      const { textSize } = displaySettings
      setTextSize({ textSize: textSize - 10 })
    },
    [ textSize, setTextSize ],
  )

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

  // const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight
  
  return (
    <View style={styles.container}>
      <BackFunction func={requestHide} />
      {/* <Card style={styles.settings}> */}
      <View style={styles.settings}>


        <View style={styles.headerContainer}>

          <CardItem header style={styles.headerCont}>
            <Text style={styles.header}>{i18n("Display settings")}</Text>
          </CardItem>

          <Button transparent dark
            onPress={requestHide}
          >
            <Ionicons name='close' />
          </Button>
          
        </View>

        <View style={styles.settingContainer}>
          <View style={styles.setting}>
            <Text style={styles.heading}>{i18n("Text size")}</Text>
            <View style={styles.buttonRow}>
              <Button light
                style={styles.addRemoveButton}
                onPress={decreaseTextSize}
              >
                <Ionicons name='remove' />
              </Button>
              <Button light
                style={styles.addRemoveButton}
                onPress={increaseTextSize}
              >
                <Ionicons name='add' />
              </Button>
            </View>
          </View>

          {/* <View style={styles.setting}>
            <Text style={styles.heading}>{i18n("Spacing")}</Text>
            <View style={styles.buttonRow}>
              <Button light
                style={styles.addRemoveButton}
                onPress={decreaseTextSpacing}
              >
                <Ionicons name='remove' />
              </Button>
              <Button light
                style={styles.addRemoveButton}
                onPress={increaseTextSpacing}
              >
                <Ionicons name='add' />
              </Button>
            </View>
          </View> */}
        </View>

        {/* <View style={styles.settingContainer}>
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
        </View> */}

      </View>
    </View>
  )
})

const mapStateToProps = ({ displaySettings }) => ({
  displaySettings,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setTextSize,
  setTextSpacing,
  setTheme,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(DisplaySettings)