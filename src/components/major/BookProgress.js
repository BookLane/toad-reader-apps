import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Footer, Text } from "native-base"
import { Platform } from "react-native"

// import {  } from "../../redux/actions.js"

class BookProgress extends React.Component {

  // There is a bug by which the backgroundColor in the header does not get set on load.
  // Thus, this component is a hack to force it to render properly.

  constructor(props) {
    super(props)

    this.state = {
      backgroundColor: "#4075ae",
    }
  }

  componentDidMount() {
    this.setState({ backgroundColor: "#4075af" })
  }

  render() {
    // const { bookId, subtitle, navigation, bookView, toggleBookView, toggleShowOptions, books } = this.props
    // const { title } = books[bookId]
    
    return (
      <Footer
        backgroundColor={Platform.OS === 'ios' ? null : this.state.backgroundColor}
      >
        <Text>progress shown here</Text>
      </Footer>
    )
  }
}

const mapStateToProps = (state) => ({
  // books: state.books,
})

const  matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookProgress)