import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import MetadataFilterChip from "./MetadataFilterChip"

const styles = StyleSheet.create({
  expl: {
    opacity: .5,
    paddingHorizontal: 20,
    paddingTop: 17,
  },
  key: {
    fontWeight: '500',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 5,
  },
  chips: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: 17,
  },
})

const MetadataFilterChips = ({
  requestClose,

  metadataKeys,
}) => {

  return (
    <View style={styles.container}>

      <Text style={styles.expl}>
        {i18n("Or filter which books are displayed...")}
      </Text>

      {metadataKeys.filter(({ options }) => options).map(({ id, name, options }) => (
        <View key={id} style={styles.keyContainer}>

          <Text style={styles.key}>
            {name}
          </Text>

          <View style={styles.chips}>
            {options.map(value => (
              <MetadataFilterChip
                key={value}
                metadataKeyId={id}
                value={value}
                requestClose={requestClose}
              />
            ))}
          </View>

        </View>
      ))}

    </View>
  )
}

const mapStateToProps = ({ metadataKeys }) => ({
  metadataKeys,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(MetadataFilterChips)