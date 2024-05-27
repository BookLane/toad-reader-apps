import React, { useState, useCallback, useRef, useEffect } from "react"
import { StyleSheet, View, ScrollView, Text, Platform, Alert } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import useClassroomInfo from '../../hooks/useClassroomInfo'
import useInstanceValue from '../../hooks/useInstanceValue'
import useSetTimeout from "../../hooks/useSetTimeout"
import useScroll from '../../hooks/useScroll'
import useKeyboardSize from '../../hooks/useKeyboardSize'
import { getDataOrigin, getDateLine, getReqOptionsWithAdditions, getTimeLine, safeFetch } from "../../utils/toolbox"
import getDummyDiscussionQuestions from "../../utils/getDummyDiscussionQuestions"

import TextInput from "../basic/TextInput"
import Icon from "../basic/Icon"
import Button from "../basic/Button"
import Spin from "../basic/Spin"

const POLLING_GAP_MS = 5000
const PAGE_SIZE = 20

const response = {
  backgroundColor: 'rgb(211, 218, 230)',
  paddingVertical: 13,
  paddingHorizontal: 15,
  borderRadius: 4,
  marginVertical: 5,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  error: {
    marginVertical: 20,
    marginHorizontal: 30,
    textAlign: 'center',
    paddingTop: 50,
    color: 'red',
    fontSize: 17,
  },
  question: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 20,
    marginHorizontal: 30,
  },
  discussionContainer: {
    flex: 1,
  },
  discussion: {
    paddingHorizontal: 30,
    marginVertical: 20,
    maxWidth: 600,
  },
  spinContainer1: {
    position: 'relative',
    zIndex: 1,
  },
  spinContainer2: {
    position: 'absolute',
    width: '100%',
    top: -15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  spinContainer3: {
    backgroundColor: 'white',
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderRadius: 18,
    padding: 8,
  },
  responseDate: {
    marginVertical: 4,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
  },
  myResponse: {
    ...response,
    backgroundColor: 'rgb(247, 249, 252)',
  },
  response: {
    ...response,
  },
  responseText: {
  },
  responseInfo: {
    flexDirection: 'row',
    marginTop: 10,
  },
  responseAuthor: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 11,
  },
  responseTime: {
    fontWeight: '100',
    fontSize: 11,
  },
  newResponse: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,.1)',
    paddingHorizontal: 5,
  },
  newResponseInput: {
    flex: 1,
    ...(Platform.OS !== 'web' ? {} : { outlineStyle: 'none' }),
    marginLeft: 10,
    marginVertical: 10,
    paddingVertical: 8,
    maxHeight: 150,
    lineHeight: 19,
  },
  sendButton: {
    borderRadius: 25,
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
  },
  sendIcon: {
    height: 22,
    transform: [
      {
        translateX: 3,
      },
    ],
  },
})

