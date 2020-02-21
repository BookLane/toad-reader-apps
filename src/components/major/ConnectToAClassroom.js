import React, { useState, useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import BackFunction from '../basic/BackFunction'
import useRouterState from "../../hooks/useRouterState"
import { getDataOrigin, getReqOptionsWithAdditions, getIdsFromAccountId, safeFetch } from '../../utils/toolbox'
import { refreshUserData } from "../../utils/syncUserData"
import { setCurrentClassroom } from "../../redux/actions"

import Dialog from "./Dialog"
import DialogInput from "../basic/DialogInput"
import Toast from "../../utils/Toast"

// const styles = StyleSheet.create({
// })

const ConnectToAClassroom = React.memo(({
  open,
  requestHide,
  bookId: currentBookId,

  idps,
  accounts,
  books,

  setCurrentClassroom,
}) => {

  const [ code, setCode ] = useState("")
  const [ connecting, setConnecting ] = useState(false)

  const { historyPush, historyReplace } = useRouterState()

  const book = books[currentBookId] || {}
  const accountId = Object.keys(book.accounts)[0] || ""
  const { idpId } = getIdsFromAccountId(accountId)
  const idp = idps[idpId]

  const connectToAClassroom = useCallback(
    async () => {

      setConnecting(true)

      const path = `${getDataOrigin(idp)}/connect_to_classroom`
      let response
      try {
        response = await safeFetch(path, getReqOptionsWithAdditions({
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            "x-cookie-override": accounts[accountId].cookie,
          },
          body: JSON.stringify({ code }),
        }))
      } catch(e) {}

      if(!response || response.status >= 400) {
        historyPush("/error", {
          message: i18n("Failed to connect to the classroom. Check the code and try again.", "", "enhanced"),
        })
        return
      }

      const { uid, bookId, role } = await response.json()

      const { success } = await refreshUserData({
        accountId,
        bookId,
      }) || {}

      if(!success) {
        historyPush("/error", {
          message: i18n("You successfully connected to the classroom. However, we are unable to load the classroom data.", "", "enhanced"),
        })
        setConnecting(false)
        return
      }

      if(bookId !== parseInt(currentBookId, 10)) {
        historyReplace(`/book/${bookId}`)
      }

      setCurrentClassroom({
        bookId,
        uid,
      })
      setConnecting(false)
      requestHide({ hideAll: true })

      Toast.show({
        text: (
          role === 'INSTRUCTOR'
            ? i18n("You are now connected as an instructor.")
            : i18n("You are now connected as an student.")
        ),
        duration: 4000,
      })

    },
    [ idp, accounts, books, idpId, accountId, currentBookId, code ],
  )

  const onChangeText = useCallback(code => setCode(code), [])

  return (
    <>
      {!!open && <BackFunction func={requestHide} />}
      <Dialog
        open={!!open}
        type="confirm"
        title={i18n("Connect to a classroom", "", "enhanced")}
        message={
          <DialogInput
            value={code}
            onChangeText={onChangeText}
            label={i18n("Code", "", "enhanced")}
            placeholder={i18n("Eg. {{example}}", "", "enhanced", { example: "U76RE9" })}
          />
        }
        confirmButtonText={i18n("Connect", "", "enhanced")}
        confirmButtonStatus="primary"
        onCancel={requestHide}
        onConfirm={connectToAClassroom}
        submitting={connecting}
      />
    </>
  )
})

const mapStateToProps = ({ idps, accounts, books }) => ({
  idps,
  accounts,
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setCurrentClassroom,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(ConnectToAClassroom)