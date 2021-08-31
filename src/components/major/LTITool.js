import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import { validLTIUrl, getDataOrigin, safeFetch, getReqOptionsWithAdditions, openURL } from "../../utils/toolbox"
import useClassroomInfo from "../../hooks/useClassroomInfo"
import useRouterState from "../../hooks/useRouterState"

import Button from "../basic/Button"
import CoverAndSpin from "../basic/CoverAndSpin"
import FlipEditorContent from '../basic/FlipEditorContent'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonWrapper: {
    position: 'relative',
  },
  noLTISetup: {
    marginTop: 20,
  },
  instructionsContainer: {
    flex: 1,
  },
  instructions: {
    paddingTop: 0,
  },
})

const LTITool = React.memo(({
  bookId,
  toolUid,
  logUsageEvent,

  url,
  instructions,
  fromDefaultClassroom,

  idps,
  accounts,
  books,
  userDataByBookId,
}) => {

  const { idpId, accountId, classroom } = useClassroomInfo({ books, bookId, userDataByBookId })
  const { historyPush } = useRouterState()

  const [ showWaiting, setShowWaiting ] = useState(false)

  const launch = useCallback(
    async () =>  {

      setShowWaiting(true)

      try {

        // get a JWT from the backend which includes expiry time, lti link, info to post to that link
        const getLaunchLinkUrl = `${getDataOrigin(idps[idpId])}/getltilaunchlink/${toolUid}`
        const response = await safeFetch(getLaunchLinkUrl, getReqOptionsWithAdditions({
          headers: {
            "x-cookie-override": accounts[accountId].cookie,
          },
        }))

        if(response.status !== 200) {
          throw new Error('Server-side error.')
        }

        const { success, error, launchLink } = await response.json()

        if(!success) {
          throw new Error(error)
        }

        openURL({ url: launchLink, historyPush })

        logUsageEvent({
          toolUid,
          usageType: `LTI launch`,
          'LTI domain': (url.match(/^https?:\/\/([^:\/\n?]+)/i) || [])[1],
        })

      } catch(err) {
        historyPush("/error", err)
      }

      setShowWaiting(false)

    },
    [ toolUid ],
  )

  const invalidSetup = !validLTIUrl({ url, fromDefaultClassroom, classroom })

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            status="primary"
            onPress={launch}
            disabled={invalidSetup || showWaiting}
          >
            {i18n("Launch")}
          </Button>
          {showWaiting && <CoverAndSpin />}
        </View>
      </View>
      {!!invalidSetup &&
        <Text style={styles.noLTISetup}>
          {i18n("There is not a LTI configuration with a domain matching this tool’s Launch URL.")}
        </Text>
      }
      {!invalidSetup && !!instructions &&
        <View style={styles.instructionsContainer}>
          <FlipEditorContent
            content={instructions}
            style={styles.instructions}
          />
        </View>
      }
    </View>
  )
})

const mapStateToProps = ({ idps, accounts, books, userDataByBookId }) => ({
  idps,
  accounts,
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LTITool)