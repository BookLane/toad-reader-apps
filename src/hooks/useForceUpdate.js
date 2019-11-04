import { useReducer } from 'react'

const useForceUpdate = (fn, dep) => {

  const [ x, forceUpdate ] = useReducer(x => x + 1, 0)

  return forceUpdate
}

export default useForceUpdate