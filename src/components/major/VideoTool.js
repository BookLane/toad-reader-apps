import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { textToReactNative } from '../../utils/toolbox'

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})

const NotesInsertTool = React.memo(({
  content,
  ...other
}) => {
  console.log('other', other)

  return (
    <View style={styles.container}>
      <Text>
        {/* {content} */}
        {/* {[<Text>hi</Text>, 'there']} */}
        {textToReactNative(content)}
      </Text>
    </View>
  )
})

const mapStateToProps = () => ({
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(NotesInsertTool)