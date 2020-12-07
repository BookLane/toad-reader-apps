import React from "react"
import { StyleSheet, View, Image } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import useClassroomInfo from "../../hooks/useClassroomInfo"
import useAssetBaseUri from "../../hooks/useAssetBaseUri"
import { getReqOptionsWithAdditions } from '../../utils/toolbox'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  image: {
    height: 300,
  },
})

const ImagesTool = React.memo(({
  bookId,
  classroomQueryString,

  images=[],

  idps,
  accounts,
  books,
}) => {

  const { accountId, idpId, classroomUid } = useClassroomInfo({ books, bookId })
  const baseUri = useAssetBaseUri({ idps, accounts, forceCookieInUri: !classroomQueryString })

  const uriDir = `${baseUri}/enhanced_assets/${classroomUid}/`

  return (
    <View style={styles.container}>
      {images.map(({ filename }) => (
        <View
          key={filename}
          style={styles.image}
        >
          <Image
            source={{
              ...getReqOptionsWithAdditions({
                headers: {
                  "x-cookie-override": accounts[accountId].cookie,
                },
              }),
              uri: `${uriDir}${filename}${classroomQueryString}`,
            }}
            style={styles.image}
            resizeMode='contain'
          />
        </View>
      ))}
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

export default connect(mapStateToProps, matchDispatchToProps)(ImagesTool)