// if this is change to selected tool from url, do historyPush/Replace/GoBack

const doHistoryAction = ({
  uid: selectedToolUid,
  getRouterState,
  historyPush,
  historyGoBack,
  historyReplace,
}) => {

  const routerState = getRouterState ? getRouterState() : {}
  let { selectedToolUid: oldSelectedToolUid=null, back=0 } = routerState

  let historyChange = historyPush || historyGoBack || historyReplace

  if(historyPush) back++

  if(
    historyChange === historyGoBack
    && back <= 1
  ) {
    historyChange = historyReplace
  }

  if(
    historyChange
    && oldSelectedToolUid != selectedToolUid
  ) {
    historyChange(
      null,
      {
        ...routerState,
        selectedToolUid,
      },
      back,
    )
  }

}

export default doHistoryAction