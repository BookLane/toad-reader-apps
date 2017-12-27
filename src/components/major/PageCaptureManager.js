import React from "react"
import { Dimensions } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from "native-base"

import PageCapture from "./PageCapture"

class PageCaptureManager extends React.Component {

  render() {
    const { books } = this.props
    let { width, height } = Dimensions.get('window')

    const pageCaptureObjs =
      Object.keys(books)
        .map(bookId => {
          const book = books[bookId] || {}
          const spines = book.spines
          let spineIdRef

          const findSpineToDo = flip => {
            if(flip) {
              [ width, height ] = [ height, width ]
            }
            return spines.some(spine => {
              if(!spine.numPages || spine.numPages[`${width}x${height}`] == null) {
                spineIdRef = spine.idref
                return true
              }
            })
          }

          if(book.downloadStatus !== 2 || !spines) {
            return null
          }

          findSpineToDo() || findSpineToDo(true)

          if(!spineIdRef) {
            return null
          }

          return {
            key: bookId,
            bookId,
            spines,
            spineIdRef,
            width,
            height,
          }
        })
        .filter(pageCaptureProps => pageCaptureProps)
    
    return (
      <View>
        {pageCaptureObjs.map(pageCaptureProps => 
          <PageCapture {...pageCaptureProps} />
        )}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
})

const  matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PageCaptureManager)
