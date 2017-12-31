import React from "react"
import { StyleSheet, Dimensions, View, FlatList } from "react-native"
// import { StyleSheet, Dimensions, FlatList, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

// import Spin from "../basic/Spin"
import PagesSpineHeading from "../basic/PagesSpineHeading"
import PagesRow from "../basic/PagesRow"
import PagesPage from "../basic/PagesPage"
import BookProgress from "./BookProgress"

const MAXIMUM_PAGE_SIZE = 150
const HEADER_ROW_HEIGHT = 30
const PAGES_ROW_EXTRA_VERTICAL_SPACE = 10  // = the PagesRow paddingTop

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

class BookPages extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ...(this.getPageSize()),
    }
  }

  componentDidMount() {

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
      pagesPerRow,
    }
  }

  renderItem = ({ item }) => {
    const { goToPage } = this.props
    const { pageWidth, pageHeight } = this.state
    const { key, label, pageIndicesInSpine } = item

    if(key.substr(0,2) == 'H:') {
      
      return <PagesSpineHeading>{label}</PagesSpineHeading>

    } else {

      const spineIdRef = key.substr(2).split('|').slice(1).join('|')
      
      const pages = pageIndicesInSpine.map((pageIndexInSpine, i) => (
        <PagesPage
          key={i}
          pageWidth={pageWidth}
          pageHeight={pageHeight}
          goToPage={() => goToPage({ spineIdRef, pageIndexInSpine })}
        />
      ))
  
      return <PagesRow>{pages}</PagesRow>
    }

  }

  getItemLayout = (data, index) => {
    const { pageHeight } = this.state
    const { key, label, offset } = data[index]

    return {
      offset,  // the distance from the top of the first row to this row
      length: key.substr(0,2) == 'H:' ? HEADER_ROW_HEIGHT : pageHeight + PAGES_ROW_EXTRA_VERTICAL_SPACE,  // the height of the row
      index,
    }
  }

  render() {
    const { bookId, books, showWaiting } = this.props
    const { pageWidth, pageHeight, pagesPerRow, scrollPercentage } = this.state

    if(showWaiting) {
      return null
      // return (
      //   <View style={styles.spinnerContainer}>
      //     <Spin />
      //   </View>
      // )
    }

    const { width, height } = Dimensions.get('window')
    const list = []
    const headerIndices = []
    let offset = 0

    books[bookId].spines.forEach(spine => {
      const { idref, label='', numPages } = spine
      list.push({
        key: `H:${idref}`,  // H = header
        label,
        offset,
      })
      headerIndices.push(list.length - 1)
      offset += HEADER_ROW_HEIGHT

      const numPagesThisSize = numPages[`${width}x${height}`]
      for(let i=0; i<(numPagesThisSize || 1); i+=pagesPerRow) {
        const numPagesInSpine = Math.min(numPagesThisSize - i, pagesPerRow)
        const pageIndicesInSpine = []
        for(let j=0; j<(numPagesInSpine || 1); j++) {
          pageIndicesInSpine.push(i+j)
        }
        list.push({
          key: `P:${i}|${idref}`,  // P = pages
          pageIndicesInSpine,
          offset,
        })
        offset += pageHeight + PAGES_ROW_EXTRA_VERTICAL_SPACE
      }
    })

    return (
      <View style={styles.container}>
        <FlatList
          onLayout={() => this.setState({ ...(this.getPageSize()) })}
          data={list}
          renderItem={this.renderItem}
          extraData={{ selected: pageWidth }}  // used to force render when this changes
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={headerIndices}
          getItemLayout={this.getItemLayout}
          // scrollEventThrottle={50}
          // scrollsToTop={false}
        />
        <BookProgress
          scrollPercentage={scrollPercentage}
          updateScrollPercentage={percent => {}}
        />
      </View>
    )

  }
}

const mapStateToProps = (state) => ({
  books: state.books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookPages)