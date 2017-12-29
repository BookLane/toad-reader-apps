import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Footer, Text } from "native-base"
import { Platform } from "react-native"
import nativeBasePlatformVariables from 'native-base/src/theme/variables/platform'

// import {  } from "../../redux/actions.js"

class BookProgress extends React.Component {

  // There is a bug by which the backgroundColor in the header does not get set on load.
  // Thus, this component is a hack to force it to render properly.
  
  render() {
    const { hide } = this.props

    const style = {}
  
    if(hide) {
      style.top = nativeBasePlatformVariables.footerHeight
    }
  
    if(Platform.OS === 'android') {
      style.backgroundColor = "#4075ae"
    }
    
    return (
      <Footer
        androidStatusBarColor="#4075ae"
        style={style}
      >
        <Text>progress shown here</Text>
      </Footer>
    )
  }
}

const mapStateToProps = (state) => ({
  // books: state.books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookProgress)