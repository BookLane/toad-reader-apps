import React, { useState, useCallback } from "react"
import { StyleSheet, KeyboardAvoidingView, View, Text, Platform, Alert } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import { submitToolEngagement } from "../../redux/actions"
import useClassroomInfo from '../../hooks/useClassroomInfo'
import useInstanceValue from '../../hooks/useInstanceValue'
import useDashboardData from '../../hooks/useDashboardData'
import { getDateLine, getTimeLine } from "../../utils/toolbox"

import TextInput from "../basic/TextInput"
import Icon from "../basic/Icon"
import Button from "../basic/Button"
import CoverAndSpin from "../basic/CoverAndSpin"

const response = {
  backgroundColor: 'rgb(228, 233, 242)',
  paddingVertical: 13,
  paddingHorizontal: 15,
  borderRadius: 4,
  marginVertical: 5,
}

const styles = StyleSheet.create({
  error: {
    marginVertical: 20,
    marginHorizontal: 30,
    textAlign: 'center',
    paddingTop: 50,
    color: 'red',
    fontSize: 17,
  },
  container: {
    marginVertical: 20,
    marginHorizontal: 30,
    flex: 1,
  },
  question: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,
  },
  discussion: {
    paddingHorizontal: 30,
    marginHorizontal: -30,
    flex: 1,
    maxWidth: 600,
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
    fontWeight: '800',
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
    marginHorizontal: -30,
    marginBottom: -20,
    paddingHorizontal: 15,
  },
  newResponseInput: {
    flex: 1,
    ...(Platform.OS !== 'web' ? {} : { outlineWidth: 0 }),
    marginVertical: 10,
    paddingVertical: 8,
    maxHeight: 150,
    lineHeight: 19,
  },
  sendButton: {
    borderRadius: 25,
    width: 50,
    height: 50,
    marginRight: -10,
    backgroundColor: 'none',
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

  question,

  idps,
  accounts,
  books,

  submitToolEngagement,
}) => {

  const { classroomUid, idpId, userId } = useClassroomInfo({ books, bookId })

  const [ until, setUntil ] = useState('now')
  const [ fromAtLeast, setFromAtLeast ] = useState(Date.now() - (1000*60*60*24))
  const [ inputHeight, setInputHeight ] = useState(0)
  const [ newResponseValue, setNewResponseValue ] = useState("")
  const getNewResponseValue = useInstanceValue(newResponseValue)


  const { data, error } = useDashboardData({
    classroomUid,
    idp: idps[idpId],
    accounts,
    query: "getdiscussion",
    appendToPathItems: [
      toolUid,
      until,
      fromAtLeast,
    ],
  })

  const handleInputTextChange = useCallback(
    value => {
      if(value.length === 0) {
        setInputHeight(0)
      }
      setNewResponseValue(value)
    },
    [],
  )

  const handleInputHeightChange = useCallback(({ nativeEvent }) => setInputHeight(nativeEvent.contentSize.height), [])

  const goUpdateEngagement = useCallback(
    updates => {

      if(viewingPreview) {
        const message = i18n("In the live discussion, this would add your response to the bottom of the feed.")

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

      submitToolEngagement({
        bookId,
        classroomUid,
        toolUid,
        text: getNewResponseValue(),
      })

      setNewResponseValue("")
      setInputHeight(0)

    },
    [ viewingPreview, bookId, classroomUid, toolUid ],
  )

  const SendIcon = useCallback(style => <Icon name='md-send' style={styles.sendIcon} />, [])

  if(error) {
    return (
      <Text style={styles.error}>
        Error: {error} 
      </Text>
    )
  }

  let lastDate

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={80}
      enabled={Platform.OS === 'ios'}
    >
      <Text style={styles.question}>
        {question}
      </Text>
      <View style={styles.discussion}>
        {!data && <CoverAndSpin />}
        {!!data && data.responses.map(({ text, user_id, fullname, submitted_at }) => {

          const newDate = new Date(submitted_at).toDateString()
          const displayDate = newDate !== lastDate
          lastDate = newDate

          return (
            <>
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
            </>
          )
        })}
      </View>
      <View style={styles.newResponse}>
        <TextInput
          placeholder={i18n("Type a response", "", "enhanced")}
          multiline
          value={newResponseValue}
          onChangeText={handleInputTextChange}
          onContentSizeChange={handleInputHeightChange}
          style={[
            styles.newResponseInput,
            {
              height: Math.max(35, inputHeight),
            },
          ]}
        />
        <Button
          style={styles.sendButton}
          appearance="ghost"
          icon={SendIcon}
          onPress={goUpdateEngagement}
          disabled={!newResponseValue.trim()}
        />
      </View>
    </KeyboardAvoidingView>
  )
})

const mapStateToProps = ({ idps, accounts, books }) => ({
  idps,
  accounts,
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  submitToolEngagement,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(DiscussionQuestionTool)