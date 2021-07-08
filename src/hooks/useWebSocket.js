import { useState, useEffect, useRef } from 'react'
import { i18n } from "inline-i18n"

import { getDataOrigin } from '../utils/toolbox'
import useSetTimeout from './useSetTimeout'

const noop = () => {}

const useWebSocket = ({ idp, accounts, socketName, appendToPathItems=[], onOpen, onMessage, off }) => {

  const wsSend = useRef(noop)
  const wsClose = useRef(noop)

  const [ state, setState ] = useState({
    connecting: false,
    error: null,
  })

  const accountId = Object.keys(accounts)[0] || ""
  const { cookie } = accounts[accountId] || {}
  const appendToPath = [ "", ...appendToPathItems.filter(Boolean) ].join('/')
  const path = `${getDataOrigin({ ...idp, protocol: 'wss' })}/${socketName}/${cookie}${appendToPath}`

  const [ setReInitWebSocketTimeout ] = useSetTimeout()

  useEffect(
    () => {
      if(off) return

      let ws

      const initWebSocket = () => {
        console.log('Websocket: opening...', { path })
        ws = new WebSocket(path)

        ws.onopen = () => {
          console.log('Websocket: open', { path })

          wsSend.current = obj => {
            console.log('Websocket: send', { obj, path })
            ws.send(JSON.stringify(obj))
          }
          wsClose.current = ws.close

          setState({
            connecting: false,
            error: null,
          })

          onOpen({ wsSend: wsSend.current })
        }

        ws.onmessage = ({ data }) => {
          console.log('Websocket: message received', { data, path })
          try {
            onMessage({ message: JSON.parse(data) })
          } catch(e) {
            ws.close(4001, e.message)
          }
        }

        ws.onerror = e => {
          // an error occurred
          console.log('Websocket: error', { message: e.message, path })
          ws.close(4000, e.message)
        }

        ws.onclose = e => {
          // connection closed
          console.log('Websocket: closed early', { code: e.code, reason: e.reason, path })

          ws = null
          wsSend.current = wsClose.current = noop

          setState({
            connecting: false,
            error: e.reason || i18n("Connection closed", "", "enhanced"),
          })

          setReInitWebSocketTimeout(initWebSocket, 1000 * 10)
        }

        wsSend.current = wsClose.current = noop
        setState({
          connecting: true,
          error: null,
        })
      }

      initWebSocket()

      return () => {
        if(ws) {
          ws.onclose = null
          console.log('Websocket: closed', { path })
          ws.close()
          wsSend.current = wsClose.current = noop
          setState({
            connecting: false,
            error: null,
          })
        }
      }
    },
    [ path, cookie, off ],
  )

  return {
    ...state,
    wsSend,
    wsClose,
  }
}

export default useWebSocket