const DiscussionQuestionTool = React.memo(({
  bookId,
  toolUid,
  viewingPreview,
  extraKeyboardVerticalOffset=0,
  logUsageEvent,

  question,

  idps,
  accounts,
  books,
}) => {

  const isDummy = /^dummy/.test(toolUid)

  const { classroomUid, idpId, userId } = useClassroomInfo({ books, bookId })
  const idp = idps[idpId]

  const [ inputHeight, setInputHeight ] = useState(0)
  const [ responses, setResponses ] = useState((isDummy && getDummyDiscussionQuestions().responses[toolUid]) || [])
  const [ newResponseValue, setNewResponseValue ] = useState("")
  const [ gettingResponses, setGettingResponses ] = useState(true)
  const [ error, setError ] = useState()

  const [ setPollTimeout ] = useSetTimeout()
  const prevContentSizeHeight = useRef()

  const getResponses = useInstanceValue(responses)
  const getNewResponseValue = useInstanceValue(newResponseValue)

  const safeAreaInsets = useSafeAreaInsets()

  const { scrolledToEnd, contentSizeHeight, y, onScroll, onContentSizeChange } = useScroll({ scrolledToEndGraceY: 50, handleScrolledToTop })
  const scrollViewRef = useRef()

  useKeyboardSize({
    handleChange: ({ changeInHeight }) => {
      scrollViewRef.current.scrollTo({
        x: 0,
        y: y.current + changeInHeight,
        animated: false,
      })
    },
  })

  const handleNewResponses = useCallback(
    ({ responses=[] }={}) => {

      const wasScrolledToEnd = scrolledToEnd.current

      const existingResponses = getResponses()

      let newResponses = [
        ...responses,
        ...existingResponses,
      ]

      newResponses.sort((a, b) => a.submitted_at - b.submitted_at)

      const uids = {}
      newResponses = newResponses.filter(({ uid }) => {
        if(!uids[uid]) {
          uids[uid] = true
          return true
        }
      })

      const gotNewPage = (responses.slice(-1)[0] || {}).submitted_at <= (existingResponses[0] || {}).submitted_at

      prevContentSizeHeight.current = gotNewPage ? contentSizeHeight.current : null

      setGettingResponses(false)
      setResponses(newResponses)

      if(
        !gotNewPage
        && (
          wasScrolledToEnd
          || (responses[0] || {}).user_id === userId
        )
      ) {
        const doScroll = () => scrollViewRef.current.scrollToEnd({ animated: existingResponses.length > 0 })

        if(Platform.OS === 'web') {
          doScroll()
        } else {
          setTimeout(doScroll)
        }
      }

    },
    [ getResponses ],
  )

  const getDiscussion = useCallback(
    async ({ until, fromAtLeast }) => {

      const accountId = Object.keys(accounts)[0] || ""
      const { cookie } = accounts[accountId] || {}
      const path = `${getDataOrigin(idp)}/discussion/getResponses`

      try {

        const result = await safeFetch(path, getReqOptionsWithAdditions({
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            "x-cookie-override": cookie,
          },
          body: JSON.stringify({
            classroomUid,
            toolUid,
            until,
            fromAtLeast,
          }),
        }))

        if(result.status < 400) {
          handleNewResponses(await result.json())
        } else {
          setError(result.statusText)
        }

      } catch(err) {
        setError(err.message)
      }

    },
    [ accounts, idp, classroomUid, toolUid, handleNewResponses ],
  )

  const handleScrolledToTop = useCallback(
    async () => {
      const existingResponses = getResponses()

      if(existingResponses.length >= PAGE_SIZE) {
        setGettingResponses(true)
        await getDiscussion({
          until: existingResponses[0].submitted_at,
        })
      }
    },
    [ getResponses, getDiscussion ],
  )

  const handleScrollViewHeightChange = useCallback(
    (contentWidth, contentHeight) => {
      onContentSizeChange(contentWidth, contentHeight)

      if(prevContentSizeHeight.current) {
        scrollViewRef.current.scrollTo({
          x: 0,
          y: y.current + (contentSizeHeight.current - prevContentSizeHeight.current),
          animated: false,
        })
        prevContentSizeHeight.current = null
      }
    },
    [],
  )

  const handleInputKeyPress = useCallback(
    ({ nativeEvent: { key, metaKey, ctrlKey } }) => {
      if(key === 'Enter' && (metaKey || ctrlKey)) {
        sendNewResponse()
      }
    },
    [],
  )

  const handleInputTextChange = useCallback(
    value => {
      if(value.length === 0) {
        setInputHeight(0)
      }
      setNewResponseValue(value.replace(/(\n\s*\n\s*)\n+/g, '$1'))
    },
    [],
  )

  const handleInputHeightChange = useCallback(({ nativeEvent }) => setInputHeight(nativeEvent.contentSize.height + safeAreaInsets.bottom), [])

  const sendNewResponse = useCallback(
    async () => {

      const text = getNewResponseValue().trim()

      if(text) {

        if(viewingPreview || isDummy) {
          const message = i18n("In the live discussion, this would add your response to the bottom of the feed.", "", "enhanced")

          if(Platform.OS === 'web') {
            alert(message)
          } else {
            Alert.alert(
              i18n("Note"),
              message,
            )
          }

          setNewResponseValue("")
          setInputHeight(0)

          return
        }

        setGettingResponses(true)
        setNewResponseValue("")
        setInputHeight(0)

        const accountId = Object.keys(accounts)[0] || ""
        const { cookie } = accounts[accountId] || {}
        const path = `${getDataOrigin(idp)}/discussion/addResponse`

        try {
          const result = await safeFetch(path, getReqOptionsWithAdditions({
            method: 'POST',
            headers: {
              "Content-Type": 'application/json',
              "x-cookie-override": cookie,
            },
            body: JSON.stringify({
              toolUid,
              text,
            }),
          }))

          if(result.status < 400) {

            handleNewResponses(await result.json())

            logUsageEvent({
              toolUid,
              usageType: `Discussion contribution`,
            })

          } else {
            setError(result.statusText)
            setNewResponseValue(text)
          }

        } catch(err) {
          setError(err.message)
        }

      }

      setNewResponseValue("")
      setInputHeight(0)

    },
    [ viewingPreview, isDummy, toolUid, accounts, idp, classroomUid, handleNewResponses ],
  )

  const SendIcon = useCallback(({ style }) => <Icon name='send' style={styles.sendIcon} />, [])

  useEffect(
    () => {
      const poll = async () => {
        await getDiscussion({
          until: 'now',
          fromAtLeast: Date.now() - (1000*60*60*24),
        })
        setPollTimeout(poll, POLLING_GAP_MS)
      }
      poll()
    },
    [ getDiscussion ],
  )

  if(error) {
    return (
      <Text style={styles.error}>
        Error: {error} 
      </Text>
    )
  }

  let lastDate

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {question}
      </Text>
      <ScrollView
        style={styles.discussionContainer}
        onScroll={onScroll}
        onContentSizeChange={handleScrollViewHeightChange}
        ref={scrollViewRef}
        scrollEventThrottle={100}
      >
        <View style={styles.discussion}>
          {gettingResponses &&
            <View style={styles.spinContainer1}>
              <View style={styles.spinContainer2}>
                <View style={styles.spinContainer3}>
                  <Spin size="small" />
                </View>
              </View>
            </View>
          }
          {responses.map(({ uid, text, user_id, fullname, submitted_at }) => {

            const newDate = new Date(submitted_at).toDateString()
            const displayDate = newDate !== lastDate
            lastDate = newDate

            return (
              <View key={uid}>
                {displayDate &&
                  <Text style={styles.responseDate}>
                    {getDateLine({ timestamp: submitted_at, short: false, relative: true })}
                  </Text>
                }
                <View style={user_id == userId ? styles.myResponse : styles.response}>
                  <Text style={styles.responseText}>
                    {text}
                  </Text>
                  <View style={styles.responseInfo}>
                    <Text style={styles.responseAuthor}>
                      {fullname}
                    </Text>
                    <Text style={styles.responseTime}>
                      {getTimeLine({ timestamp: submitted_at, short: true })}
                    </Text>
                  </View>
                </View>
              </View>
            )
          })}
        </View>
      </ScrollView>
      <View
        style={[
          styles.newResponse,
          {
            paddingBottom: safeAreaInsets.bottom,
          }
        ]}
      >
        <TextInput
          placeholder={
            i18n("Type a response (seen by entire classroom)", "", "enhanced")
            + (
              Platform.OS !== 'web'
                ? ``
                : (
                  `     `
                  + (
                    /^Mac/i.test(window.navigator.platform)
                      ? i18n("⌘ ↩ to send", "", "enhanced")
                      : i18n("Ctrl ↩ to send", "", "enhanced")
                  )
                )
            )
          }
          multiline
          value={newResponseValue}
          onKeyPress={handleInputKeyPress}
          onChangeText={handleInputTextChange}
          onContentSizeChange={handleInputHeightChange}
          style={[
            styles.newResponseInput,
            {
              height: Math.max(35, inputHeight),
            },
          ]}
          returnKeyType="send"
          returnKeyLabel={!newResponseValue.trim() ? i18n("Cancel", "", "enhanced") : null}
          enablesReturnKeyAutomatically={true}
          blurOnSubmit={Platform.OS !== 'web'}
          onSubmitEditing={sendNewResponse}
        />
        {Platform.OS === 'web' &&
          <Button
            style={styles.sendButton}
            appearance="ghost"
            accessoryLeft={SendIcon}
            onPress={sendNewResponse}
            disabled={!newResponseValue.trim()}
          />
        }
      </View>
    </View>
  )
})

const mapStateToProps = ({ idps, accounts, books }) => ({
  idps,
  accounts,
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(DiscussionQuestionTool)