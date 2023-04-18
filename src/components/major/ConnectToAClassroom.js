import React, { useState, useCallback, useEffect } from "react"
import { Platform, StyleSheet } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { BarCodeScanner } from "expo-barcode-scanner"
import { Modal } from "@ui-kitten/components"

import BackFunction from '../basic/BackFunction'
import useRouterState from "../../hooks/useRouterState"
import { getDataOrigin, getReqOptionsWithAdditions, getIdsFromAccountId, safeFetch,
         isIPhoneX, statusBarHeight, bottomSpace } from '../../utils/toolbox'
import { refreshUserData } from "../../utils/syncUserData"
import { setCurrentClassroom } from "../../redux/actions"
import useDimensions from "../../hooks/useDimensions"

import Dialog from "./Dialog"
import DialogInput from "../basic/DialogInput"
import Toast from "../../utils/Toast"
import Button from '../basic/Button'

const styles = StyleSheet.create({
  doQRButton: {
    marginTop: 10,
  },
  modal: {
    ...StyleSheet.absoluteFillObject,
    top: isIPhoneX ? statusBarHeight * -1 - 4 : 0,  // I do not know why the 4 is needed
    backgroundColor: 'black',
  },
  codeScanner: {
    ...StyleSheet.absoluteFillObject,
  },
  backToTextCodeButton: {
    position: 'absolute',
    bottom: 30 + bottomSpace,
    left: 30,
    right: 30,
  },
})

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
  const [ hasPermission, setHasPermission ] = useState()
  const [ mode, setMode ] = useState("text")

  const windowDimensions = useDimensions().window

  const { historyPush, historyReplace } = useRouterState()

  const setModeQR = useCallback(() => setMode("qr"), [])
  const setModeText = useCallback(() => setMode("text"), [])

  useEffect(
    () => {
      setTimeout(async () => {
        if(mode === "qr" && !hasPermission) {

          const { status } = await BarCodeScanner.requestPermissionsAsync()

          if(status === 'granted') {
            setHasPermission(true)
          } else {
            setModeText()
          }

        }
      })
    },
    [ mode, hasPermission ],
  )

  const book = books[currentBookId] || {}
  const accountId = Object.keys(book.accounts)[0] || ""
  const { idpId } = getIdsFromAccountId(accountId)
  const idp = idps[idpId]

  const connectToAClassroom = useCallback(
    async ({ qrCode }) => {

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
          body: JSON.stringify({ code: qrCode || code }),
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
            ? i18n("You are now connected as an instructor.", "", "enhanced")
            : i18n("You are now connected as an student.", "", "enhanced")
        ),
        duration: 4000,
      })

    },
    [ idp, accounts, books, idpId, accountId, currentBookId, code ],
  )

  const handleBarCodeScanned = useCallback(
    ({ data }) => {
      if(/^[A-Z0-9]+$/.test(data)) {
        setModeText()
        connectToAClassroom({ qrCode: data })
      }
    },
    [ connectToAClassroom ],
  )

  const onChangeText = useCallback(code => setCode(code), [])

  return (
    <>
      {!!open && <BackFunction func={requestHide} />}
      <Dialog
        open={!!open && (mode === 'text' || !hasPermission)}
        type="confirm"
        title={i18n("Connect to a classroom", "", "enhanced")}
        message={
          <>
            <DialogInput
              value={code}
              onChangeText={onChangeText}
              label={i18n("Text code", "", "enhanced")}
              placeholder={i18n("Eg. {{example}}", "", "enhanced", { example: "U76RE9" })}
            />
            {Platform.OS !== 'web' &&
              <Button
                style={styles.doQRButton}
                onPress={setModeQR}
                size="small"
                status="basic"
              >
                {i18n("Scan QR code", "", "enhanced")}
              </Button>
            }
          </>
        }
        confirmButtonText={i18n("Connect", "", "enhanced")}
        confirmButtonStatus="primary"
        onCancel={requestHide}
        onConfirm={connectToAClassroom}
        submitting={connecting}
      />
      <Modal
        visible={!!open && mode === 'qr' && hasPermission}
        allowBackdrop={true}
        style={styles.modal}
      >
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={styles.codeScanner}
        />
        <Button
          style={styles.backToTextCodeButton}
          onPress={setModeText}
          status="basic"
        >
          {i18n("Cancel")}
        </Button>
      </Modal>
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