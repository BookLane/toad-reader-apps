import { useMemo } from 'react'

import { getIdsFromAccountId } from '../utils/toolbox'

export const getAccountIdIsNoAuth = accountId => {
  const { idpId, userId } = getIdsFromAccountId(accountId)
  return idpId === userId * -1
}

export const getHasNoAuth = accounts => {
  const accountIds = Object.keys(accounts)

  return (
    accountIds.length > 0
    && accountIds.every(getAccountIdIsNoAuth)
  )
}

const useHasNoAuth = accounts => {

  const hasNoAuth = useMemo(
    () => getHasNoAuth(accounts),
    [
      accounts,
    ],
  )

  return hasNoAuth
}

export default useHasNoAuth
