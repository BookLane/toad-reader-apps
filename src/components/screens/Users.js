import React, { useState, useEffect, useCallback } from "react"
import { StyleSheet, View, Text, ScrollView, Alert } from "react-native"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Autocomplete, AutocompleteItem, Button, Input } from '@ui-kitten/components'
import { i18n } from "inline-i18n"
import copy from 'copy-to-clipboard'

import { safeFetch, getDataOrigin, getIdsFromAccountId, getReqOptionsWithAdditions, getDateLine, getTimeLine, getVersionString } from "../../utils/toolbox"
import useRouterState from "../../hooks/useRouterState"
import useInstanceValue from "../../hooks/useInstanceValue"

import AppHeader from "../basic/AppHeader"
import SafeLayout from "../basic/SafeLayout"
import HeaderIcon from "../basic/HeaderIcon"
import BackFunction from "../basic/BackFunction"
import CoverAndSpin from "../basic/CoverAndSpin"
import LinkLikeText from "../basic/LinkLikeText"
import useSetTimeout from "../../hooks/useSetTimeout"

const MAX_SNIPPET_LENGTH = 350
const DEFAULT_ACTIVITY_LIMIT = 3

const {
  AMPLITUDE_API_KEY,
} = Constants.expoConfig.extra

const styles = StyleSheet.create({
  error: {
    padding: 30,
    fontSize: 18,
  },
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 15,
    padding: 15,
    paddingTop: 0,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 500,
  },
  results: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 15,
    paddingBottom: 300,
    alignSelf: 'center',
    width: '100%',
    maxWidth: 800,
  },
  loadingItem: {
    fontWeight: '300',
    fontStyle: 'italic',
  },
  adminLevel: {
    color: 'red',
  },
  userInfoName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userInfoEmail: {
    fontSize: 17,
  },
  userInfoId: {
    fontWeight: '200',
  },
  userInfoAdminLevel: {
    color: 'red',
  },
  userInfoCreated: {
    fontSize: 12,
  },
  userInfoCreatedTime: {
    fontWeight: 'bold',
  },
  userInfoHeading: {
    marginTop: 20,
    marginBottom: 3,
    fontSize: 18,
    fontWeight: '200',
  },
  userInfoSub: {
    marginVertical: 7,
  },
  userInfoSubLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userInfoSubDetail: {
    fontSize: 12,
  },
  userInfoSubDetailTime: {
    fontWeight: '500',
  },
  userInfoNone: {
  },
  userInfoBook: {
    marginVertical: 7,
  },
  userInfoBookLine1: {
    fontSize: 15,
    marginBottom: 3,
  },
  userInfoBookTitle: {
    fontWeight: '500',
  },
  userInfoBookAuthor: {
    marginLeft: 10,
    fontWeight: '300',
  },
  userInfoBookVersion: {
    fontWeight: '200',
  },
  userInfoBookLine2: {
    fontSize: 12,
  },
  userInfoBookDetail: {
    marginLeft: 10,
    fontWeight: '500',
  },
  userInfoBookDetailValue: {
    fontWeight: '300',
  },
  userInfoLinkLine: {
    fontSize: 12,
  },
  userInfoActivity: {
    marginVertical: 7,
  },
  userInfoActivityDate: {
    fontSize: 10,
    fontWeight: '300',
  },
  userInfoActivityTime: {
    fontWeight: '200',
    marginLeft: 5,
  },
  userInfoActivityAction: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userInfoActivityToolNameLine: {
    fontSize: 13,
  },
  userInfoActivityToolName: {
    fontWeight: 'bold',
  },
  userInfoActivityBook: {
    fontSize: 13,
  },
  userInfoActivityBookTitle: {
    fontWeight: '500',
  },
  userInfoActivityBookAuthor: {
    marginLeft: 10,
    fontWeight: '300',
  },
  userInfoActivityClassroom: {
    fontSize: 13,
  },
  userInfoActivityClassroomLabel: {
    fontSize: 13,
  },
  userInfoActivityClassroomValue: {
    fontWeight: '300',
  },
  userInfoActivityExtra: {
    marginTop: 5,
    fontSize: 11,
    fontWeight: '200',
  },
  moreButton: {
    marginTop: 5,
    width: 150,
  },
  deleteInputContainer: {
    paddingTop: 20,
    marginTop: 50,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,.1)',
  },
  deleteInput: {
    maxWidth: 300,
  },
  deleteButtonContainer: {
    marginTop: 10,
    maxWidth: 300,
  },
  getLoginLink: {
    fontSize: 12,
  },
  copied: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  expires: {
    fontSize: 12,
    marginLeft: 5,
  },
})

