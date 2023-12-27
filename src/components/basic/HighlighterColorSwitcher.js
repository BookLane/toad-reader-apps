import React, { useCallback } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import ColorSwitcher from "./ColorSwitcher"

import { setHighlight } from "../../redux/actions"

const HighlighterColorSwitcher = React.memo(({
  bookId,
  highlight,

  setHighlight,
}) => {

  const updateColor = useCallback(
    color => {
      setHighlight({
        ...highlight,
        bookId,
        color,
      })
    },
    [ bookId, setHighlight ],
  )

  return (
    <ColorSwitcher
      color={highlight.color}
      update={updateColor}
    />
  )
})

const mapStateToProps = () => ({
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setHighlight,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(HighlighterColorSwitcher)