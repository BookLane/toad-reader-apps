import React, { useState, useEffect, useCallback, useMemo } from "react"
import { StyleSheet, View, Text, Platform, AppState } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
// import { i18n } from "inline-i18n"
import { Image } from 'expo-image'

import { refreshUserData } from "../../utils/syncUserData"
import { setStatusBarHidden, showConsent } from "../../utils/toolbox"
import useRouterState from "../../hooks/useRouterState"
import useWideMode from "../../hooks/useWideMode"
import useBookCookies from "../../hooks/useBookCookies"
import useDimensions from "../../hooks/useDimensions"
import { setLatestLocation, startRecordReading, endRecordReading, setConsentShown,
         setTocAndSpines, setBookCookies } from "../../redux/actions"
import { logEvent } from "../../utils/analytics"
import { getDataOrigin, getIDPOrigin } from '../../utils/toolbox'

import SafeLayout from "../basic/SafeLayout"
import BackFunction from '../basic/BackFunction'
import CoverAndSpin from '../basic/CoverAndSpin'
import AudiobookHeader from "../major/AudiobookHeader"
import AudiobookPlayer from "../major/AudiobookPlayer"


const styles = StyleSheet.create({
  content: {
    ...StyleSheet.absoluteFillObject,
    top: 56,
    maxHeight: 550,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
})

const Audiobook = React.memo(({

  idps,
  accounts,
  books,
  userDataByBookId,

  setLatestLocation,
  startRecordReading,
  endRecordReading,
  setConsentShown,
  setTocAndSpines,
  setBookCookies,

}) => {

  // const [ currentAppState, setCurrentAppState ] = useState('active')

  const { historyGoBackToLibrary } = useRouterState()

  const idpId = Object.keys(accounts)[0].split(':')[0]
  const { bookId } = useParams()
  const book = (books || {})[bookId]
  const latest_location = (userDataByBookId[bookId] || {}).latest_location
  const wideMode = useWideMode()
  const bookCookiesReady = useBookCookies({ books, accounts, idp: idps[idpId], setBookCookies, bookId })
  const downloadOrigin = __DEV__ ? getDataOrigin(idps[idpId]) : getIDPOrigin(idps[idpId])
  const { width, height } = useDimensions().window
  const imageSize = Math.min(400, width - 20, height - 56 - 200)

  useEffect(
    () => {
      if(!book) return

      // get fresh user data
      Object.keys(book.accounts).forEach(accountId => {
        refreshUserData({
          accountId,
          bookId,
        })
      })
    },
    [],
  )

  useEffect(
    () => showConsent({ idps, setConsentShown }),
    [],
  )

  // useEffect(
  //   () => {
  //     const handleAppStateChange = nextAppState => {
  //       if(mode === 'page') {
  //         if(currentAppState === 'active' && nextAppState !== 'active') {
  //           endRecordReading()
      
  //         } else if(currentAppState !== 'active' && nextAppState === 'active') {
  //           startRecordReading({
  //             bookId,
  //             spineIdRef,
  //           })
  //         }
  //       }
    
  //       setCurrentAppState(nextAppState)
  //     }
    
  //     const subscription = AppState.addEventListener('change', handleAppStateChange)

  //     startRecordReading({
  //       bookId,
  //       spineIdRef,
  //     })

  //     return () => {
  //       if(mode === 'page') {
  //         endRecordReading()
  //       }
    
  //       subscription.remove()
  //     }
  //   },
  //   [ spineIdRef, currentAppState, mode ],
  // )

  useEffect(
    () => {
      setStatusBarHidden(!wideMode || Platform.OS === 'ios')
      return () => setStatusBarHidden(false)
    },
    [ wideMode ],
  )

  const { title, audiobookInfo } = book || {}
  const { coverFilename, spines } = audiobookInfo || {}

  if(Platform.OS === 'web' && !bookCookiesReady) {
    return (
      <SafeLayout>
        <CoverAndSpin />
      </SafeLayout>
    )
  }

  return (
    <SafeLayout>
      <BackFunction func={historyGoBackToLibrary} />

      <AudiobookHeader
        {...book}
      />

      <View style={styles.content}>

        <View />

        <Image
          source={`${downloadOrigin}/epub_content/covers/${coverFilename}`}
          style={[
            styles.image,
            {
              width: imageSize,
              height: imageSize,
            },
          ]}
          contentFit="cover"
        />

        <AudiobookPlayer
          sourceBase={`${downloadOrigin}/epub_content/book_${bookId}/`}
          {...book}
        />

      </View>

    </SafeLayout>
  )
})

const mapStateToProps = ({ idps, accounts, books, userDataByBookId }) => ({
  idps,
  accounts,
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setLatestLocation,
  startRecordReading,
  endRecordReading,
  setConsentShown,
  setTocAndSpines,
  setBookCookies,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Audiobook)