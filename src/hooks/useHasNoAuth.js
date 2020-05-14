import { getIdsFromAccountId } from '../utils/toolbox'

const useHasNoAuth = accounts => {
  const accountIds = Object.keys(accounts)

  return (
    accountIds.length > 0
    && accountIds.every(accountId => {
      const { idpId, userId } = getIdsFromAccountId(accountId)
      return idpId === userId * -1
    })
  )
  
}

export default useHasNoAuth
