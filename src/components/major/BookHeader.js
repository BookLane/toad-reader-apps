import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Subtitle, Title, Left, Icon, Right, Button, Body } from "native-base"
// import { StatusBar } from "react-native"
import AppHeader from "../basic/AppHeader"

// import {  } from "../../redux/actions.js"

class BookHeader extends React.Component {

  componentDidMount() {
    // StatusBar.setHidden(false)
  }

  componentWillUnmount() {
    // this.skipHideStatusBar || StatusBar.setHidden(true)
  }

  onBackPress = () => {
    const { navigation } = this.props
    
    // this.skipHideStatusBar = true
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
            <Icon name={mode === "pages" ? "list" : "apps"} />
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
