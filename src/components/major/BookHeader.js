import React from "react"
import { StyleSheet, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Subtitle, Title, Left, Icon, Right, Button, Body } from "native-base"
import AppHeader from "../basic/AppHeader"

import { isPhoneSize } from '../../utils/toolbox.js'

const leftIconsWidth = 50
const rightIconsWidth = 135

const styles = StyleSheet.create({
  body: {
    ...(
      Platform.OS === 'ios' && isPhoneSize() ?
        {
          alignItems: 'flex-start',
          left: (leftIconsWidth - rightIconsWidth) / 2,
        }
        : {}
    ),
    ...(
      Platform.OS === 'android' && isPhoneSize() ?
        {
          marginLeft: -20,
          marginRight: -20,
        }
        : {}
    ),
  },
})

class BookHeader extends React.PureComponent {

  onBackPress = () => {
    const { navigation } = this.props
    
    navigation.goBack(navigation.state.params.pageKey)
  }

  render() {
    let { title, subtitle, navigation, mode, showDisplaySettings,
            toggleBookView, toggleShowOptions, width } = this.props

    width -= (leftIconsWidth + rightIconsWidth)
            
    return (
      <AppHeader
        hide={mode === 'page'}
      >
        <Left>
          <Button
            transparent
            onPress={this.onBackPress}
          >
            <Icon name="home" />
          </Button>
        </Left>
        <Body style={[
          styles.body,
          (
            isPhoneSize()
              ? {
                width,
                minWidth: width,
                maxWidth: width,
              }
              : {}
          ),
        ]}>
          <Title>{title}</Title>
          {subtitle
            ? <Subtitle>{subtitle}</Subtitle>
            : null
          }
        </Body>
        <Right>
          <Button
            transparent
            onPress={showDisplaySettings}
          >
            <Icon name="settings" />
          </Button>
          <Button
            transparent
            onPress={toggleBookView}
          >
            <Icon name={[ 'pages', 'zooming' ].includes(mode) ? "list" : "apps"} />
          </Button>
          <Button
            transparent
            onPress={toggleShowOptions}
          >
            <Icon name="more" />
          </Button>
        </Right>
      </AppHeader>
    )
  }
}

export default BookHeader
