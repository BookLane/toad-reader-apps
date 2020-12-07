import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import useClassroomInfo from "../../hooks/useClassroomInfo"
import useAssetBaseUri from "../../hooks/useAssetBaseUri"

import Document from './Document'

const DocumentTool = React.memo(({
  bookId,
  toolName,
  classroomQueryString,

  document={},

  idps,
  accounts,
  books,
}) => {

  const { accountId, idpId, classroomUid } = useClassroomInfo({ books, bookId })
  const baseUri = useAssetBaseUri({ idps, accounts, forceCookieInUri: !classroomQueryString })
  const baseUriWithCookieInPath = useAssetBaseUri({ idps, accounts, forceCookieInUri: true })

  const uri = `${baseUri}/enhanced_assets/${classroomUid}/${document.filename}${classroomQueryString}`
  const uriWithCookieInPath = `${baseUriWithCookieInPath}/enhanced_assets/${classroomUid}/${document.filename}`

  if(!document.filename) return null

  return (
    <Document
      name={toolName}
      filename={document.filename}
      uri={uri}
      uriWithCookieInPath={uriWithCookieInPath}
      accountId={accountId}
    />
  )
})

const mapStateToProps = ({ idps, accounts, books }) => ({
  idps,
  accounts,
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(DocumentTool)