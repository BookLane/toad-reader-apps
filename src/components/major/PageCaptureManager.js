import React from "react"
import { Dimensions } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from "native-base"

import PageCapture from "./PageCapture"

class PageCaptureManager extends React.Component {

  state = {
    skipList: [],
    lastSkipList: [],
    doubleSkipList: [],
  }

  componentWillUnmount() {
    this.unmounted = true
  }

  reportNoResponse = ({ bookId, spineIdRef, width, height }) => {
    const { skipList, lastSkipList, doubleSkipList } = this.state

    const key = `${bookId} ${spineIdRef} ${width}x${height}`

    console.log('skip spine', key)
    this.setState({ skipList: [...skipList, key] })

    if(lastSkipList.includes(key)) {
      console.log('double-skip spine', key)
      this.setState({ doubleSkipList: [...doubleSkipList, key] })
    }
  }

  render() {
    const { books } = this.props
    const { skipList, lastSkipList, doubleSkipList } = this.state

    let pageCaptureObj

    for(let bookId in books) {
      let { width, height } = Dimensions.get('window')
      const book = books[bookId] || {}
      const spines = book.spines
      let spineIdRef

      const findSpineToDo = flip => {
        if(flip) {
          [ width, height ] = [ height, width ]
        }
        return spines.some(spine => {
          if(
            (!spine.numPages || spine.numPages[`${width}x${height}`] == null)
            && !skipList.includes(`${bookId} ${spine.idref} ${width}x${height}`)
          ) {
            spineIdRef = spine.idref
            return true
          }
        })
      }

      if(book.downloadStatus !== 2 || !spines) continue

      findSpineToDo() || findSpineToDo(true)

      if(!spineIdRef) continue

      pageCaptureObj = {
        // key: bookId,
        bookId,
        spines,
        spineIdRef,
        width,
        height,
      }

      break
    }
   
    if(!pageCaptureObj) {
      if(skipList.length == doubleSkipList.length) {
        console.log('PageCaptureManager at rest', doubleSkipList)
        if(lastSkipList.length > 0) {
          setTimeout(() => {
            if(this.unmounted) return
            this.setState({
              lastSkipList: [],
            })
          }, 16)
        }
      } else {
        setTimeout(() => {
          if(this.unmounted) return
          this.setState({
            skipList: [...doubleSkipList],
            lastSkipList: [...skipList],
          })
        }, 16)
      }
    }

    return pageCaptureObj ? <PageCapture {...pageCaptureObj} reportNoResponse={this.reportNoResponse} /> : null
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
})

const  matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PageCaptureManager)
