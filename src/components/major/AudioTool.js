import React from "react"
import { StyleSheet, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import useClassroomInfo from "../../hooks/useClassroomInfo"
import { getDataOrigin, getReqOptionsWithAdditions } from '../../utils/toolbox'

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

  audioFile={},

  idps,
  accounts,
  books,
}) => {

  const { accountId, idpId, classroomUid } = useClassroomInfo({ books, bookId })

  const uri = `${getDataOrigin(idps[idpId])}/enhanced_assets/${classroomUid}/${audioFile.filename}`

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