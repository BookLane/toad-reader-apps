import React from "react"
import { Dimensions, FlatList } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import PagesSpine from "../basic/PagesSpine.js"
import PagesPage from "../basic/PagesPage.js"

const MAXIMUM_PAGE_SIZE = 150

class BookPages extends React.Component {

  constructor() {
    super()
    this.state={
      ...(this.getPageSize()),
    }
  }

  getPageSize = () => {
    const { width, height } = Dimensions.get('window')
    const maxWidth = height < width ? MAXIMUM_PAGE_SIZE : MAXIMUM_PAGE_SIZE * ( width / height )
    const pagesPerRow = parseInt(width / maxWidth)
    const pageWidth = (width - ((pagesPerRow + 1) * 10)) / pagesPerRow
    const pageHeight = pageWidth / ( width / height )
    return {
      pageWidth,
      pageHeight,
    }
  }

  renderItem = ({ item }) => {
    const { pageWidth, pageHeight } = this.state
    const { width, height } = Dimensions.get('window')

    const pages = []
    const numPages = (item.numPages && item.numPages[`${width}x${height}`]) || 1
    for(let i=0; i<numPages; i++) {
      pages.push(<PagesPage key={i} pageWidth={pageWidth} pageHeight={pageHeight} />)
    }

    return (
      <PagesSpine
        heading={item.label}
      >
        {pages}
      </PagesSpine>
    )
  }

  render() {
    const { navigation, books } = this.props
    const { bookId } = navigation.state.params
    const { pageWidth } = this.state

    return (
      <FlatList
        onLayout={() => this.setState({ ...(this.getPageSize()) })}
        data={(books[bookId].spines || [])}
        renderItem={this.renderItem}
        keyExtractor={item => item.idref}
        extraData={{ selected: pageWidth }}  // used to force render
      />
    )

  }
}

const mapStateToProps = (state) => ({
  books: state.books,
})

const  matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookPages)