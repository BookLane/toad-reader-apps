import { useState, useEffect } from 'react'

import { getDataOrigin, getReqOptionsWithAdditions, safeFetch } from '../utils/toolbox'

const usePostFunction = ({ classroomUid, idp, accounts, query, appendToPathItems=[] }) => {

  const [ posting, setPosting ] = useState(false)
  const [ data, setData ] = useState()
  const [ error, setError ] = useState()

  const accountId = Object.keys(accounts)[0] || ""
  const appendToPath = [ "", ...appendToPathItems.filter(Boolean) ].join('/')


  const post = useCallback(
    () => {

      setPosting(true)

      const path = `${getDataOrigin(idps[adminInfo.idpId])}/setsubscriptions/${bookId}`
      
      const newSubscriptions = checked
        ? [ ...(adminInfo.subscriptions || []), { id: adminInfo.idpId * -1, version: "BASE" }]
        : (adminInfo.subscriptions || []).filter(({ id }) => id !== adminInfo.idpId * -1)
      
      try {
      
        const result = await safeFetch(path, getReqOptionsWithAdditions({
          method: 'POST',
          headers: {
            "Content-Type": 'application/json',
            "x-cookie-override": adminInfo.cookie,
          },
          body: JSON.stringify({ subscriptions: newSubscriptions }),
        }))
      
        if(result.status === 200 && ((await result.json()) || {}).success) {
          setSubscriptions({
            bookId,
            accountId: adminInfo.accountId,
            subscriptions: newSubscriptions,
          })
      
        } else {
          historyPush("/error")
        }
      
      } catch(err) {
        historyPush("/error", {
          message: err.message,
        })
      }
      
      setUpdatingSubscriptions(false)
  
    },
    [],
  )


  useEffect(
    () => {

      (async () => {

        setData()
        setError()

        const path = `${getDataOrigin(idp)}/${query}/${classroomUid}${appendToPath}`
        let response = {}

        try {
          response = await safeFetch(path, getReqOptionsWithAdditions({
            headers: {
              "x-cookie-override": accounts[accountId].cookie,
            },
          }))
        } catch(err) {
          response.statusText = err.message || 'Internet connection error'
          response.status = 500
        }

        const json = response.json ? await response.json() : {}

        if(response.status >= 400) {
          setError(json.error || response.statusText || 'Unknown error')
          return
        }

        setData(json)

      })()
  
    },
    [ query, classroomUid, appendToPath ],
  )

  return {
    post,
    posting,
    data,
    error,
  }

}

export default usePostFunction




