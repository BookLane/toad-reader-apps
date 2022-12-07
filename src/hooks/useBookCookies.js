import { useEffect, useState } from 'react'
import { Platform } from "react-native"

import useRouterState from "./useRouterState"
import { safeFetch, getReqOptionsWithAdditions, getDataOrigin, bookCookiesToCookieStr } from "../utils/toolbox"
import useSetTimeout from './useSetTimeout'

const getNeedsFreshCookies = book => book && (!book.bookCookies || book.bookCookies.expireAt < Date.now() + 1000*60*5)

export const getBookCookie = async ({ books, accounts, idp, setBookCookies, bookId }) => {

  if(__DEV__) return false

  const book = (books || {})[bookId]
  const accountId = Object.keys(book.accounts)[0]
  const { cookie } = accounts[accountId]
  const dataOrigin = getDataOrigin(idp)
  
  try {
    
    let needsFreshCookies = getNeedsFreshCookies(book)
    let { bookCookies } = book || {}

    if(needsFreshCookies) {
      const path = `${dataOrigin}/book_cookies/${bookId}.json`
      const response = await safeFetch(path, getReqOptionsWithAdditions({
        headers: {
          "x-cookie-override": cookie,
        },
      }))

      if(!response || response.status >= 400) return false

      const cookies = await response.json()

      const oneDay = 1000*60*60*24
      const expireAt = Date.now() + oneDay

      setBookCookies({ bookId, cookies, expireAt })

      bookCookies = {
        cookies,
        expireAt,
      }
    }

    if(Platform.OS === 'web' && bookCookies) {
      const expires = new Date(bookCookies.expireAt)
      for(let key in bookCookies.cookies) {
        document.cookie = `${window.escape(key)}=${window.escape(bookCookies.cookies[key])}; expires=${expires.toUTCString()}; path=/`
      }
    }

    if(bookCookies) {
      return bookCookiesToCookieStr(bookCookies)
    }

  } catch(e) {}

  return false
}

const useBookCookies = ({ books, accounts, idp, setBookCookies, bookId }) => {

  const { historyPush } = useRouterState()
  const [ ready, setReady ] = useState(!!__DEV__)
  const [ setRefreshCookiesTimeout ] = useSetTimeout()

  const book = (books || {})[bookId]

  const checkAndGet = () => {
    (async () => {
      if(__DEV__) return
      if(!book) return

      setReady(false)

      const bookCookies = await getBookCookie({ books, accounts, idp, setBookCookies, bookId })

      if(bookCookies) {
        setReady(true)

      } else if(Platform.OS === 'web') {
        historyPush("/error", {
          message: "Internet connection error",
          critical: true,
        })
      }

    })()
  }

  useEffect(
    checkAndGet,
    [ !!books, bookId ],
  )

  useEffect(
    () => {
      if(__DEV__) return
      if(!book) return
      if(!ready) return

      const { expireAt } = book.bookCookies || {}

      setRefreshCookiesTimeout(checkAndGet, expireAt - Date.now())
    },
    [ !!books, bookId, ready ],
  )

  return ready
}

export default useBookCookies