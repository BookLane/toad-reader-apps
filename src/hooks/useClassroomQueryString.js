import { useEffect, useState } from 'react'
import { StyleSheet } from "react-native"

import useRouterState from "./useRouterState"
import { safeFetch, getReqOptionsWithAdditions, getDataOrigin } from "../utils/toolbox"
import useSetTimeout from './useSetTimeout'

const styles = StyleSheet.create({
  hiddenWebViewContainer: {
    position: 'absolute',
    maxWidth: 0,
    maxHeight: 0,
    overflow: 'hidden',
  },
})

const getClassroom = ({ userDataByBookId, bookId, classroomUid }) => {
  const { classrooms=[] } = (userDataByBookId || {})[bookId] || {}
  return classrooms.filter(({ uid }) => uid === classroomUid)[0]
}

const getNeedsFreshQueryString = classroom => classroom && (!classroom.classroomQueryString || classroom.classroomQueryString.expireAt < Date.now() + 1000*60*5)

const fetchesByPath = {}

const doFetch = async ({ path, cookie }) => {
  // This function prevents additional unnecessary fetch's from firing

  if(!fetchesByPath[path]) {
    fetchesByPath[path] = safeFetch(path, getReqOptionsWithAdditions({
      headers: {
        "x-cookie-override": cookie,
      },
    }))
  }

  const result = await fetchesByPath[path]
  delete fetchesByPath[path]

  return result
}

export const getClassroomQueryString = async ({ userDataByBookId, accounts, idp, setClassroomQueryString, bookId, classroomUid }) => {

  if(__DEV__) return false

  const classroom = getClassroom({ userDataByBookId, bookId, classroomUid })
  const accountId = Object.keys(accounts)[0]  // TODO: get from book if I ever allow multiple accounts
  const { cookie } = accounts[accountId]
  const dataOrigin = getDataOrigin(idp)
  
  try {
    
    let needsFreshQueryString = getNeedsFreshQueryString(classroom)
    let { classroomQueryString } = classroom || {}

    if(needsFreshQueryString) {
      const path = `${dataOrigin}/classroom_query_string/${classroomUid}.json`
      const response = await doFetch({ path, cookie })

      if(!response || response.status >= 400) return false

      const { queryString } = await response.json()

      const oneDay = 1000*60*60*24
      const expireAt = Date.now() + oneDay

      setClassroomQueryString({ bookId, classroomUid, queryString, expireAt })

      classroomQueryString = {
        queryString,
        expireAt,
      }
    }

    if(classroomQueryString) return classroomQueryString

  } catch(e) {}

  return false
}

const useClassroomQueryString = ({ userDataByBookId, accounts, idp, setClassroomQueryString, bookId, classroomUid }) => {

  const { routerState } = useRouterState()
  const { widget } = routerState
  const [ queryString, setQueryString ] = useState('')
  const [ setRefreshQueryStringTimeout ] = useSetTimeout()
  const [ setRetryGetQueryStringTimeout ] = useSetTimeout()

  const classroom = getClassroom({ userDataByBookId, bookId, classroomUid })

  const checkAndGet = () => {
    (async () => {
      if(__DEV__) return
      if(widget) return
      if(!classroom) return

      const classroomQueryString = await getClassroomQueryString({ userDataByBookId, accounts, idp, setClassroomQueryString, bookId, classroomUid })

      if(classroomQueryString) {
        setQueryString(classroomQueryString.queryString || '')
      } else {
        setQueryString('')
        setRetryGetQueryStringTimeout(checkAndGet, 1000 * 60 * 5)
      }

    })()
  }

  useEffect(
    checkAndGet,
    [ classroomUid ],
  )

  useEffect(
    () => {
      if(__DEV__) return
      if(!classroom) return
      if(!queryString) return

      const { expireAt } = classroom.classroomQueryString || {}

      setRefreshQueryStringTimeout(checkAndGet, expireAt - Date.now())
    },
    [ classroomUid, queryString ],
  )

  return queryString
}

export default useClassroomQueryString