import React from "react"
import { StyleSheet, Platform, View, Dimensions } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Footer } from "native-base"
import nativeBasePlatformVariables from 'native-base/src/theme/variables/platform'
import i18n from "../../utils/i18n.js"

import ProgressDot from "../basic/ProgressDot"

// import {  } from "../../redux/actions.js"

const SIDE_SPACING = 20

const footerHeight = nativeBasePlatformVariables.footerHeight - (nativeBasePlatformVariables.isIphoneX ? 34 : 0)

const styles = StyleSheet.create({
  footer: {
    ...(Platform.OS === 'android' ? {backgroundColor: '#4075ae'} : {}),
    flexDirection: 'row',
  },
  line: {
    backgroundColor: Platform.OS === 'android' ? 'white' : 'black',
    flex: 1,
    marginLeft: SIDE_SPACING,
    marginRight: SIDE_SPACING,
    height: 1,
    top: footerHeight / 2 - .5,
  },
})

class BookProgress extends React.Component {

  render() {
    const { mainDotLeft, updateScrollPercentage } = this.props


    return (
      <Footer
        androidStatusBarColor="#4075ae"
        style={styles.footer}
      >
        <View style={styles.line}/>
        <ProgressDot
          left={mainDotLeft}
          size={30}
          // label={i18n("{{percent}}%", { percent: Math.round(scrollPercentage * 100) })}
          label={i18n("{{percent}}%", { percent: 20 })}
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