import React, { useCallback } from "react"
import { StyleSheet, View, Text, Linking } from "react-native"
import { withRouter } from "react-router"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { i18n } from "inline-i18n"
import { validLTIUrl, getDataOrigin, safeFetch, getReqOptionsWithAdditions } from "../../utils/toolbox"

import useClassroomInfo from "../../hooks/useClassroomInfo"
import useRouterState from "../../hooks/useRouterState"

import Button from "../basic/Button"

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  noLTISetup: {
    marginTop: 20,
  },
})

const LTITool = React.memo(({
  bookId,
  toolUid,

  url,
  fromDefaultClassroom,

  idps,
  accounts,
  books,
  userDataByBookId,

  history,
}) => {

  const { idpId, accountId, classroom } = useClassroomInfo({ books, bookId, userDataByBookId })
  const { historyPush } = useRouterState({ history })

  const launch = useCallback(
    async () =>  {

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

        Linking.openURL(launchLink)

      } catch(err) {
        historyPush("/error", err)
      }

    },
    [],
  )

  const invalidSetup = !validLTIUrl({ url, fromDefaultClassroom, classroom })

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          status="primary"
          onPress={launch}
          disabled={invalidSetup}
        >
          {i18n("Launch")}
        </Button>
      </View>
      {!!invalidSetup &&
        <Text style={styles.noLTISetup}>
          {i18n("There is not a LTI configuration with a domain matching this tool’s Launch URL.")}
        </Text>
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

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(LTITool))