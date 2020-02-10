import { AppState } from 'react-native'

import { getReqOptionsWithAdditions, getDataOrigin, getIdsFromAccountId,
         safeFetch, createAccessCode } from "./toolbox"
import { connectionInfo } from "../hooks/useNetwork"

import { updateAccount, updateBookAccount, setSyncStatus, shareHighlight,
         updateClassroom, setUserData, flushReadingRecords } from "../redux/actions"

// I record the last time I successfully sent a user data patch for a particular book/account
// Then, whenever I patch, I filter down to objects which are newer than the last successful patch.

let store
const currentlyReportingReadingsByAccountId = {}
const currentlyPatchingBookAccountCombo = {}
const currentlyRefreshingBookAccountCombo = {}

const getAccountInfo = ({ idps, accountId }) => {
  const { idpId, userId } = getIdsFromAccountId(accountId)
  const idp = idps[idpId]
  const { serverTimeOffset=0 } = store.getState().accounts[accountId] || {}

  return {
    idpId,
    idp,
    userId,
    serverTimeOffset,
  }
}

const adjustAllUpdatedAts = (objOrAry, msAdjustment) => {
  ;(objOrAry instanceof Array ? objOrAry : [objOrAry]).forEach(obj => {
    if(!obj || typeof obj !== 'object') return
    if(obj.updated_at) {
      obj.updated_at = obj.updated_at + msAdjustment
    }
    Object.values(obj).forEach(val => {
      adjustAllUpdatedAts(val, msAdjustment);
    })
  })
}

const reportResponseError = ({ message, response, error, retry }) => {
  console.log(`ERROR: ${message}`, error)
  if(response) {
    console.log(response.status)
    console.log(response.statusText)
    console.log(response.body)
    console.log('Will rerun in 30 seconds.')
  }
  retry && setTimeout(() => retry(), 30000)
}

export const setStore = s => { store = s }

