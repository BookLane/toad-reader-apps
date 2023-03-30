import React, { useCallback, useMemo, useRef, useEffect } from "react"
import Constants from 'expo-constants'
import { StyleSheet, View, FlatList, Animated } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import PagesSpineHeading from "../basic/PagesSpineHeading"
import PagesRow from "../basic/PagesRow"
import PagesPage from "../basic/PagesPage"
// import BookProgress from "./BookProgress"
import EnhancedHeader from "./EnhancedHeader"

import { getToolbarHeight, statusBarHeight, getPageCfisKey } from '../../utils/toolbox'
import useAdjustedDimensions from "../../hooks/useAdjustedDimensions"
import useSetTimeout from '../../hooks/useSetTimeout'
import usePrevious from "react-use/lib/usePrevious"
import usePageSize from "../../hooks/usePageSize"
import useInstanceValue from "../../hooks/useInstanceValue"
import useWideMode from "../../hooks/useWideMode"
import useClassroomInfo from "../../hooks/useClassroomInfo"
import { getSpineInlineToolsHash } from "../../hooks/useSpineInlineToolsHash"

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const {
  PAGE_LIST_HEADER_ROW_HEIGHT,
  PAGES_VERTICAL_MARGIN,
  PAGES_HORIZONTAL_MARGIN,
} = Constants.expoConfig.extra

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // headerBottomBorder: {
  //   position: 'absolute',
  //   top: PAGE_LIST_HEADER_ROW_HEIGHT - 1,
  //   left: 0,
  //   right: 0,
  //   height: 1,
  //   backgroundColor: '#ccccce',
  // }
})

