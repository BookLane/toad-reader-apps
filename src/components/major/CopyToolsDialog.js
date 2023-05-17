import React, { useState, useCallback, useEffect } from "react"
import { StyleSheet, View, Text } from "react-native"
import { i18n } from "inline-i18n"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { RadioGroup, Radio, SelectItem, IndexPath } from "@ui-kitten/components"

import { getDataOrigin, getReqOptionsWithAdditions, getIdsFromAccountId, safeFetch, cloneObj } from '../../utils/toolbox'

import Dialog from "./Dialog"
import CheckBox from "../basic/CheckBox"
import Select from "../basic/Select"

const styles = StyleSheet.create({
  error:  {
    marginBottom: 15,
    color: 'red',
  },
  success:  {
    marginBottom: 15,
    color: 'blue',
    fontWeight: 'bold',
  },
  dialog:  {
    width: 350,
    maxWidth: 'calc(100vw - 20px)',
  },
  explanation: {
    fontStyle: 'italic',
    fontSize: 13,
    marginBottom: 5,
  },
  none: {
    color: 'rgba(0,0,0,.6)',
  },
  select: {
    marginTop: 5,
  },
  heading: {
    color: 'rgb(143, 155, 179)',
    fontSize: 15,
    marginTop: 20,
    marginBottom: 8,
  },
})

