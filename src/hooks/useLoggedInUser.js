import { useMemo } from 'react'

import { getAccountIdIsNoAuth } from './useHasNoAuth'

export const getUserInfo = accounts => {
  const accountIds = Object.keys(accounts)
  const accountIdToUse = accountIds.find(accountId => !getAccountIdIsNoAuth(accountId))
  return accounts[accountIdToUse] || null
}

const useLoggedInUser = accounts => {

  const userInfo = useMemo(
    () => getUserInfo(accounts),
    [
      accounts,
    ],
  )

  return userInfo
}

export default useLoggedInUser
