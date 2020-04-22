import { useState, useEffect } from 'react'

import { getDataOrigin, getReqOptionsWithAdditions, safeFetch } from '../utils/toolbox'

const useDashboardData = ({ classroomUid, idp, accounts, query }) => {

  const [ data, setData ] = useState()
  const [ error, setError ] = useState()

  const accountId = Object.keys(accounts)[0] || ""

  useEffect(
    () => {

      (async () => {

        setData()

        const path = `${getDataOrigin(idp)}/${query}/${classroomUid}`
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
    [ query, classroomUid ],
  )

  return {
    data,
    error,
  }

}

export default useDashboardData