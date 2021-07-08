import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { styled } from '@ui-kitten/components'
import { i18n } from "inline-i18n"

import useMetadataValuesByKeyId from "../../hooks/useMetadataValuesByKeyId"
import { textToReactNative } from "../../utils/toolbox"

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    marginBottom: 5,
  },
  metadata: {
    fontSize: 13,
  },
  key: {
    color: "rgba(0,0,0,.6)",
  },
})

const BookInfoMetadata = ({
  metadataValues,
  style,

  metadataKeys,

  eva: {
    style: themedStyle,
  }={},
}) => {

  const metadataValuesByKeyId = useMetadataValuesByKeyId(metadataValues)

  if((metadataValues || []).length === 0) return null

  return (
    <View
      style={[
        styles.container,
        themedStyle,
        style,
      ]}
    >
      {metadataKeys.filter(({ id }) => !!metadataValuesByKeyId[id]).map(({ id, name, options }) => (
        <Text key={id} style={styles.metadata}>
          <Text style={styles.key}>
            {i18n("{{category}}: ", {
              category: name,
            })}
          </Text>
          <Text style={styles.value}>
            {textToReactNative(metadataValuesByKeyId[id])}
          </Text>
        </Text>
      ))}
    </View>
  )
}

const mapStateToProps = ({ metadataKeys }) => ({
  metadataKeys,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(styled('BookInfoMetadata')(BookInfoMetadata))