import React from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Tooltip } from "@ui-kitten/components"
import { i18n } from "inline-i18n"
import useToggle from "react-use/lib/useToggle"

import useWideMode from "../../hooks/useWideMode"

import HeaderIcon from "../basic/HeaderIcon"
import CoverAndSpin from "../basic/CoverAndSpin"

const styles = StyleSheet.create({
  spin: {
    backgroundColor: 'white',
  },
  tooltip: {
    maxWidth: 140,
  },
})

const SaveStateHeaderIcon = React.memo(({
  style,

  syncStatus,
}) => {

  const [ showSyncStatus, toggleShowSyncStatus ] = useToggle(false)

  const wideMode = useWideMode()

  const syncStatusIconName = {
    synced: "check",
    error: "alert",
    offline: "cloud-off-outline",
    localonly: "cloud-off-outline",
  }

  const syncStatusMessages = {
    synced: i18n("Saved."),
    patching: i18n("Saving to server..."),
    refreshing: i18n("Saving to server..."),
    error: i18n("Unable to save to server."),
    offline: i18n("You are not connected to the internet. Changes saved offline."),
    localonly: i18n("Without a login, your changes are only saved locally."),
  }

  const syncStatusUIStatus = {
    error: "error",
    offline: "offline",
  }

  return (
    <Tooltip
      visible={showSyncStatus}
      onBackdropPress={toggleShowSyncStatus}
      style={styles.tooltip}
      anchor={() => (
        <TouchableOpacity
          onPress={toggleShowSyncStatus}
          style={style}
        >
          <HeaderIcon
            iconName={syncStatusIconName[syncStatus] || "check"}
            iconPack="materialCommunity"
            onPress={toggleShowSyncStatus}
            uiStatus={
              syncStatusUIStatus[syncStatus]
              || (
                wideMode
                  ? "faded"
                  : null
              )
            }
          />
          {[ 'patching', 'refreshing' ].includes(syncStatus) &&
            <CoverAndSpin
              size="small"
              style={styles.spin}
            />
          }
        </TouchableOpacity>
      )}
    >
      {syncStatusMessages[syncStatus]}
    </Tooltip>
  )
})

const mapStateToProps = ({ syncStatus }) => ({
  syncStatus,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(SaveStateHeaderIcon)