export const patch = () => setTimeout(() => {
  // the setTimeout ensures this is async

  const { idps, accounts, books, userDataByBookId } = store.getState()

  if(!connectionInfo.online) return

  Object.keys(accounts).forEach(accountId => {

    const { idpId, idp, userId, serverTimeOffset } = getAccountInfo({ idps, accountId })
    const patchTime = Date.now()
    const newUserData = {}
    let somethingToPatch = false

    if(!idp || !userId || (((__DEV__ && idp.devAuthMethod) || idp.authMethod) === 'NONE_OR_EMAIL')) return

    // Filter down the userData object to only new items
    // Also, ignore things I did not and cannot modify
    for(let bookId in userDataByBookId) {
      const book = books[bookId]
      if(!book) continue   // should not ever happen
      if(!book.accounts[accountId]) continue

      const isPublisher = book.version === 'PUBLISHER'
      const bookUserData = userDataByBookId[bookId]
      const lastSuccessfulPatch = book.accounts[accountId].lastSuccessfulPatch || 0

      newUserData[bookId] = { highlights: [], classrooms: [] };

      if(bookUserData.updated_at > lastSuccessfulPatch) {
        newUserData[bookId].latest_location = bookUserData.latest_location
        newUserData[bookId].updated_at = bookUserData.updated_at
        somethingToPatch = true
      }

      ;(bookUserData.highlights || []).forEach(highlight => {
        if(highlight.updated_at > lastSuccessfulPatch) {
          newUserData[bookId].highlights.push({ ...highlight })
          somethingToPatch = true
        }
      })

      ;(bookUserData.classrooms || []).forEach(classroom => {
        const { members=[], tools=[], instructorHighlights=[] } = classroom
        let classroomToPush = {
          uid: classroom.uid,
          members: [],
          tools: [],
          toolEngagements: [],
          instructorHighlights: [],
        }
        let classroomHasUpdate = false

        const isInstructor = members.some(({ user_id, role }) => (user_id === userId && role === 'INSTRUCTOR'))
        const isPublisherAndThisIsTheDefaultClassroom = isPublisher && classroom.uid === `${idpId}-${bookId}`
        const isStudent = !isInstructor && !isPublisherAndThisIsTheDefaultClassroom

        if(isInstructor && classroom.updated_at > lastSuccessfulPatch) {
          classroomToPush = {
            ...classroom,
            ...classroomToPush,
          }
          delete classroomToPush.created_at
          classroomHasUpdate = true
        }

        if(isPublisherAndThisIsTheDefaultClassroom && classroom.updated_at > lastSuccessfulPatch) {
          classroomToPush = {
            lti_configurations: classroom.lti_configurations,
            draftData: !classroom.draftData ? null : {
              lti_configurations: classroom.draftData.lti_configurations,
            },
            updated_at: classroom.updated_at,
            ...classroomToPush,
          }
          classroomHasUpdate = true
        }

        if(isInstructor) {
          members.forEach(member => {
            if(member.updated_at > lastSuccessfulPatch) {
              const memberToPush = { ...member }
              delete memberToPush.created_at
              delete memberToPush.email
              delete memberToPush.fullname
              classroomToPush.members.push(memberToPush)
              classroomHasUpdate = true
            }
          })
        } else {
          members.forEach(({ user_id, updated_at, _delete }) => {
            if(user_id === userId && updated_at > lastSuccessfulPatch && _delete) {
              classroomToPush.members.push({
                user_id,
                updated_at,
                _delete,
              })
              classroomHasUpdate = true
            }
          })
        }

        if(isInstructor || isPublisherAndThisIsTheDefaultClassroom) {
          tools.forEach(tool => {
            if(tool.updated_at > lastSuccessfulPatch) {
              const toolToPush = { ...tool }
              delete toolToPush.created_at
              delete toolToPush.engagement
              delete toolToPush.engagements
              classroomToPush.tools.push(toolToPush)
              classroomHasUpdate = true
            }
          })
        }

        if(isInstructor) {
          instructorHighlights.forEach(instructorHighlight => {
            if(instructorHighlight.created_at > lastSuccessfulPatch) {
              const instructorHighlightToPush = {
                spineIdRef: instructorHighlight.spineIdRef,
                cfi: instructorHighlight.cfi,
              }
              if(!instructorHighlight.isMine) {
                // This is needed when duplicating a classroom
                instructorHighlightToPush.author_id = instructorHighlight.author_id
              }
              if(instructorHighlight._delete) {
                instructorHighlightToPush._delete = true
              } else {
                instructorHighlightToPush.created_at = instructorHighlight.created_at
              }
              classroomToPush.instructorHighlights.push(instructorHighlightToPush)
              classroomHasUpdate = true
            }
          })
        }

        tools.forEach(({ uid: tool_uid, toolType, engagements=[], engagement={} }) => {
          if([ 'QUIZ', 'POLL' ].includes(toolType) && !isStudent) return

          const pushEngagementIfUpdated = anEngagement => {
            if(anEngagement.updated_at > lastSuccessfulPatch) {
              const engagementToPush = {
                ...anEngagement,
                tool_uid,
              }
              delete engagementToPush.created_at
              classroomToPush.toolEngagements.push(engagementToPush)
              classroomHasUpdate = true
            }
          }

          engagements.forEach(pushEngagementIfUpdated)
          pushEngagementIfUpdated(engagement)
        })

        if(classroomHasUpdate) {
          if(classroomToPush.members.length === 0) delete classroomToPush.members
          if(classroomToPush.tools.length === 0) delete classroomToPush.tools
          if(classroomToPush.toolEngagements.length === 0) delete classroomToPush.toolEngagements
          if(classroomToPush.instructorHighlights.length === 0) delete classroomToPush.instructorHighlights
          newUserData[bookId].classrooms.push(classroomToPush)
          somethingToPatch = true
        }
      })

    }

    if(somethingToPatch) {

      store.dispatch(setSyncStatus("patching"))

      // send necessary patch requests
      Object.keys(newUserData).forEach(bookId => {
        const bookUserData = newUserData[bookId]

        if(currentlyPatchingBookAccountCombo[`${accountId} ${bookId}`]) return

        const updateLastSuccessfulPatch = () => {
          // save it in redux
          store.dispatch(updateBookAccount({
            bookId,
            accountId, 
            accountInfo: {
              lastSuccessfulPatch: patchTime,
            },
          }))

          // save it here too in case patch gets called again before I have a fresh books var
          books[bookId].accounts[accountId].lastSuccessfulPatch = patchTime
        }

        if(bookUserData.latest_location || bookUserData.highlights.length > 0 || bookUserData.classrooms.length > 0) {

          // convert user data updated_at times to server time per server time offset
          adjustAllUpdatedAts(bookUserData, serverTimeOffset);

          console.log("Time-filtered userData object for patch request:", bookUserData);

          const path = `${getDataOrigin(idp)}/users/${userId}/books/${bookId}.json`

          currentlyPatchingBookAccountCombo[`${accountId} ${bookId}`] = true

          safeFetch(path, getReqOptionsWithAdditions({
            method: 'PATCH',
            headers: {
              "Content-Type": 'application/json',
              "x-cookie-override": accounts[accountId].cookie,
            },
            body: JSON.stringify(bookUserData),
          }))
            .then(async response => {

              currentlyPatchingBookAccountCombo[`${accountId} ${bookId}`] = false

              if(response.status < 400) {
                console.log(`Patch successful (bookId: ${bookId}, userId: ${userId}, path: ${path}).`)
  
                // update lastSuccessfulPatch
                updateLastSuccessfulPatch()
  
                // run again in case something has changed since the patch was sent
                patch()
  
              } else if(response.status === 403) {
                // they need to login
                store.dispatch(updateAccount({
                  accountId,
                  accountInfo: {
                    needToLogInAgain: true
                  },
                }))
                // It would be better to have the retry a callback after they login, but this will do for now.
                reportResponseError({
                  message: `Patch failed due to no auth`,
                  response,
                  retry: patch,
                })
                store.dispatch(setSyncStatus("error"))

              } else if(response.status === 412) {
                console.log(`User data is stale (bookId: ${bookId}, userId: ${userId}, path: ${path}).`)
  
                // still, the new stuff was saved and so update lastSuccessfulPatch
                updateLastSuccessfulPatch()
  
                // update the userData for this book
                refreshUserData({ accountId, bookId })
  
              } else {

                try {
                  const errorsInfo = await response.json()

                  if(errorsInfo.every(({ patch, error }) => {
                    const dupCodeErrorPieces = error.split('duplicate code(s): ')
                    if(dupCodeErrorPieces.length === 2) {
                      switch(patch) {
                        case "highlights": {
                          const badShareCode = dupCodeErrorPieces[1]
                          bookUserData.highlights.some(highlight => {
                            if(highlight.share_code === badShareCode) {
                              store.dispatch(shareHighlight({
                                ...highlight,
                                bookId,
                                forceNewShareCode: true,
                              }))
                              return true
                            }
                          })
                          break
                        }
                        case "classrooms": {
                          const badAccessCodes = dupCodeErrorPieces[1].split(' ')
                          bookUserData.classrooms.some(classroom => {
                            if(
                              badAccessCodes.includes(classroom.access_code)
                              || badAccessCodes.includes(classroom.instructor_access_code)
                            ) {
                              store.dispatch(updateClassroom({
                                ...classroom,
                                bookId,
                                access_code: createAccessCode(),
                                instructor_access_code: createAccessCode(),
                              }))
                              return true
                            }
                          })
                          break
                        }
                      }
                    }
                  })) {
                    console.log(`User data had used codes. Retrying. (bookId: ${bookId}, userId: ${userId}, path: ${path}).`)
                    return
                  }
                } catch(e) {}

                reportResponseError({
                  message: `Patch error to ${path}`,
                  response,
                  retry: patch,
                })
                store.dispatch(setSyncStatus("error"))
              }

            })
            .catch(error => {
            
              currentlyPatchingBookAccountCombo[`${accountId} ${bookId}`] = false

              reportResponseError({
                message: `Fetch error when trying to patch to ${path}`,
                error,
                retry: patch,
              })
              store.dispatch(setSyncStatus("error"))
            
            })
        }
      })

    } else {
      store.dispatch(setSyncStatus("synced"))
    }
  })
})

