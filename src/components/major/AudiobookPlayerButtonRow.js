import React, { useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
import { i18n } from "inline-i18n"

import Icon from "../basic/Icon"
import Button from "../basic/Button"
import Spin from "../basic/Spin"

const PLAYBACK_SPEEDS = [ .8, 1, 1.2, 1.5, 2, 2.5 ]

const button = {
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: `space-between`,
    width: 320,
    maxWidth: '100%',
  },
  button: {
    borderRadius: 25,
    height: 46,
    width: 46,
    maxWidth: 46,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  mainButton: {
    borderRadius: 35,
    height: 70,
    width: 70,
    maxWidth: 70,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  buttonText: {
    color: `black`,
    fontSize: 12,
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: `transparent`,
    opacity: .3,
  },
  icon: {
    height: 24,
  },
  icon2: {
    height: 28,
  },
  playIcon: {
    height: 42,
    left: 3,
    position: `relative`,
  },
  pauseIcon: {
    height: 44,
    left: 1,
    position: `relative`,
  },
})

const AudiobookPlayerButtonRow = ({
  positionMS,
  setPosition,
  playing,
  scanIconToShow,
  play,
  pause,
  playbackSpeed,
  getPlaybackSpeed,
  setPlaybackSpeed,
  loading,
  error,
}) => {

  const backTen = useCallback(() => setPosition(positionMS - 10000), [ positionMS, setPosition ])
  const forwardTen = useCallback(() => setPosition(positionMS + 10000), [ positionMS, setPosition ])

  const toggleSpeed = useCallback(
    () => {
      const newPlaybackSpeed = PLAYBACK_SPEEDS[(PLAYBACK_SPEEDS.indexOf(getPlaybackSpeed()) + 1) % PLAYBACK_SPEEDS.length]
      setPlaybackSpeed(newPlaybackSpeed)
    },
    [ getPlaybackSpeed, setPlaybackSpeed ],
  )

  const BackTenIcon = useCallback(({ style }) => <Icon name='replay-10' pack="material" style={styles.icon2} />, [])
  const ForwardTenIcon = useCallback(({ style }) => <Icon name='forward-10' pack="material" style={styles.icon2} />, [])
  const PlayIcon = useCallback(({ style }) => <Icon name='play-sharp' style={styles.playIcon} />, [])
  const PauseIcon = useCallback(({ style }) => <Icon name='pause-sharp' style={styles.pauseIcon} />, [])
  const DownloadIcon = useCallback(({ style }) => <Icon name='file-download' pack="material" style={styles.icon} />, [])
  const DownloadedIcon = useCallback(({ style }) => <Icon name='file-download-done' pack="material" style={styles.icon} />, [])

  if(error) return null

  return (
    <View style={styles.buttonContainer}>
      <Button
        style={[
          styles.button,
          loading && styles.disabled,
        ]}
        status="basic"
        appearance="ghost"
        onPress={toggleSpeed}
        disabled={loading}
      >
        {() => (
          <Text
            style={styles.buttonText}
          >
            {i18n("{{speed}}x", {
              speed: playbackSpeed.toFixed(1),
            })}
          </Text>
        )}
      </Button>
      <Button
        style={[
          styles.button,
          loading && styles.disabled,
        ]}
        status="basic"
        appearance="ghost"
        accessoryLeft={BackTenIcon}
        onPress={backTen}
        disabled={loading}
      />
      <Button
        style={[
          styles.mainButton,
          loading && styles.disabled,
        ]}
        appearance="ghost"
        accessoryLeft={
          {
            play: PlayIcon,
            pause: PauseIcon,
          }[scanIconToShow]
          || (
            loading
              ? <Spin />
              : (
                playing
                  ? PauseIcon
                  : PlayIcon
              )
          )
        }
        onPress={playing ? pause : play}
        disabled={loading}
      />
      <Button
        style={[
          styles.button,
          loading && styles.disabled,
        ]}
        status="basic"
        appearance="ghost"
        accessoryLeft={ForwardTenIcon}
        onPress={forwardTen}
        disabled={loading}
      />
      <Button
        style={[
          styles.button,
          loading && styles.disabled,
        ]}
        status="basic"
        appearance="ghost"
        accessoryLeft={DownloadIcon}
        // onPress={forwardTen}
        disabled={loading}
      />
    </View>
  )
}

export default AudiobookPlayerButtonRow