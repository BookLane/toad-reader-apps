import React, { useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Button } from "react-native-ui-kitten"
import { StyleSheet, Text, View, Platform } from "react-native"

import Dialog from "./Dialog"
import Icon from "../basic/Icon"
import { i18n } from "inline-i18n"

import BackFunction from '../basic/BackFunction'

import { setTextSize, setTextSpacing, setTheme } from "../../redux/actions"

// const themeOptions = [
//   {
//     id: "author-theme",
//     label: i18n ("Author's theme"),
//   },
//   {
//     id: "default-theme",
//     label: i18n ("High contrast"),
//   },
//   {
//     id: "night-theme",
//     label: i18n ("Low light"),
//   },
// ]

const styles = StyleSheet.create({
  settingContainer: {
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
  icon: {
    fontSize: 22,
  },

  // radioLine: {
  //   flexDirection: 'row',
  //   paddingTop: 10,
  //   paddingBottom: 10,
  //   marginLeft: -15,
  //   marginRight: -15,
  //   paddingLeft: 15,
  //   paddingRight: 15,
  // },
  // radio: {
  //   marginRight: 10,
  //   marginTop: -2,
  // },
})

const DisplaySettings = React.memo(({
  open,
  reportSpots,

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
      reportSpots({ type: 'BookPage' })
    },
    [ textSize, setTextSize, reportSpots ],
  )

  const decreaseTextSize = useCallback(
    () => {
      const { textSize } = displaySettings
      setTextSize({ textSize: textSize - 10 })
      reportSpots({ type: 'BookPage' })
    },
    [ textSize, setTextSize, reportSpots ],
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

  const LessIcon = useCallback(style => <Icon name='md-remove' style={style} />, [])
  const MoreIcon = useCallback(style => <Icon name='md-add' style={style} />, [])
  
  return (
    <>
      {!!open && <BackFunction func={requestHide} />}
      <Dialog
        open={open}
        title={i18n("Display settings")}
        invisibleBackdrop={Platform.OS === 'android'}
        message={(
          <>
            <View style={styles.setting}>
              <Text style={styles.heading}>{i18n("Text size")}</Text>
              <View style={styles.buttonRow}>
                <Button
                  status='primary'
                  style={styles.addRemoveButton}
                  icon={LessIcon}
                  onPress={decreaseTextSize}
                />
                <Button
                  style={styles.addRemoveButton}
                  icon={MoreIcon}
                  onPress={increaseTextSize}
                />
              </View>
            </View>

            {/* <View style={styles.setting}>
              <Text style={styles.heading}>{i18n ("Spacing")}</Text>
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

            {/* <View style={styles.setting}>
              <Text style={styles.heading}>{i18n ("Theme")}</Text>
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
            </View> */}

          </>
        )}
        onClose={requestHide}
        closeButtonText={i18n("Done")}
      />
    </>
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