let xapiOffOnServer = false
export const reportReadings = () => setTimeout(() => {
  // the setTimeout ensures this is async

  const { idps, accounts, readingRecordsByAccountId } = store.getState()

  if(xapiOffOnServer) return
  if(Object.values(readingRecordsByAccountId).every(readingRecords => !readingRecords.length)) return
  
  if(!connectionInfo.online) return

  Object.keys(readingRecordsByAccountId).forEach(accountId => {

    if(currentlyReportingReadingsByAccountId[accountId]) return

    const { idp, userId } = getAccountInfo({ idps, accountId })
    const readingRecords = readingRecordsByAccountId[accountId]
    const path = `${getDataOrigin(idp)}/reportReading`

    const flush = () => {
      store.dispatch(flushReadingRecords({
        accountId,
        numberOfRecords: readingRecords.length,
      }))
    }

    if(!idp.xapiOn) {
      flush()
      return
    }

    currentlyReportingReadingsByAccountId[accountId] = true

    console.log(`Sending to ${path}`, readingRecords);

    safeFetch(path, getReqOptionsWithAdditions({
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        "x-cookie-override": accounts[accountId].cookie,
      },
      body: JSON.stringify({ readingRecords }),
    }))
      .then(async response => {

        currentlyReportingReadingsByAccountId[accountId] = false

        if(response.status < 400) {
          try {
            if((await response.json()).off) {
              console.log(`reportReading canceled due to xapi being turned off on the server.`)
              xapiOffOnServer = true
              return
            }
          } catch(err) {}

          console.log(`reportReading successful (userId: ${userId}, path: ${path}).`)

          // remove these reading records from readingRecordsByAccountId in the state
          flush()

          // run again in case something has changed since the reading records were sent
          reportReadings()

        } else if(response.status === 403) {
          // they need to login, but let this get handled by patch

        } else {
          reportResponseError({
            message: `reportReading error to ${path}`,
            response,
            retry: reportReadings,
          })
        }

      })
      .catch(error => {
      
        currentlyReportingReadingsByAccountId[accountId] = false

        reportResponseError({
          message: `Fetch error when trying to reportReading to ${path}`,
          error,
          retry: reportReadings,
        })
      
      })

  })
})

