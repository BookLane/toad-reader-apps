import React, { useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import { getToolbarHeight } from '../../utils/toolbox'
import useWideMode from "../../hooks/useWideMode"
import useRouterState from "../../hooks/useRouterState"
import { setSelectedToolUid } from "../../redux/actions"

import Highlights from "./Highlights"
import HeaderIcon from "../basic/HeaderIcon"

const container = {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'white',
  zIndex: 7,
}

const styles = StyleSheet.create({
  container: {
    ...container,
  },
  constainerWideMode: {
    ...container,
    top: getToolbarHeight(),
    paddingTop: 20,
  },
  topSection: {
    zIndex: 1,
  },
  topSectionWideMode: {
    paddingHorizontal: 30,
    zIndex: 1,
    flexDirection: 'row',
  },
  headingLine: {
    flexDirection: 'row',
    padding: 8,
    height: getToolbarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.1)',
  },
  headingLineWideMode: {
    flexDirection: 'row',
    flex: 1,
  },
  heading: {
    fontSize: 19,
    flex: 1,
    lineHeight: 40,
  },
  headingWideMode: {
    paddingBottom: 10,
    marginBottom: -10,
    backgroundColor: 'white',
    fontWeight: '600',
    fontSize: 18,
    flex: 1,
  },
  closeContainer: {
    alignSelf: 'center',
  },
  close: {
    position: 'absolute',
    right: -14,
    height: 40,
    top: -20,
    right: -10,
  },
})

const HighlightsWrapper = React.memo(({
  bookId,
  goTo,
  closeToolAndExitReading,

  setSelectedToolUid,
}) => {

  const wideMode = useWideMode()
  const { getRouterState, historyGoBack, historyReplace } = useRouterState()

  const xOutOfHighlights = useCallback(
    () => {
      setSelectedToolUid({ bookId, getRouterState, historyGoBack, historyReplace })
    },
    [ bookId ],
  )

  return (
    <View style={wideMode ? styles.constainerWideMode : styles.container}>
      <View style={wideMode ? styles.topSectionWideMode : styles.topSection}>
        <View style={wideMode ? styles.headingLineWideMode : styles.headingLine}>
          {!wideMode &&
            <HeaderIcon
              iconName="arrow-back"
              onPress={closeToolAndExitReading}
              style={styles.back}
            />
          }
          <Text style={wideMode ? styles.headingWideMode : styles.heading}>
            {i18n("My highlights and notes")}
          </Text>
          {wideMode &&
            <View style={styles.closeContainer}>
              <HeaderIcon
                iconName="close"
                onPress={xOutOfHighlights}
                uiStatus="faded"
                style={styles.close}
              />
            </View>
          }
        </View>
      </View>
      <Highlights
        bookId={bookId}
        goTo={goTo}
      />
    </View>
  )
})

const mapStateToProps = () => ({
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setSelectedToolUid,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(HighlightsWrapper)