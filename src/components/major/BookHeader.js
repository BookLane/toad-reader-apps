import React from "react"
import { StyleSheet, Platform, Dimensions } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Subtitle, Title, Left, Icon, Right, Button, Body } from "native-base"
import AppHeader from "../basic/AppHeader"

// import {  } from "../../redux/actions.js"

const isPhoneSize = () => {
  const { width, height } = Dimensions.get('window')
  return Math.min(width, height) < 500
}

const styles = StyleSheet.create({
  title: {
    ...(Platform.OS === 'ios' && isPhoneSize() ? { marginLeft: -50, left: -20 } : {}),
  },
})

class BookHeader extends React.Component {

  onBackPress = () => {
    const { navigation } = this.props
    
    navigation.goBack(navigation.state.params.pageKey)
  }

  render() {
    const { bookId, subtitle, navigation, mode, showDisplaySettings,
            toggleBookView, toggleShowOptions, books } = this.props
    const { title } = books[bookId]
    
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
        <Body>
          <Title style={styles.title}>{title}</Title>
          {subtitle
            ? <Subtitle style={styles.title}>{subtitle}</Subtitle>
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

const mapStateToProps = (state) => ({
  books: state.books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookHeader)
