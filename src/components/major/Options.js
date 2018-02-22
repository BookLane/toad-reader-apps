import React from "react"
import { Card, CardItem, Icon, Text, View } from "native-base"
import { StyleSheet, TouchableWithoutFeedback, BackAndroid, Platform } from "react-native"

import BackFunction from '../basic/BackFunction'

import { getToolbarHeight } from '../../utils/toolbox.js'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: getToolbarHeight(),
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 5,
  },
  cover: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  options: {
    position: 'absolute',
    top: -2,
    right: 1,
  },
  header: {
    fontWeight: 'bold',
  },
  icon: {
    paddingLeft: 10,
    width: 30,
  },
})

class Options extends React.PureComponent {

  render() {
    const { options, requestHide, headerText } = this.props

    return (
      <View style={styles.container}>
        <BackFunction func={requestHide} />
        <TouchableWithoutFeedback
          onPress={requestHide}
        >
          <View style={styles.cover}>
          </View>
        </TouchableWithoutFeedback>
        <Card style={styles.options}>
          {headerText && 
            <CardItem header>
              <Text
                style={styles.header}
              >
                {headerText}
              </Text>
            </CardItem>
          }
          {options.map((option, index) => (
            <CardItem button
              key={index}
              onPress={() => {
                requestHide()
                option.onPress()
              }}
            >
              <Text>{option.text}</Text>
              {option.selected &&
                <Icon
                  name="checkmark"
                  style={styles.icon}
                />
              }
            </CardItem>
          ))}
          {Platform.OS === 'ios' && <CardItem />}
        </Card>
      </View>
    )

    // Last blank CardItem needed to offset a bug in iOS
  }
}

export default Options