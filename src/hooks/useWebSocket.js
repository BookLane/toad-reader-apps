import { useState, useEffect } from 'react'

import { getDataOrigin } from '../utils/toolbox'
import useSetTimeout from './useSetTimeout'

const noop = () => {}

const useWebSocket = ({ idp, accounts, socketName, appendToPathItems=[], onOpen, onMessage }) => {

  const [ state, setState ] = useState({
    wsSend: noop,
    wsClose: noop,
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
      let ws

      const initWebSocket = () => {
        console.log('Websocket: opening...', { path })
        ws = new WebSocket(path)

        ws.onopen = () => {
          console.log('Websocket: open', { path })
          const wsSend = obj => {
            console.log('Websocket: send', { obj, path })
            ws.send(JSON.stringify(obj))
          }
          setState({
            wsSend,
            wsClose: ws.close,
            connecting: false,
            error: null,
          })
          onOpen({ wsSend })
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
          setState({
            wsSend: noop,
            wsClose: noop,
            connecting: false,
            error: e.reason,
          })
          setReInitWebSocketTimeout(initWebSocket, 1000 * 10)
        }

        setState({
          wsSend: noop,
          wsClose: noop,
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
          setState({
            wsSend: noop,
            wsClose: noop,
            connecting: false,
            error: null,
          })
        }
      }
    },
    [ path, cookie ],
  )

  return state
}

export default useWebSocket

