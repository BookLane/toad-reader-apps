import React from "react"
import { StyleSheet, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Footer } from "native-base"
import nativeBasePlatformVariables from 'native-base/src/theme/variables/platform'

import ProgressDot from "../basic/ProgressDot"

// import {  } from "../../redux/actions.js"

const SIDE_SPACING = 20

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#4075ae',
    flexDirection: 'row',
  },
  line: {
    backgroundColor: 'white',
    flex: 1,
    marginLeft: SIDE_SPACING,
    marginRight: SIDE_SPACING,
    height: 1,
    top: nativeBasePlatformVariables.footerHeight / 2 - .5,
  },
})

class BookProgress extends React.Component {

  render() {
    const { scrollPercentage, updateScrollPercentage } = this.props

    return (
      <Footer
        androidStatusBarColor="#4075ae"
        style={styles.footer}
      >
        <View style={styles.line}/>
        <ProgressDot
          left={SIDE_SPACING + 0}
          size={30}
          label="13%"
        />
        {/* <ProgressDot
          left={SIDE_SPACING + 100}
          size={6}
        /> */}
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