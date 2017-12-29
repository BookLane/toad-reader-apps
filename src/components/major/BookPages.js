import React from "react"
import { Dimensions, FlatList } from "react-native"
// import { StyleSheet, Dimensions, FlatList, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

// import Spin from "../basic/Spin"
import PagesSpine from "../basic/PagesSpine"
import PagesPage from "../basic/PagesPage"

const MAXIMUM_PAGE_SIZE = 150

// const styles = StyleSheet.create({
//   spinnerContainer: {
//     padding: 40,
//   },
// })

class BookPages extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
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
    const { goToPage } = this.props
    const { pageWidth, pageHeight } = this.state
    const { width, height } = Dimensions.get('window')
    const { numPages={}, idref } = item

    const pages = []
    const numPagesThisSize = numPages[`${width}x${height}`] || 1
    for(let i=0; i<numPagesThisSize; i++) {
      const pageIndexInSpine = i
      pages.push(
        <PagesPage
          key={i}
          pageWidth={pageWidth}
          pageHeight={pageHeight}
          goToPage={() => goToPage({ spineIdRef: idref, pageIndexInSpine })}
        />
      )
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
    const { bookId, books, showWaiting } = this.props
    const { pageWidth } = this.state

    if(showWaiting) {
      return null
      // return (
      //   <View style={styles.spinnerContainer}>
      //     <Spin />
      //   </View>
      // )
    }

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

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookPages)