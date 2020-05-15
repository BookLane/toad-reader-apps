import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import useClassroomInfo from "../../hooks/useClassroomInfo"
import { getDataOrigin } from '../../utils/toolbox'

import Document from './Document'

const DocumentTool = React.memo(({
  bookId,
  toolName,

  document={},

  idps,
  books,
}) => {

  const { accountId, idpId, classroomUid } = useClassroomInfo({ books, bookId })

  const uri = `${getDataOrigin(idps[idpId])}/enhanced_assets/${classroomUid}/${document.filename}`

  if(!document.filename) return null

  return (
    <Document
      name={toolName}
      filename={document.filename}
      uri={uri}
      accountId={accountId}
    />
  )
})

const mapStateToProps = ({ idps, books }) => ({
  idps,
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(DocumentTool)