const CopyToolsDialog = ({
  open,
  onClose,

  idps,
  accounts,
}) => {

  const [ submitting, setSubmitting ] = useState(true)
  const [ errorMessage, setErrorMessage ] = useState()
  const [ groupMembers, setGroupMembers ] = useState([])
  const [ groupMemberIndex, setGroupMemberIndex ] = useState(0)
  const [ bookIndex, setBookIndex ] = useState(-1)
  const [ clearExistingToolsFirst, setClearExistingToolsFirst ] = useState(false)
  const [ success, setSuccess ] = useState(false)
  const [ numToolsCopied, setNumToolsCopied ] = useState(0)

  const accountId = Object.keys(accounts)[0]
  const { idpId } = getIdsFromAccountId(accountId)

  const onSelect = useCallback(({ row }) => setBookIndex(row), [])

  const reset = useCallback(
    () => {
      setErrorMessage()
      setClearExistingToolsFirst(false)
      setBookIndex(-1)
      setSuccess(false)
    },
    [],
  )

  useEffect(
    () => {
      if(!open) return
      setGroupMembers([])
      reset()

      ;(async () => {

        try {

          console.log(`Fetching common books from associated sites...`)

          setSubmitting(true)

          const { cookie } = accounts[accountId]

          const groupMembersWithCommonBooksUrl = `${getDataOrigin(idps[idpId])}/groupmemberswithcommonbooks`
          const response = await safeFetch(groupMembersWithCommonBooksUrl, getReqOptionsWithAdditions({
            headers: {
              "x-cookie-override": cookie,
            },
          }))

          setSubmitting(false)

          if(response.status == 400) {
            let errorMessage = i18n("Configuration error")

            try {
              const json = await response.json()
              errorMessage = json.errorMessage
            } catch(err) {}

            setErrorMessage(errorMessage)
            return

          }

          try {

            const { groupMembers } = await response.json()
            setGroupMembers(cloneObj(groupMembers))
            setGroupMemberIndex(0)
            setBookIndex(-1)

          } catch(err) {
            setErrorMessage(i18n("Configuration error"))
            return
          }

          console.log(`...done fetching common books from associated sites (accountId: ${accountId}).`)

        } catch(err) {

          setSubmitting(false)
          setErrorMessage(i18n("Internet connection error"))

        }
  
      })()
    },
    [ open ],
  )

  const onConfirm = useCallback(
    async () => {
      try {

        console.log(`Submit request to copy interactive tools (idpId: ${idpId})...`)

        setErrorMessage()
        setSubmitting(true)

        const { cookie } = accounts[accountId]

        const copyToolsUrl = `${getDataOrigin(idps[idpId])}/copytools`
        const response = await safeFetch(copyToolsUrl, getReqOptionsWithAdditions({
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            "x-cookie-override": cookie,
          },
          body: JSON.stringify({
            pasteIdpId: groupMembers[groupMemberIndex].idpId,
            bookId: groupMembers[groupMemberIndex].commonBooks[bookIndex].id,
            clearExistingToolsFirst,
          }),
        }))

        setSubmitting(false)

        if(response.status == 400) {
          let errorMessage = i18n("Configuration error")

          try {
            const json = await response.json()
            errorMessage = json.errorMessage
          } catch(err) {}

          setErrorMessage(errorMessage)
          return

        }

        try {

          const { success, numToolsCopied, error } = await response.json()

          if(!success) {
            setErrorMessage(error)
            return
          }

          setNumToolsCopied(numToolsCopied)
          setSuccess(true)

        } catch(err) {
          setErrorMessage(i18n("Configuration error"))
          return
        }

        console.log(`...done updating metadata keys (accountId: ${accountId}).`)

      } catch(err) {

        setSubmitting(false)
        setErrorMessage(i18n("Internet connection error"))

      }
    },
    [ idps, accounts, accountId, onClose, groupMembers, groupMemberIndex, bookIndex, clearExistingToolsFirst ],
  )

  return (
    <>

      <Dialog
        open={open}
        title={i18n("Copy interactive tools to another site", "", "admin")}
        style={styles.dialog}
        onCancel={success ? reset : onClose}
        onConfirm={success ? onClose : onConfirm}
        cancelButtonText={success ? i18n("Copy another") : null}
        confirmButtonText={success ? i18n("Close") : i18n("Copy")}
        confirmButtonDisabled={!((groupMembers[groupMemberIndex] || {}).commonBooks || [])[bookIndex]}
        type="confirm"
        submitting={submitting}
        message={
          <View style={styles.container}>

            {!!errorMessage &&
              <Text style={styles.error}>
                {errorMessage}
              </Text>
            }

            {groupMembers.length === 0 && !errorMessage &&
              <Text style={styles.none}>
                {
                  submitting
                    ? i18n("Fetching common books with associated sites...", "", "admin")
                    : i18n("You do not have any common books with associated sites.", "", "admin")
                }
              </Text>
            }

            {success &&
              <Text style={styles.success}>
                {i18n("{{number}} interactive tool(s) successfully copied.", "", "admin", {
                  number: numToolsCopied,
                })}
              </Text>
            }

            {groupMembers.length > 0 &&
              <Text style={styles.explanation}>
                {i18n("This will copy all publisher interactive tools for a given book, from this site to an associated site.", "", "admin")}
              </Text>
            }

            {groupMembers.length > 0 &&
              <Text style={styles.heading}>
                {i18n("Choose a destination site for the copy", "", "admin")}
              </Text>
            }

            <RadioGroup
              style={styles.radioGroup}
              selectedIndex={groupMemberIndex}
              onChange={setGroupMemberIndex}
            >
              {groupMembers.map(({ id, name }) => (
                <Radio
                  key={id}
                  style={styles.radio}
                  disabled={success}
                >
                  {name}
                </Radio>
              ))}
            </RadioGroup>

            {!!groupMembers[groupMemberIndex] &&
              <>

              <Text style={styles.heading}>
                {i18n("Common book to copy between", "", "admin")}
              </Text>

                <Select
                  style={styles.select}
                  value={(groupMembers[groupMemberIndex].commonBooks[bookIndex] || {}).title || i18n("Choose a book", "", "admin")}
                  selectedIndex={new IndexPath(bookIndex)}
                  onSelect={onSelect}
                  disabled={success}
                >
                  {groupMembers[groupMemberIndex].commonBooks.map(({ id, title }) => (
                    <SelectItem
                      key={id}
                      style={styles.selectItem}
                      title={title}
                    />
                  ))}
                </Select>

                <Text style={styles.heading}>
                  {i18n("Options", "", "admin")}
                </Text>

                <CheckBox
                  style={styles.checkbox}
                  checked={clearExistingToolsFirst}
                  onChange={setClearExistingToolsFirst}
                  status={clearExistingToolsFirst ? `danger` : undefined}
                  disabled={success}
                >
                  {i18n("First DELETE existing publisher interative tools from the destination book.", "", "admin")}
                </CheckBox>

              </>
            }

          </View>
        }
      />

    </>
  )
}

const mapStateToProps = ({ idps, accounts }) => ({
  idps,
  accounts,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(CopyToolsDialog)
