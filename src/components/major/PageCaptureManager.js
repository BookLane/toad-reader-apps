import React from "react"
import Expo from "expo"
import { Dimensions } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from "native-base"

import PageCapture from "./PageCapture"

const {
  INITIAL_SPINE_CAPTURE_TIMEOUT,
} = Expo.Constants.manifest.extra

class PageCaptureManager extends React.Component {

  state = {
    skipList: {},
  }

  componentWillUnmount() {
    this.unmounted = true
  }

  getKey = ({ bookId, spine, width, height }) => `${bookId} ${spine.idref} ${width}x${height}`

  reportSuccess = ({ bookId, spine, width, height }) => {
    const skipList = { ...this.state.skipList }
    const key = this.getKey({ bookId, spine, width, height })

    delete skipList[key]

    this.setState({ skipList })
  }

  reportNoResponse = ({ bookId, spine, width, height }) => {
    if(this.unmounted) return

    const { skipList } = this.state

    const key = this.getKey({ bookId, spine, width, height })
    const timeout = Math.min((skipList[key] && skipList[key].timeout) || INITIAL_SPINE_CAPTURE_TIMEOUT) * 2

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
      let spine

      const findSpineToDo = flip => {
        if(flip) {
          [ width, height ] = [ height, width ]
        }
        return spines.some(thisSpine => {
          const key = this.getKey({ bookId, spine: thisSpine, width, height })
          if(
            (!thisSpine.pageCfis || thisSpine.pageCfis[`${width}x${height}`] == null)
            && !(skipList[key] || {}).skip
          ) {
            spine = thisSpine
            return true
          }
        })
      }

      if(book.downloadStatus !== 2 || !spines) continue

      findSpineToDo() || findSpineToDo(true)

      if(!spine) continue

      const key = this.getKey({ bookId, spine, width, height })

      pageCaptureObj = {
        bookId,
        spine,
        width,
        height,
        timeout: (skipList[key] && skipList[key].timeout) || INITIAL_SPINE_CAPTURE_TIMEOUT,
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
