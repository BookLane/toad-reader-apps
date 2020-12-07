import React from "react"
import { StyleSheet, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import useClassroomInfo from "../../hooks/useClassroomInfo"
import useAssetBaseUri from "../../hooks/useAssetBaseUri"
import { getReqOptionsWithAdditions } from '../../utils/toolbox'

import AudioPlayer from "./AudioPlayer"

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    flex: 1,
  },
})

const AudioTool = React.memo(({
  bookId,
  classroomQueryString,

  audioFile={},

  idps,
  accounts,
  books,
}) => {

  const { accountId, classroomUid } = useClassroomInfo({ books, bookId })
  const baseUri = useAssetBaseUri({ idps, accounts, forceCookieInUri: !classroomQueryString })

  const uri = `${baseUri}/enhanced_assets/${classroomUid}/${audioFile.filename}${classroomQueryString}`

  if(!audioFile.filename) return null

  return (
    <View style={styles.container}>
      <AudioPlayer
        source={{
          ...getReqOptionsWithAdditions({
            headers: {
              "x-cookie-override": accounts[accountId].cookie,
            },
          }),
          uri,
        }}
      />
    </View>
  )
})

const mapStateToProps = ({ idps, accounts, books }) => ({
  idps,
  accounts,
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(AudioTool)