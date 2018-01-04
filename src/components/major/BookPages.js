import React from "react"
import Expo from "expo"
import { StyleSheet, Dimensions, View, FlatList, Animated } from "react-native"

import PagesSpineHeading from "../basic/PagesSpineHeading"
import PagesRow from "../basic/PagesRow"
import PagesPage from "../basic/PagesPage"
import BookProgress from "./BookProgress"
import nativeBasePlatformVariables from 'native-base/src/theme/variables/platform'

import { getPageSize } from '../../utils/toolbox.js'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const {
  PAGE_LIST_HEADER_ROW_HEIGHT,
  PAGES_ROW_EXTRA_VERTICAL_SPACE,
  PROGRESS_BAR_SIDE_SPACING,
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
      ...(getPageSize()),
      animatedScrollPosition: new Animated.Value(0),
      scrollPercentage: 0,
    }

    this.calcList()
  }

  componentWillReceiveProps(nextProps) {
    this.calcList(nextProps)
  }

  componentWillUpdate(nextProps, nextState) {
    const { pageWidth } = this.state

    if(nextState.pageWidth !== pageWidth) {
      this.calcList(nextProps, nextState)
    }
  }

  calcList = (nextProps, nextState) => {
    const { spines } = nextProps || this.props
    const { pageWidth, pageHeight, pagesPerRow } = nextState || this.state

    if(!spines) return

    const { width, height } = Dimensions.get('window')
    const listHeight = (height - nativeBasePlatformVariables.footerHeight - nativeBasePlatformVariables.toolbarHeight)
    this.list = []
    this.headerIndices = []
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

      const numPagesInSpine = pageCfis ? (pageCfis[`${width}x${height}`] || []).length : 0
      for(let i=0; i<(numPagesInSpine || 1); i+=pagesPerRow) {
        const numRowsInSpine = Math.min(numPagesInSpine - i, pagesPerRow)
        const pageIndicesInSpine = []
        for(let j=0; j<(numRowsInSpine || 1); j++) {
          pageIndicesInSpine.push(i+j)
        }
        this.list.push({
          key: `P:${pageWidth}:${i}:${idref}`,  // P = pages
          pageIndicesInSpine,
          offset,
        })
        offset += pageHeight + PAGES_ROW_EXTRA_VERTICAL_SPACE
      }
    })

    this.maxScroll = Math.max(offset - listHeight, 0)
  }

  updateScrollPercentage = event => {
    const scrollY = event.nativeEvent.contentOffset.y

    const scrollPercentage = this.maxScroll ? Math.round((scrollY / this.maxScroll) * 100) : 0

    if(scrollPercentage !== this.state.scrollPercentage) {
      this.setState({ scrollPercentage })
    }
  }

  onLayout = () => this.setState({ ...(getPageSize()) })

  renderItem = ({ item }) => {
    const { goToPage, bookId } = this.props
    const { pageWidth, pageHeight } = this.state
    const { key, label, pageIndicesInSpine } = item

    if(key.substr(0,2) == 'H:') {
      
      return <PagesSpineHeading>{label}</PagesSpineHeading>

    } else {

      const spineIdRef = key.split(':').slice(3).join(':')

      const pages = pageIndicesInSpine.map((pageIndexInSpine, i) => (
        <PagesPage
          key={i}
          pageWidth={pageWidth}
          pageHeight={pageHeight}
          bookId={bookId}
          spineIdRef={spineIdRef}
          pageIndexInSpine={pageIndexInSpine}
          goToPage={goToPage}
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
      length: key.substr(0,2) == 'H:' ? PAGE_LIST_HEADER_ROW_HEIGHT : pageHeight + PAGES_ROW_EXTRA_VERTICAL_SPACE,  // the height of the row
      index,
    }
  }

  setFlatListEl = ref => {
    const { setFlatListEl } = this.props

    this.flatListEl = ref && ref._component
    setFlatListEl && setFlatListEl(this.flatListEl)
  }

  scrollToPercentage = percent => {
    this.flatListEl && this.flatListEl.scrollToOffset({ offset: (percent/100) * this.maxScroll, animated: false })
  }

  render() {
    const { spines } = this.props
    const { pageWidth, pageHeight, pagesPerRow, animatedScrollPosition, scrollPercentage } = this.state

    if(!spines) return null

    const { width } = Dimensions.get('window')

    const opacity = animatedScrollPosition.interpolate({
      inputRange: [0, 5],
      outputRange: [0, 1],
    })

    const mainDotLeft = animatedScrollPosition.interpolate({
      inputRange: [0, this.maxScroll],
      outputRange: [PROGRESS_BAR_SIDE_SPACING, width - PROGRESS_BAR_SIDE_SPACING],
    })

    return (
      <View
        style={styles.container}
        onLayout={this.onLayout}
      >
        <AnimatedFlatList
          data={this.list}
          renderItem={this.renderItem}
          extraData={{ selected: pageWidth }}  // used to force render when this changes
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={this.headerIndices}
          getItemLayout={this.getItemLayout}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: animatedScrollPosition } } }],
            {
              useNativeDriver: true,
              listener: this.updateScrollPercentage,
            },
          )}
          scrollEventThrottle={1}
          ref={this.setFlatListEl}
        />
        <Animated.View style={[ styles.headerBottomBorder, { opacity } ]} />
        {this.maxScroll
          ?
            <BookProgress
              mainDotLeft={mainDotLeft}
              scrollPercentage={scrollPercentage}
              scrollToPercentage={this.scrollToPercentage}
            />
          : null
        }
      </View>
    )

  }
}

export default BookPages