import React, { useState, useEffect, useCallback, useRef } from "react"
import { StyleSheet, View, Text, ScrollView } from "react-native"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Button, Input } from '@ui-kitten/components'
import { i18n } from "inline-i18n"
import { setUser } from "../../utils/analytics"

import { safeFetch, getDataOrigin, getIdsFromAccountId, getReqOptionsWithAdditions } from "../../utils/toolbox"
import useRouterState from "../../hooks/useRouterState"
import useInstanceValue from "../../hooks/useInstanceValue"
import useNetwork from "../../hooks/useNetwork"

import AppHeader from "../basic/AppHeader"
import SafeLayout from "../basic/SafeLayout"
import HeaderIcon from "../basic/HeaderIcon"
import BackFunction from "../basic/BackFunction"
import CoverAndSpin from "../basic/CoverAndSpin"

const {
  AMPLITUDE_API_KEY,
} = Constants.expoConfig.extra

const styles = StyleSheet.create({
  error: {
    paddingTop: 50,
    padding: 20,
    fontSize: 16,
    alignSelf: "center",
    color: "#BB0000",
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    alignSelf: "center",
    maxWidth: 500,
    paddingHorizontal: 20,
    paddingBottom: 300,
  },
  warning: {
    fontSize: 22,
    fontWeight: "bold",
  },
  warningExpl: {
    fontSize: 18,
    marginVertical: 15,
  },
  instructions: {
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    position: "relative",
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  confirmButton: {
    marginRight: 10,
    marginBottom: 10,
  },
  cancelButton: {
    marginBottom: 10,
  },
  accountDeletedContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
  accountDeleted: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
})

const DeleteMyAccount = ({
  idps,
  accounts,
}) => {

  const { online } = useNetwork()
  const { historyReplace, historyGoBackToLibrary } = useRouterState()

  const [ code, setCode ] = useState(``)
  const getCode = useInstanceValue(code)
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState()
  const [ accountDeleted, setAccountDeleted ] = useState(false)

  const accountId = Object.keys(accounts)[0]
  const { idpId } = getIdsFromAccountId(accountId)

  const expires_at = useRef(Date.now() + (1000*60*60)).current

  const confirmAccountDeletion = useCallback(
    async () => {

      setError()
      setLoading(true)

      try {

        const requestDeletionConfirmationCodeUrl = `${getDataOrigin(idps[idpId])}/delete-account`

        const response = await safeFetch(requestDeletionConfirmationCodeUrl, getReqOptionsWithAdditions({
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            "x-cookie-override": accounts[accountId].cookie,
          },
          body: JSON.stringify({
            expires_at,
            code: getCode(),
            AMPLITUDE_API_KEY,
          }),
        }))

        if(response.status !== 200) {
          throw new Error(response.statusText || i18n("Invalid code"))
        }

        setUser()
        setAccountDeleted(true)
        setLoading(false)

      } catch(err) {
        setError(err.message)
        setLoading(false)
      }

    },
    [],
  )

  const goLogOut = useCallback(
    () => {
      historyGoBackToLibrary()
      setTimeout(() => {
        historyReplace("/", {
          logOutAccountId: accountId,
        })
      }, 100)
    },
    [],
  )

  useEffect(
    () => {
      ;(async () => {

        setError()
        setLoading(true)

        try {

          const requestDeletionConfirmationCodeUrl = `${getDataOrigin(idps[idpId])}/request-deletion-confirmation-code`

          const response = await safeFetch(requestDeletionConfirmationCodeUrl, getReqOptionsWithAdditions({
            method: 'POST',
            headers: {
              "Content-Type": 'application/json',
              "x-cookie-override": accounts[accountId].cookie,
            },
            body: JSON.stringify({
              expires_at,
            }),
          }))

          if(response.status >= 400) {
            setError(response.statusText)
          }

          setLoading(false)

        } catch(err) {
          setError(err.message)
          setLoading(false)
        }

      })()
    },
    [],
  )

  return (
    <SafeLayout>
      <BackFunction func={historyGoBackToLibrary} />
      <AppHeader
        title={i18n("Delete my account")}
        leftControl={
          <HeaderIcon
            iconName="arrow-back"
            onPress={historyGoBackToLibrary}
            disabled={accountDeleted}
          />
        }
      />
      {loading && <CoverAndSpin />}
      {!!(error || !online) &&
        <Text style={styles.error}>
          {!online
            ? i18n("You must have an active internet connection to delete your account.")
            : `ERROR: ${error}`
          }
        </Text>
      }
      {!error && !accountDeleted &&
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.warning}>
            {i18n("Warning")}
          </Text>
          <Text style={styles.warningExpl}>
            {i18n("Deleting your account is irreversible and will permanently destroy all your app data on this device and on the eReader servers.")}
            {` `}
            {idps[idpId].additionalAccountDeletionExplanation || null}
          </Text>
          <Text style={styles.instructions}>
            {i18n("Confirm account deletion and your identity by checking your email for the deletion confirmation code that has been sent to you.")}
            {` `}
            {idps[idpId].additionalAccountDeletionExplanation || null}
          </Text>
          <View style={styles.inputContainer}>
            <Input
              style={styles.input}
              value={code}
              onChangeText={setCode}
              placeholder={i18n("e.g. I87D2U")}
              label={i18n("Account deletion confirmation code")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.confirmButton}
              onPress={confirmAccountDeletion}
              status="danger"
              appearance="filled"
              disabled={!code}
            >
              {i18n("Permanently delete my account")}
            </Button>
            <Button
              style={styles.cancelButton}
              onPress={historyGoBackToLibrary}
              status="basic"
              appearance="filled"
            >
              {i18n("Cancel")}
            </Button>
          </View>
        </ScrollView>
      }
      {!error && accountDeleted &&
        <View style={styles.accountDeletedContainer}>
          <Text style={styles.accountDeleted}>
            {i18n("Your account has been deleted and will be scrubbed from analytics and backup data within 30 days.")}
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              onPress={goLogOut}
              status="basic"
              appearance="filled"
            >
              {i18n("Okay")}
            </Button>
          </View>
        </View>
      }
      {loading &&
        <CoverAndSpin
          style={{ backgroundColor: 'white' }}
        />
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

export default connect(mapStateToProps, matchDispatchToProps)(DeleteMyAccount)