export const refreshUserData = ({ accountId, bookId }) => new Promise(resolve => setTimeout(() => {
  // the setTimeout ensures this is async

  const { idps, accounts, books } = store.getState()
  
  if(!accountId || !bookId) return resolve()
  if(currentlyRefreshingBookAccountCombo[`${accountId} ${bookId}`]) return resolve()
  if(!books[bookId].accounts[accountId]) return resolve()

  const { idp, userId, serverTimeOffset } = getAccountInfo({ idps, accountId })

  if(((__DEV__ && idp.devAuthMethod) || idp.authMethod) === 'NONE_OR_EMAIL') return resolve()

  const lastSuccessfulPatch = books[bookId].accounts[accountId].lastSuccessfulPatch || 0

  if(!connectionInfo.online) return resolve()

  store.dispatch(setSyncStatus("refreshing"))

  const path = `${getDataOrigin(idp)}/users/${userId}/books/${bookId}.json`

  currentlyRefreshingBookAccountCombo[`${accountId} ${bookId}`] = true
  
  safeFetch(path, getReqOptionsWithAdditions({
    headers: {
      "x-cookie-override": accounts[accountId].cookie,
    },
  }))
    .then(response => {

      currentlyRefreshingBookAccountCombo[`${accountId} ${bookId}`] = false

      if(response.status < 400) {  // success

        if(response._bodyText === "") {
          // there has not yet been any user data set for this book
          patch()
          return resolve({ success: true })
        }

        response.json()
          .then(userData => {
            // put into redux

            // Following code no longer valid as (1) it might be their first visit and so latest_location is
            // undefined, and (2) in the future I will be sending back only data updated after a certain time.
            // if(!userData.latest_location || !userData.updated_at || !userData.highlights) {
            //   reportResponseError({
            //     message: `Incomplete response to user data fetch (${path}).`,
            //     response,
            //     retry: () => refreshUserData({ accountId, bookId }),
            //   })
            //   store.dispatch(setSyncStatus("error"))
            //   return resolve()
            // }

            // convert user data updated_at times to local device per server time offset
            adjustAllUpdatedAts(userData, serverTimeOffset * -1);
            
            store.dispatch(setUserData({ bookId, userData, lastSuccessfulPatch }))

            console.log(`User data refresh successful (bookId: ${bookId}, userId: ${userId}, path: ${path}).`)

            patch()
            resolve({ success: true })
            
          })
          .catch(error => {
            reportResponseError({
              message: `Non-JSON response to user data fetch (${path}).`,
              response,
              retry: () => refreshUserData({ accountId, bookId }),
            })
            store.dispatch(setSyncStatus("error"))
            resolve()
          })

      } else if(response.status === 403) {
        // they need to login
        store.dispatch(updateAccount({
          accountId,
          accountInfo: {
            needToLogInAgain: true
          },
        }))
        // It would be better to have the retry a callback after they login, but this will do for now.
        reportResponseError({
          message: `User data fetch failed due to no auth.`,
          response,
          retry: () => refreshUserData({ accountId, bookId }),
        })
        store.dispatch(setSyncStatus("error"))
        resolve()

      } else {
        reportResponseError({
          message: `User data fetch error (${path}).`,
          response,
          retry: () => refreshUserData({ accountId, bookId }),
        })
        store.dispatch(setSyncStatus("error"))
        resolve()
      }

    })
    .catch(error => {
    
      currentlyRefreshingBookAccountCombo[`${accountId} ${bookId}`] = false

      reportResponseError({
        message: `Fetch error when trying to refresh user data ${path}`,
        error,
        retry: () => refreshUserData({ accountId, bookId }),
      })
      store.dispatch(setSyncStatus("error"))

      resolve()

    })
}))

console.log('Setting up event listeners for patch and reportReadings...')
// NetInfo.addEventListener(() => patch())
AppState.addEventListener('change', () => patch())
// NetInfo.addEventListener(() => reportReadings())
AppState.addEventListener('change', () => reportReadings())