let cachedUserSearchResults = {}

const getIdStr = ({ id, user_id_from_idp, email }) => `[id: ${id}${user_id_from_idp !== email ? `, Tenant id: ${user_id_from_idp}` : ``}]`

const Users = ({
  idps,
  accounts,
}) => {

  const [ searchStr, setSearchStr ] = useState(``)
  const getSearchStr = useInstanceValue(searchStr)
  const [ searchResults, setSearchResults ] = useState([])
  const getSearchResults = useInstanceValue(searchResults)
  const [ userInfo, setUserInfo ] = useState({})
  const getUserInfo = useInstanceValue(userInfo)
  const [ limit, setLimit ] = useState(DEFAULT_ACTIVITY_LIMIT)
  const [ copied, setCopied ] = useState(copied)
  const [ setCopiedTimeout ] = useSetTimeout()
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState()
  const [ confirmDeleteEmail, setConfirmDeleteEmail ] = useState(``)

  const accountId = Object.keys(accounts)[0]
  const { idpId } = getIdsFromAccountId(accountId)
  const { useEnhancedReader } = idps[idpId]

  const { historyGoBackToLibrary } = useRouterState()

  const confirmAccountDeletion = useCallback(
    async () => {

      setError()
      setLoading(true)
      setConfirmDeleteEmail(``)

      try {

        const requestDeletionConfirmationCodeUrl = `${getDataOrigin(idps[idpId])}/delete-account`

        const response = await safeFetch(requestDeletionConfirmationCodeUrl, getReqOptionsWithAdditions({
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            "x-cookie-override": accounts[accountId].cookie,
          },
          body: JSON.stringify({
            userIdToDelete: getUserInfo().id,
            AMPLITUDE_API_KEY,
          }),
        }))

        if(response.status !== 200) {
          throw new Error(response.statusText)
        }

        cachedUserSearchResults = {}
        onChangeText(``)

        setTimeout(() => alert(i18n("User has been deleted.")))

      } catch(err) {
        setError(err.message)
        setLoading(false)
      }

    },
    [ idps[idpId], accounts[accountId] ],
  )

  useEffect(
    () => {
      ;(async () => {

        if(!userInfo.id) return

        setError()
        setLoading(true)

        try {

          const path = `${getDataOrigin(idps[idpId])}/userinfo?userId=${encodeURIComponent(getUserInfo().id)}&limit=${limit}`
          const result = await safeFetch(path, getReqOptionsWithAdditions({
            headers: {
              "x-cookie-override": accounts[accountId].cookie,
            },
          }))

          if(result.status < 400) {
            const newUserInfo = await result.json()
            if(newUserInfo.id === getUserInfo().id) {
              setUserInfo(newUserInfo)
            }
          } else {
            setError(result.statusText)
          }

          setLoading(false)

        } catch(err) {
          setError(err.message)
          setLoading(false)
        }

      })()
    },
    [ userInfo.id, limit ],
  )

  const getLoginLink = useCallback(
    async () => {

      setError()
      setLoading(true)

      let response = {}

      try {
        response = await safeFetch(
          `${getDataOrigin(idps[idpId])}/createaccesscode`,
          getReqOptionsWithAdditions({
            method: 'POST',
            headers: {
              "Content-Type": 'application/json',
              "x-cookie-override": accounts[accountId].cookie,
            },
            body: JSON.stringify({ email: userInfo.email }),
          }),
        )

      } catch(err) {
        response.statusText = err.message || 'Internet connection error'
        response.status = 500
      }

      if(response.status >= 400) {
        const json = response.json && await response.json()
        setError((json || {}).error || response.statusText)
        setLoading(false)
        return
      }

      const { accessCode } = await response.json()
      copy(`${window.location.origin}/#/#${JSON.stringify({ doEmailLogin: true, accessCode, back: 0 })}`)
      setCopied(true)
      setCopiedTimeout(() => setCopied(false), 1500)

      setLoading(false)

    },
    [ idps[idpId], accounts[accountId].cookie, userInfo.email ],
  )

  const getUserSearchLabel = useCallback(
    userInfo => (
      `${userInfo.email}${userInfo.fullname ? ` (${userInfo.fullname})` : ``} ${getIdStr(userInfo)}`
    ),
    [],
  )

  const onSelect = useCallback(
    index => {
      const newPartialUserInfo = getSearchResults()[index]
      setLimit(DEFAULT_ACTIVITY_LIMIT)
      setSearchStr(newPartialUserInfo.email)
      setUserInfo(newPartialUserInfo)
    },
    [],
  )

  const onChangeText = useCallback(
    async newSearchStr => {

      setUserInfo({})
      setLimit(DEFAULT_ACTIVITY_LIMIT)
      setSearchStr(newSearchStr)

      if(cachedUserSearchResults[newSearchStr]) {
        setLoading(false)
        if(typeof cachedUserSearchResults[newSearchStr] === 'object') {
          setSearchResults(cachedUserSearchResults[newSearchStr])
        }
        return
      }

      cachedUserSearchResults[newSearchStr] = true
      setSearchResults(getSearchResults().filter(item => getUserSearchLabel(item).toLowerCase().includes(newSearchStr.toLowerCase())))
      setError()
      setLoading(true)

      try {

        const path = `${getDataOrigin(idps[idpId])}/usersearch?searchStr=${encodeURIComponent(newSearchStr)}`
        const result = await safeFetch(path, getReqOptionsWithAdditions({
          headers: {
            "x-cookie-override": accounts[accountId].cookie,
          },
        }))

        if(result.status < 400) {
          const newSearchResults = await result.json()
          cachedUserSearchResults[newSearchStr] = newSearchResults
          setTimeout(() => { delete cachedUserSearchResults[newSearchStr] }, 1000 * 30)  // delete cache value after a short time
          if(newSearchStr === getSearchStr()) {
            setSearchResults(newSearchResults)
          }
        } else {
          delete cachedUserSearchResults[newSearchStr]
          setError(result.statusText)
        }

        setLoading(false)

      } catch(err) {
        delete cachedUserSearchResults[newSearchStr]
        setError(err.message)
        setLoading(false)
      }

    },
    [ idps[idpId], accounts[accountId] ],
  )

  const getMoreActivity = useCallback(() => setLimit(limit + 20), [ limit ])

  useEffect(() => { onChangeText(``) }, [])

  return (
    <SafeLayout>
      <BackFunction func={historyGoBackToLibrary} />
      <AppHeader
        title={i18n("Users")}
        titleCentered={true}
        leftControl={
          <HeaderIcon
            iconName="md-arrow-back"
            onPress={historyGoBackToLibrary}
          />
        }
      />
      {!!error &&
        <Text style={styles.error}>
          {error}
        </Text>
      }
      {!error &&
        <View style={styles.container}>

          <View style={styles.inputContainer}>
            <Autocomplete
              placeholder={i18n("Search by email, name, or id")}
              value={searchStr}
              onSelect={onSelect}
              onChangeText={onChangeText}
            >
              {searchResults.map((user, index) => (
                <AutocompleteItem
                  key={index}
                  title={
                    <Text>
                      {getUserSearchLabel(user)}
                      {user.adminLevel !== 'NONE' &&
                        <Text style={styles.adminLevel}>
                          {` `}
                          {user.adminLevel}
                        </Text>
                      }
                    </Text>
                  }
                />
              ))}
              {loading &&
                <AutocompleteItem
                  title={
                    <Text>
                      <Text style={styles.loadingItem}>
                        {i18n("Loading more...")}
                      </Text>
                    </Text>
                  }
                  disabled
                />
              }
            </Autocomplete>
          </View>

          <View style={styles.results}>

            {!!userInfo.id &&
              <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
              >

                {!!userInfo.fullname &&
                  <>
                    <Text style={styles.userInfoName}>
                      {userInfo.fullname}
                      <Text style={styles.userInfoId}>
                        {` `}
                        {getIdStr(userInfo)}
                      </Text>
                    </Text>
                    <Text style={styles.userInfoEmail}>{userInfo.email}</Text>
                  </>
                }
                {!userInfo.fullname &&
                  <Text style={styles.userInfoName}>
                    {userInfo.email}
                    <Text style={styles.userInfoId}>
                      {` `}
                      {getIdStr(userInfo)}
                    </Text>
                  </Text>
                }

                {userInfo.adminLevel !== 'NONE' &&
                  <Text style={styles.userInfoAdminLevel}>{userInfo.adminLevel}</Text>
                }

                {!!userInfo.created_at &&
                  <>

                    <Text style={styles.userInfoCreated}>
                      {i18n("Created:")}
                      {` `}
                      <Text style={styles.userInfoCreatedTime}>{getDateLine({ timestamp: userInfo.created_at })}</Text>
                    </Text>

                    <Text style={styles.userInfoCreated}>
                      {i18n("Last Login:")}
                      {` `}
                      <Text style={styles.userInfoCreatedTime}>{getDateLine({ timestamp: userInfo.last_login_at })}</Text>
                      {` `}
                      <Text style={styles.userInfoPlatform}>{`(${userInfo.last_login_platform || `Unknown platform`})`}</Text>
                    </Text>

                    <Text>
                      <LinkLikeText
                        style={styles.getLoginLink}
                        onPress={getLoginLink}
                      >
                        {i18n("Get login link")}
                      </LinkLikeText>
                      {copied &&
                        <>
                          <Text style={styles.copied}>
                            {i18n("Copied to clipboard")}
                          </Text>
                          <Text style={styles.expires}>
                            {i18n("(Expires in 15 minutes)")}
                          </Text>
                        </>
                      }
                    </Text>

                    {!!useEnhancedReader &&
                      <>
                        <Text style={styles.userInfoHeading}>{i18n("Recent Interactive Activity")}</Text>
                        {userInfo.interactiveActivity.map(({
                          uid, text, updated_at, submitted_at, score,  // tool_engagement
                          name, toolType, isDiscussion, creatorType, spineIdRef, cfi, currently_published_tool_uid,  // tool
                          classroom_name, classroom_deleted_at,  // classroom
                          book_id, title, author,  // book
                        }) => {

                          const timestamp = submitted_at || updated_at
                          const adjustedText = (text || ``).replace(/\n/g, ' ').replace(/  +/g, ' ').trim()

                          return (
                            <View key={uid} style={styles.userInfoActivity}>

                              <Text style={styles.userInfoActivityDate}>
                                {getDateLine({ timestamp })}
                                {` `}
                                <Text style={styles.userInfoActivityTime}>
                                  {getTimeLine({ timestamp })}
                                </Text>
                              </Text>

                              <Text style={styles.userInfoActivityAction}>
                                {{
                                  POLL: i18n("Answered a poll"),
                                  QUIZ: i18n("Took a quiz"),
                                  QUESTION: i18n("Answered a reflection question"),
                                  DISCUSSION_QUESTION: i18n("Added a comment to a discussion question"),
                                }[isDiscussion ? `DISCUSSION_QUESTION` : toolType]}
                              </Text>

                              <Text style={styles.userInfoActivityToolNameLine}>
                                {i18n("Tool name:")}
                                {` `}
                                <Text style={styles.userInfoActivityToolName}>
                                  {name || {
                                    POLL: i18n("Poll"),
                                    QUIZ: i18n("Quiz"),
                                    QUESTION: i18n("Question"),
                                  }[toolType]}
                                </Text>
                              </Text>

                              <Text style={styles.userInfoActivityBook}>
                                {i18n("Book:")}
                                <LinkLikeText
                                  style={styles.userInfoActivityBookTitle}
                                  url={`/#/book/${book_id}`}
                                >
                                  {` `}
                                  {title}
                                </LinkLikeText>
                                <Text style={styles.userInfoActivityBookAuthor}>
                                  {` `}
                                  {i18n("By:")}
                                  {` `}
                                  {author}
                                </Text>
                              </Text>

                              <Text style={styles.userInfoActivityClassroom}>
                                <Text style={styles.userInfoActivityClassroomLabel}>
                                  {i18n("Classroom:")}
                                </Text>
                                {` `}
                                <Text style={styles.userInfoActivityClassroomValue}>
                                  {classroom_name || i18n("[No classroom]")}                                  {` `}
                                </Text>

                              </Text>

                              {toolType !== 'POLL' &&
                                <Text style={styles.userInfoActivityExtra}>
                                  {{
                                    QUIZ: i18n("Score: {{score}}", { score }),
                                    QUESTION: adjustedText.length > MAX_SNIPPET_LENGTH ? `...${adjustedText.slice(-MAX_SNIPPET_LENGTH)}` : adjustedText,
                                    DISCUSSION_QUESTION: adjustedText.length > MAX_SNIPPET_LENGTH ? `${adjustedText.slice(0, MAX_SNIPPET_LENGTH)}...` : adjustedText,
                                  }[isDiscussion ? `DISCUSSION_QUESTION` : toolType]}
                                </Text>
                              }

                            </View>
                          )
                        })}
                        {userInfo.interactiveActivity.length === 0 &&
                          <Text style={styles.userInfoNone}>
                            {i18n("None")}
                          </Text>
                        }
                        {userInfo.interactiveActivity.length === limit &&
                          <Button
                            onPress={getMoreActivity}
                            size="tiny"
                            style={styles.moreButton}
                            status="basic"
                          >
                            {i18n("Load more activity")}
                          </Button>
                        }
                      </>
                    }

                    <Text style={styles.userInfoHeading}>{i18n("Subscriptions")}</Text>
                    {userInfo.subscriptionInstances.map(({ label, first_given_access_at, expires_at, enhanced_tools_expire_at }, idx) => (
                      <View key={idx} style={styles.userInfoSub}>

                        <Text style={styles.userInfoSubLabel}>
                          {label}
                        </Text>

                        <Text style={styles.userInfoSubDetail}>
                          {i18n("First given access:")}
                          {` `}
                          <Text style={styles.userInfoSubDetailTime}>{getDateLine({ timestamp: first_given_access_at })}</Text>
                        </Text>

                        {!!expires_at &&
                          <Text style={styles.userInfoSubDetail}>
                            {i18n("Expires:")}
                            {` `}
                            <Text style={styles.userInfoSubDetailTime}>{getDateLine({ timestamp: expires_at })}</Text>
                          </Text>
                        }

                        {!!enhanced_tools_expire_at &&
                          <Text style={styles.userInfoSubDetail}>
                            {i18n("Interactive version expires:")}
                            {` `}
                            <Text style={styles.userInfoSubDetailTime}>{getDateLine({ timestamp: enhanced_tools_expire_at })}</Text>
                          </Text>
                        }

                      </View>
                    ))}
                    {userInfo.subscriptionInstances.length === 0 &&
                      <Text style={styles.userInfoNone}>
                        {i18n("None")}
                      </Text>
                    }

                    <Text style={styles.userInfoHeading}>{i18n("Books")}</Text>
                    {userInfo.books.map(({ id, title, author, version, expires_at, enhanced_tools_expire_at, flags, cfi: llCfi }) => {

                      let link = `/#/book/${id}`
                      try {
                        const { idref: spineIdRef, elementCfi: cfi } = JSON.parse(llCfi)
                        link += `#{"latestLocation":${JSON.stringify({ spineIdRef, cfi })}}`
                      } catch(err) {}
                      
                      return (
                        <View key={id} style={styles.userInfoBook}>

                          <Text style={styles.userInfoBookLine1}>

                            <Text style={styles.userInfoBookTitle}>{title}</Text>

                            <Text style={styles.userInfoBookAuthor}>
                              {` `}
                              {i18n("By:")}
                              {` `}
                              {author}
                            </Text>

                          </Text>

                          <Text style={styles.userInfoBookLine2}>

                            <Text style={styles.userInfoBookVersion}>
                              {getVersionString(version)}
                            </Text>

                            {(flags || []).length > 0 &&
                              <Text style={styles.userInfoBookDetail}>
                                {` `}
                                {i18n("Flags:")}
                                {` `}
                                <Text style={styles.userInfoBookDetailValue}>{flags.join(', ')}</Text>
                                
                              </Text>
                            }

                            {!!expires_at &&
                              <Text style={styles.userInfoBookDetail}>
                                {` `}
                                {i18n("Expires:")}
                                {` `}
                                <Text style={styles.userInfoBookDetailValue}>{getDateLine({ timestamp: expires_at })}</Text>
                              </Text>
                            }

                            {!!enhanced_tools_expire_at &&
                              <Text style={styles.userInfoBookDetail}>
                                {` `}
                                {i18n("Interactive version expires:")}
                                {` `}
                                <Text style={styles.userInfoBookDetailValue}>{getDateLine({ timestamp: enhanced_tools_expire_at })}</Text>
                              </Text>
                            }

                          </Text>

                          <Text style={styles.userInfoLinkLine}>

                            <LinkLikeText url={link}>
                              {i18n("Go to this user’s latest reading location")}
                            </LinkLikeText>

                          </Text>

                        </View>
                      )
                    })}
                    {userInfo.books.length === 0 &&
                      <Text style={styles.userInfoNone}>
                        {i18n("None")}
                      </Text>
                    }

                    <View style={styles.deleteInputContainer}>
                      <Input
                        style={styles.deleteInput}
                        value={confirmDeleteEmail}
                        onChangeText={setConfirmDeleteEmail}
                        placeholder={userInfo.email}
                        label={i18n("To delete this user, enter their email here")}
                      />
                    </View>
                    <View style={styles.deleteButtonContainer}>
                      <Button
                        style={styles.confirmButton}
                        onPress={confirmAccountDeletion}
                        status="danger"
                        appearance="filled"
                        disabled={confirmDeleteEmail !== userInfo.email}
                      >
                        {i18n("Permanently delete this account")}
                      </Button>
                    </View>

                  </>
                }
              </ScrollView>
            }

            {!!userInfo.id && loading && <CoverAndSpin />}

          </View>
        </View>
      }

    </SafeLayout>
  )
}

const mapStateToProps = ({ idps, accounts }) => ({
  idps,
  accounts,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Users)