const BookPages = React.memo(({
  spineIdRef,
  pageIndexInSpine,
  spines,
  bookId,
  updateSnapshotCoords,
  // capturingSnapshots,
  zoomToPage,
  inEditMode,
  toggleInEditMode,
  setModeToPage,
  footerHeight,

  books,
  userDataByBookId,
  displaySettings,
  sidePanelSettings,
}) => {

  const { bookVersion, canViewFrontMatter, visibleTools } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })

  const { pageWidth, pageHeight, pagesPerRow } = usePageSize({ sidePanelSettings })
  const { fullPageWidth, fullPageHeight, height } = useAdjustedDimensions({ sidePanelSettings })
  const wideMode = useWideMode()

  const prevSpineIdRef = usePrevious(spineIdRef)
  const prevPageIndexInSpine = usePrevious(pageIndexInSpine)
  const prevHeight = usePrevious(height)

  const animatedScrollPosition = useRef(new Animated.Value(0)).current
  const flatList = useRef()

  const scrollToLatestLocationNextTimeReceivingProps = useRef(false)

  // Next block commented out with syntax prior to upddate for hooks.
  // this.opacity = this.animatedScrollPosition.interpolate({
  //   inputRange: [0, 5],
  //   outputRange: [0, 1],
  // })
    
  const onScroll = useCallback(
    Animated.event(
      [{ nativeEvent: { contentOffset: { y: animatedScrollPosition } } }],
      {
        useNativeDriver: true,
      },
    ),
    [],
  )

  // This useMemo calculates maxScroll and list, but list should remain the same
  // mutable array and so is declared via a useRef.
  const list = useRef([]).current
  const { maxScroll } = useMemo(
    () => {

      if(!spines) return { maxScroll: 0 }

      // clear the list, but keep the same array
      list.splice(0, list.length)
    
      const listHeight = (height - footerHeight - getToolbarHeight())
      let offset = 0
      
      spines.forEach(spine => {
        const { idref, label='', pageCfis } = spine
        list.push({
          key: `H:${pageWidth}:${idref}`,  // H = header
          label,
          offset,
        })
        offset += PAGE_LIST_HEADER_ROW_HEIGHT

        const pageCfisKey = getPageCfisKey({
          displaySettings,
          width: fullPageWidth,
          height: fullPageHeight,
          spineInlineToolsHash: getSpineInlineToolsHash({ visibleTools, spineIdRef: idref }),
        })

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
          list.push({
            key: `P:${pageWidth}:${i}:${idref}`,  // P = pages
            pageIndicesInSpine,
            pageCfisKey,
            cfis: pageCfisInThisRow,
            offset,
          })
          offset += pageHeight + PAGES_VERTICAL_MARGIN
        }
      })
    
      const maxScroll = Math.max(offset - listHeight, 0)
    
      return {
        maxScroll,
      }

    },
    [ spines, height, displaySettings, fullPageWidth, fullPageHeight, visibleTools, footerHeight ],
  )

  const getItemLayout = useCallback(
    (data, index) => {
      const { key, offset } = data[index]

      return {
        offset,  // the distance from the top of the first row to this row
        length: key.substr(0,2) === 'H:' ? PAGE_LIST_HEADER_ROW_HEIGHT : pageHeight + PAGES_VERTICAL_MARGIN,  // the height of the row
        index,
      }
    },
    [ pageHeight ],
  )

  const getScrollToLatestLocation = useInstanceValue(() => {

      if(spineIdRef == null || pageIndexInSpine == null) return
      if(list.length === 0) return
      if(!flatList.current) return

      if(!spines) {
        scrollToLatestLocationNextTimeReceivingProps.current = true
        return
      }

      const heightWithoutStatusBar = height - statusBarHeight
      let index = 0
      let indexInRow = 0

      list.some((item, idx) => {
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

      flatList.current.scrollToIndex({
        index,
        viewOffset: (
          (
            !wideMode
            && bookVersion !== 'BASE'
          )
            // calc half of the enhanced header height and negate it
            ? (10*2 + 37*(canViewFrontMatter ? 2 : 1)) / -2
            : 0
        ),
        viewPosition: 0.5,
        // animated: false,
      })

      // since this might not be immediately rendered (given the FlatList), let's calculate its position
      const thisItemOffset = getItemLayout(list, index).offset
      const scrolledToTopYPos = thisItemOffset + getToolbarHeight()
      const middleYPos = (heightWithoutStatusBar - getToolbarHeight() - footerHeight)/2 - (pageHeight + PAGES_VERTICAL_MARGIN)/2 + getToolbarHeight() + statusBarHeight
      const lastItemLayout = getItemLayout(list, list.length - 1)
      const scrolledToBottomYPos = heightWithoutStatusBar - footerHeight - ((lastItemLayout.offset + lastItemLayout.length) - thisItemOffset)
      updateSnapshotCoords({
        x: PAGES_HORIZONTAL_MARGIN + (pageWidth + PAGES_HORIZONTAL_MARGIN) * indexInRow,
        y: Math.max( Math.min( middleYPos, scrolledToTopYPos ), scrolledToBottomYPos )
      })

      return true
  })

  const doScrollToLatestLocation = (
    spineIdRef !== prevSpineIdRef
    || pageIndexInSpine !== prevPageIndexInSpine
    || height !== prevHeight
    || scrollToLatestLocationNextTimeReceivingProps.current
  )

  useEffect(
    () => {
      if(doScrollToLatestLocation) {
        scrollToLatestLocationNextTimeReceivingProps.current = false
        getScrollToLatestLocation()()
      }
    },
    [ doScrollToLatestLocation ],
  )

  const [ setScrollToLatestTimeout ] = useSetTimeout()

  const renderItem = useCallback(
    ({ item }) => {
      const { key, label, pageIndicesInSpine, pageCfisKey, cfis } = item

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
            pageIndexInSpine={itemPageIndexInSpine === -1 ? 0 : itemPageIndexInSpine}
            cfi={cfis[i]}
            indicateMultiplePages={itemPageIndexInSpine === -1}
            zoomToPage={zoomToPage}
            isCurrentPage={itemSpineIdRef === spineIdRef && itemPageIndexInSpine === pageIndexInSpine}
            inEditMode={inEditMode}
          />
        ))

        return <PagesRow>{pages}</PagesRow>
      }
    },
    [ bookId, spineIdRef, pageIndexInSpine, pageWidth, pageHeight, zoomToPage, inEditMode ],
  )

  useEffect(
    () => {
      // initialScrollIndex does not work, causing invalid indexes to get sent to getItemLayout.
      // Without this timeout, flatList.current is not set and sticky headers are not accounted for.
      let maxAttempts = 10
      const tryInitialScroll = () => {
        setScrollToLatestTimeout(() => {
          if(!getScrollToLatestLocation()() && maxAttempts-- > 0) {
            tryInitialScroll()
          }
        }, 200)
      }
      tryInitialScroll()
    },
    [],
  )

  const scrollToPercentage = useCallback(
    percent => {
      flatList.current && flatList.current.scrollToOffset({ offset: (percent/100) * maxScroll, animated: false })
    },
    [ maxScroll ],
  )

  if(list.length === 0) return null

  const estimatedRowsPerPage = parseInt(height / (pageHeight + PAGES_VERTICAL_MARGIN), 10) + 2
  
  return (
    <View
      style={styles.container}
    >
      {!wideMode &&
        <EnhancedHeader
          bookId={bookId}
          inEditMode={inEditMode}
          toggleInEditMode={toggleInEditMode}
          setModeToPage={setModeToPage}
        />
      }
      <AnimatedFlatList
        data={list}
        renderItem={renderItem}
        // The random number in extraData forces renderItem calls on every item
        // in the data. (There is not a way to have renderItem called on only
        // a subset of the changed data.)
        extraData={{ selected: Math.random() }}  // forces rerender of all items
        initialNumToRender={estimatedRowsPerPage}
        maxToRenderPerBatch={estimatedRowsPerPage}
        updateCellsBatchingPeriod={500}  // wait this # ms between render batches
        windowSize={11}  // i.e. 5 pages above and below rendered
        showsVerticalScrollIndicator={false}
        //stickyHeaderIndices={headerIndices}
        getItemLayout={getItemLayout}
        onScroll={onScroll}
        scrollEventThrottle={1}
        ref={flatList}
      />
      {/* <Animated.View style={[ styles.headerBottomBorder, { opacity } ]} /> */}
      {/* {maxScroll
        ?
          <BookProgress
            animatedScrollPosition={animatedScrollPosition}
            maxScroll={maxScroll}
            scrollToPercentage={scrollToPercentage}
            capturingSnapshots={capturingSnapshots}
          />
        : null
      } */}
    </View>
  )

})

const mapStateToProps = ({ books, userDataByBookId, displaySettings, sidePanelSettings }) => ({
  books,
  userDataByBookId,
  displaySettings,
  sidePanelSettings,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookPages)