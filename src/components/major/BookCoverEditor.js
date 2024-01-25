import React, { useCallback } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { i18n } from "inline-i18n"
import useToggle from "react-use/lib/useToggle"
import { Image } from 'expo-image'

import { getDataOrigin, getIDPOrigin, getIdsFromAccountId } from '../../utils/toolbox'

import Icon from "../basic/Icon"
import FileImporter from "./FileImporter"

const coverFileTypes = [
  'image/png',
  'image/jpeg',
  'image/gif',
  'image/webp',
]

const styles = StyleSheet.create({
  label: {
    color: 'rgb(143, 155, 179)',
    fontSize: 15,
    marginBottom: 8,
  },
  image: {
    backgroundColor: 'rgba(0, 0, 0, .1)',
    width: 100,
    height: 100,
  },
  coverContainer: {
    marginBottom: 15,
    marginRight: 'auto',
  },
  coverEditIconContainer1: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverEditIconContainer2: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, .6)',
    borderRadius: 100,
  },
  coverEditIcon: {
    width: 20,
    height: 20,
  },
})

const BookCoverEditor = ({
  bookId=`new`,
  coverHref,
  updateCoverHref,
  submitting,
  imageStyle,
  accounts,
  idps,
}) => {

  const accountId = Object.keys(accounts)[0]
  const { idpId } = getIdsFromAccountId(accountId)
  const downloadOrigin = __DEV__ ? getDataOrigin(idps[idpId]) : getIDPOrigin(idps[idpId])

  const [ uploadCover, toggleUploadCover ] = useToggle()

  const onUploadCoverSuccess = useCallback(
    ([{ result }]) => {
      updateCoverHref(`epub_content/covers/${result.filename}`)
    },
    [ updateCoverHref ],
  )

  const CoverEditIcon = useCallback(({ style }) => <Icon name='pencil' pack='materialCommunity' style={[ styles.coverEditIcon, style ]} />, [])

  return (
    <>

      <Text style={styles.label}>
        {i18n("Cover Image", "", "admin")}
      </Text>
      <TouchableOpacity
        style={styles.coverContainer}
        onPress={submitting ? null : toggleUploadCover}
      >
        <Image
          source={coverHref ? `${downloadOrigin}/${coverHref}` : `dummy/value/to/prevent/console/error`}
          contentFit="cover"
          style={imageStyle || styles.image}
        />
        <View style={styles.coverEditIconContainer1}>
          <View style={styles.coverEditIconContainer2}>
            <CoverEditIcon />
          </View>
        </View>
      </TouchableOpacity>

      <FileImporter
        accounts={accounts}
        idps={idps}
        open={uploadCover}
        fileType={coverFileTypes}
        multiple={false}
        accountId={accountId}
        relativePath={`/audiobookfile/${bookId}`}
        onClose={toggleUploadCover}
        onSuccess={onUploadCoverSuccess}
      />

    </>
  )
}

export default BookCoverEditor