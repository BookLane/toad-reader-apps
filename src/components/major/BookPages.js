import React from "react"
import Expo from "expo"
import { StyleSheet, Dimensions, View, FlatList, Animated } from "react-native"

import PagesSpineHeading from "../basic/PagesSpineHeading"
import PagesRow from "../basic/PagesRow"
import PagesPage from "../basic/PagesPage"
import BookProgress from "./BookProgress"

import { getPageSize, getFooterHeight, getToolbarHeight } from '../../utils/toolbox.js'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const {
  PAGE_LIST_HEADER_ROW_HEIGHT,
  PAGES_VERTICAL_MARGIN,
  PAGES_HORIZONTAL_MARGIN,
} = Expo.Constants.manifest.extra

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBottomBorder: {
    position: 'absolute',
    top: PAGE_LIST_HEADER_ROW_HEIGHT - 1,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#ccccce',
  }
})

class BookPages extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      ...(getPageSize()),  // pageWidth, pageHeight, pagesPerRow
    }

    this.animatedScrollPosition = new Animated.Value(0)

    this.opacity = this.animatedScrollPosition.interpolate({
      inputRange: [0, 5],
      outputRange: [0, 1],
    })
    
    this.onScroll = Animated.event(
      [{ nativeEvent: { contentOffset: { y: this.animatedScrollPosition } } }],
      {
        useNativeDriver: true,
      },
    )

    this.calcList()
  }

  componentWillReceiveProps(nextProps) {
    const { spineIdRef, pageIndexInSpine } = this.props

    this.calcList(nextProps)

    if(
      nextProps.spineIdRef !== spineIdRef
      || nextProps.pageIndexInSpine !== pageIndexInSpine
      || this.scrollToLatestLocationNextTimeReceivingProps
    ) {
      delete this.scrollToLatestLocationNextTimeReceivingProps
      this.scrollToLatestLocation(nextProps)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !!nextProps.spines
      && (
        Object.keys(nextProps).some(key => nextProps[key] !== this.props[key])
        || Object.keys(nextState).some(key => nextState[key] !== this.state[key])
      )
    )
  }

  componentWillUpdate(nextProps, nextState) {
    const { pageWidth } = this.state

    if(nextState.pageWidth !== pageWidth) {
      this.calcList(nextProps, nextState)
    }
  }

  calcList = (nextProps, nextState) => {
    const { spines, pageCfisKey } = nextProps || this.props
    const { pageWidth, pageHeight, pagesPerRow } = nextState || this.state

    if(!spines) return

    if(!this.list) {
      this.list = []
      this.headerIndices = []
    }
    
    // clear the lists, but keep the same array objects
    this.list.splice(0, this.list.length)
    this.headerIndices.splice(0, this.headerIndices.length)

    const { height } = Dimensions.get('window')
    const listHeight = (height - getFooterHeight() - getToolbarHeight())
    let offset = 0
    
    spines.forEach(spine => {
      const { idref, label='', pageCfis } = spine
      this.list.push({
        key: `H:${pageWidth}:${idref}`,  // H = header
        label,
        offset,
      })
      this.headerIndices.push(this.list.length - 1)
      offset += PAGE_LIST_HEADER_ROW_HEIGHT

      const pageCfisInThisSpine = pageCfis && pageCfis[pageCfisKey]
      const numPagesInSpine = pageCfis ? (pageCfisInThisSpine || []).length : 0
      for(let i=(numPagesInSpine ? 0 : -1); i<numPagesInSpine; i+=pagesPerRow) {
        const numRowsInSpine = Math.min(numPagesInSpine - i, pagesPerRow)
        const pageIndicesInSpine = []
        const pageCfisInThisRow = []
        for(let j=0; j<(numRowsInSpine || 1); j++) {
          pageIndicesInSpine.push(i+j)
          pageCfisInThisSpine && pageCfisInThisRow.push(pageCfisInThisSpine[i+j])
        }
        this.list.push({
          key: `P:${pageWidth}:${i}:${idref}`,  // P = pages
          pageIndicesInSpine,
          cfis: pageCfisInThisRow,
          offset,
        })
        offset += pageHeight + PAGES_VERTICAL_MARGIN
      }
    })

    this.maxScroll = Math.max(offset - listHeight, 0)
  }

  scrollToLatestLocation = nextProps => {
    const { bookId, spineIdRef, pageIndexInSpine, spines, updateSnapshotCoords, statusBarHeight } = nextProps || this.props
    const { pageWidth, pageHeight } = this.state

    if(spineIdRef == null || pageIndexInSpine == null) return
    if(!this.list) return
    if(!this.flatListEl) return

    if(!spines) {
      this.scrollToLatestLocationNextTimeReceivingProps = true
      return
    }

    const { height } = Dimensions.get('window')
    let index = 0
    let indexInRow = 0

    this.list.some((item, idx) => {
      const { key, pageIndicesInSpine } = item

      // if it is a header row, no match
      if(key.substr(0,2) === 'H:') return false
      
      // if not the correct spine, no match
      if(key.split(':').slice(3).join(':') !== spineIdRef) return false

      // if page index not in this row, no match
      if(!pageIndicesInSpine.includes(pageIndexInSpine)) return false

      index = idx
      indexInRow = pageIndicesInSpine.indexOf(pageIndexInSpine)
      return true
    })

    this.flatListEl.scrollToIndex({
      index,
      viewOffset: 0,
      viewPosition: 0.5,
      animated: false,
    })

    // since this might not be immediately rendered (given the FlatList), let's calculate its position
    const thisItemOffset = this.getItemLayout(this.list, index).offset
    const scrolledToTopYPos = thisItemOffset + getToolbarHeight()
    const middleYPos = height/2 - (pageHeight + PAGES_VERTICAL_MARGIN)/2
    const lastItemLayout = this.getItemLayout(this.list, this.list.length - 1)
    const scrolledToBottomYPos = height - getFooterHeight() - ((lastItemLayout.offset + lastItemLayout.length) - thisItemOffset)
    updateSnapshotCoords({
      x: PAGES_HORIZONTAL_MARGIN + (pageWidth + PAGES_HORIZONTAL_MARGIN) * indexInRow,
      // I am not sure why I need statusBarHeight in the next line, given that it is not shown, but I do
      y: Math.max( Math.min( middleYPos, scrolledToTopYPos ), scrolledToBottomYPos ) - statusBarHeight,
    })
  }

  onLayout = () => this.setState({ ...(getPageSize()) })

  delayPageChangeScroll = params => this.delayPageChangeScrollInfo = params

  renderItem = ({ item }) => {
    const { zoomToPage, bookId, spineIdRef, pageIndexInSpine, pageCfisKey } = this.props
    const { pageWidth, pageHeight } = this.state
    const { key, label, pageIndicesInSpine, cfis } = item

    if(key.substr(0,2) === 'H:') {
      
      return <PagesSpineHeading>{label}</PagesSpineHeading>

    } else {

      const itemSpineIdRef = key.split(':').slice(3).join(':')

      const pages = pageIndicesInSpine.map((itemPageIndexInSpine, i) => (
        <PagesPage
          key={i}
          pageWidth={pageWidth}
          pageHeight={pageHeight}
          bookId={bookId}
          spineIdRef={itemSpineIdRef}
          pageCfisKey={pageCfisKey}
          pageIndexInSpine={itemPageIndexInSpine}
          cfi={cfis[i]}
          delayPageChangeScroll={this.delayPageChangeScroll}
          zoomToPage={zoomToPage}
          isCurrentPage={itemSpineIdRef === spineIdRef && itemPageIndexInSpine === pageIndexInSpine}
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
      length: key.substr(0,2) === 'H:' ? PAGE_LIST_HEADER_ROW_HEIGHT : pageHeight + PAGES_VERTICAL_MARGIN,  // the height of the row
      index,
    }
  }

  setFlatListEl = ref => {
    const { setFlatListEl } = this.props

    this.flatListEl = ref && ref._component
    setFlatListEl && setFlatListEl(this.flatListEl)

    // initialScrollIndex does not work, causing invalid indexes to get sent to getItemLayout
    // without this timeout, this.flatListEl is not set and sticky headers are not accounted for
    setTimeout(this.scrollToLatestLocation, 300)
  }

  scrollToPercentage = percent => {
    this.flatListEl && this.flatListEl.scrollToOffset({ offset: (percent/100) * this.maxScroll, animated: false })
  }

  render() {
    const { pageHeight } = this.state
    const { animatedScrollPosition, opacity } = this

    if(!this.list) return null

    const { height } = Dimensions.get('window')

    const estimatedRowsPerPage = parseInt(height / (pageHeight + PAGES_VERTICAL_MARGIN), 10) + 2
    
    return (
      <View
        style={styles.container}
        onLayout={this.onLayout}
      >
        <AnimatedFlatList
          data={this.list}
          renderItem={this.renderItem}
          // The random number in extraData forces renderItem calls on every item
          // in the data. (There is not a way to have renderItem called on only
          // a subset of the changed data.)
          extraData={{ selected: Math.random() }}  // forces rerender of all items
          initialNumToRender={estimatedRowsPerPage}
          maxToRenderPerBatch={estimatedRowsPerPage}
          updateCellsBatchingPeriod={500}  // wait this # ms between render batches
          windowSize={11}  // i.e. 5 pages above and below rendered
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={this.headerIndices}
          getItemLayout={this.getItemLayout}
          onScroll={this.onScroll}
          scrollEventThrottle={1}
          ref={this.setFlatListEl}
        />
        <Animated.View style={[ styles.headerBottomBorder, { opacity } ]} />
        {this.maxScroll
          ?
            <BookProgress
              animatedScrollPosition={animatedScrollPosition}
              maxScroll={this.maxScroll}
              scrollToPercentage={this.scrollToPercentage}
            />
          : null
        }
      </View>
    )

  }
}

export default BookPages