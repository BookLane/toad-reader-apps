import { useState, useEffect } from 'react'

import { getDataOrigin, getReqOptionsWithAdditions, safeFetch } from '../utils/toolbox'

const useDashboardData = ({ classroomUid, idp, accounts, query, appendToPathItems=[] }) => {

  const [ data, setData ] = useState()
  const [ error, setError ] = useState()

  const accountId = Object.keys(accounts)[0] || ""
  const { cookie } = accounts[accountId] || {}
  const appendToPath = [ "", ...appendToPathItems.filter(Boolean) ].join('/')
  const path = `${getDataOrigin(idp)}/${query}/${classroomUid}${appendToPath}`

  useEffect(
    () => {
      (async () => {

        setData()
        setError()

        let response = {}

        try {
          response = await safeFetch(path, getReqOptionsWithAdditions({
            headers: {
              "x-cookie-override": cookie,
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
    [ path, cookie ],
  )

  return {
    data,
    error,
  }

}

export default useDashboardData