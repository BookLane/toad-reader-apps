import React, { useMemo } from "react"
import { StyleSheet } from "react-native"
import useToggle from "react-use/lib/useToggle"
import { Modal, Card } from "@ui-kitten/components"
import { View, Text } from "react-native"
import { i18n } from "inline-i18n"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import useWideMode from "../../hooks/useWideMode"
import useRouterState from "../../hooks/useRouterState"
import useDimensions from "../../hooks/useDimensions"
import useMetadataValuesByKeyId from "../../hooks/useMetadataValuesByKeyId"

import AppHeader from "../basic/AppHeader"
import HeaderIcon from "../basic/HeaderIcon"

const styles = StyleSheet.create({
  libraryIcon: {
    width: 25,
  },
  info: {
    right: 10,
    left: 'auto',
    top: 55,
    bottom: 'auto',
    maxWidth: 400,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0, .1)',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
  },
  line: {
    flexDirection: 'row',
    marginVertical: 3,
  },
  label: {
    fontWeight: '200',
    fontSize: 15,
    marginRight: 4,
  },
  value: {
    fontWeight: '500',
    fontSize: 15,
  },
})

const AudiobookHeader = React.memo(({
  title,
  author,
  isbn,
  epubSizeInMB,
  metadataValues,

  metadataKeys,
}) => {

  const metadataValuesByKeyId = useMetadataValuesByKeyId(metadataValues)

  const { historyGoBackToLibrary } = useRouterState()
  const wideMode = useWideMode()
  const [ showInfo, toggleShowInfo ] = useToggle()
  const { width } = useDimensions().window

  const leftControl = useMemo(
    () => (
      <HeaderIcon
        iconPack="image"
        iconStyle={styles.libraryIcon}
        onPress={historyGoBackToLibrary}
        uiStatus={wideMode ? "faded" : null}
        iconName={require('../../../assets/library.png')}
      />
    ),
    [ wideMode ],
  )

  const lines = [
    { label: i18n("Title"), value: title },
    (author ? { label: i18n("Author"), value: author } : null),
    { label: i18n("Size"), value: i18n("{{mb}} mb", { mb: epubSizeInMB }) },
    (isbn ? { label: i18n("ISBN"), value: isbn } : null),
    ...metadataKeys.map(({ id, name }) => ({ label: name, value: metadataValuesByKeyId[id] })),
  ].filter(Boolean)

  const rightControls = [
    // <SaveStateHeaderIcon />,
    <HeaderIcon
      iconName="information-outline"
      iconPack="materialCommunity"
      onPress={toggleShowInfo}
      uiStatus={
        (showInfo && "selected")
        || (wideMode && "faded")
        || null
      }
    />,
    <Modal
      visible={showInfo}
      onBackdropPress={toggleShowInfo}
      backdropStyle={styles.infoBackdrop}
      style={[
        styles.info,
        {
          width: width - 20,
        },
      ]}
    >
      {lines.map(({ label, value }, idx) => (
        <View style={styles.line} key={idx}>
          <Text style={styles.label}>
            {i18n("{{label}}:", { label })}
          </Text>
          <Text style={styles.value}>
            {value}
          </Text>
        </View>
      ))}
    </Modal>,
  ]

  return (
    <AppHeader
      title={title}
      titleCentered={true}
      leftControl={leftControl}
      rightControls={rightControls}
      uiStatus={wideMode ? "faded" : null}
    />
  )
})

const mapStateToProps = ({ metadataKeys }) => ({
  metadataKeys,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(AudiobookHeader)