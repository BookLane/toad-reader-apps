import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Subtitle, Title, Left, Icon, Right, Button, Body } from "native-base"
import AppHeader from "../basic/AppHeader.js"

// import {  } from "../../redux/actions.js"

class BookHeader extends React.Component {

  render() {
    const { bookId, subtitle, navigation, bookView, toggleBookView, toggleShowOptions, books } = this.props
    const { title } = books[bookId]
    
    return (
      <AppHeader>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.goBack(this.props.navigation.state.params.pageKey)}
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
            onPress={() => toggleBookView()}
          >
            <Icon name={bookView == "pages" ? "list" : "apps"} />
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

const  matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookHeader)
