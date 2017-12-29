import React from "react"
import { Dimensions } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from "native-base"

import PageCapture from "./PageCapture"

const INITIAL_LOAD_TIMEOUT = 2000

class PageCaptureManager extends React.Component {

  state = {
    skipList: {},
  }

  componentWillUnmount() {
    this.unmounted = true
  }

  getKey = ({ bookId, spineIdRef, width, height }) => `${bookId} ${spineIdRef} ${width}x${height}`

  reportSuccess = ({ bookId, spineIdRef, width, height }) => {
    const skipList = { ...this.state.skipList }
    const key = this.getKey({ bookId, spineIdRef, width, height })

    delete skipList[key]

    this.setState({ skipList })
  }

  reportNoResponse = ({ bookId, spineIdRef, width, height }) => {
    if(this.unmounted) return

    const { skipList } = this.state

    const key = this.getKey({ bookId, spineIdRef, width, height })
    const timeout = ((skipList[key] && skipList[key].timeout) || INITIAL_LOAD_TIMEOUT) * 2

    console.log('skip spine', key)
    this.setState({
      skipList: {
        ...skipList,
        [key]: {
          skip: true,
          timeout,
        } 
      }
    })

    setTimeout(() => {
      if(this.unmounted) return

      const skipList = { ...this.state.skipList }
      skipList[key] = {
        ...skipList[key],
        skip: false,
      }
      
      this.setState({ skipList })
      
    }, timeout)
  }

  render() {
    const { books } = this.props
    const { skipList } = this.state

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
          const key = this.getKey({ bookId, spineIdRef: spine.idref, width, height })
          if(
            (!spine.numPages || spine.numPages[`${width}x${height}`] == null)
            && !(skipList[key] || {}).skip
          ) {
            spineIdRef = spine.idref
            return true
          }
        })
      }

      if(book.downloadStatus !== 2 || !spines) continue

      findSpineToDo() || findSpineToDo(true)

      if(!spineIdRef) continue

      const key = this.getKey({ bookId, spineIdRef, width, height })

      pageCaptureObj = {
        bookId,
        spines,
        spineIdRef,
        width,
        height,
        timeout: (skipList[key] && skipList[key].timeout) || INITIAL_LOAD_TIMEOUT,
      }

      break
    }
   
    if(!pageCaptureObj) {
      console.log('PageCaptureManager at rest. Skip list:', skipList)
      return null
    }

    return (
      <PageCapture
        {...pageCaptureObj} 
        reportSuccess={this.reportSuccess}
        reportNoResponse={this.reportNoResponse}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(PageCaptureManager)
