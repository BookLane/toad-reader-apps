import { getIdsFromAccountId } from '../utils/toolbox'

const useHasNoAuth = accounts => {

  return Object.keys(accounts).every(accountId => {
    const { idpId, userId } = getIdsFromAccountId(accountId)
    return idpId === userId * -1
  })
  
}

export default useHasNoAuth
