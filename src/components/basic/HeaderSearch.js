import React, { useRef } from "react"
import { StyleSheet, View, TouchableWithoutFeedback, Platform } from "react-native"

import Search from "../major/Search"
import useWideMode from "../../hooks/useWideMode"


const searchContainer = {
  paddingTop: 5,
  backgroundColor: 'white',
}

const styles = StyleSheet.create({
  modalBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, .5)",
    zIndex: 10,
    alignItems: 'center',
  },
  searchContainer: {
    ...searchContainer,
    ...StyleSheet.absoluteFillObject,
  },
  searchContainerWideMode: {
    ...searchContainer,
    width: 500,
    maxWidth: '90%',
    minHeight: 300,
    maxHeight: '90%',
    ...(Platform.OS === 'web' ? {} : {
      flex: 1,
    }),
  },
  header: {
    paddingBottom: 4,
  },
})

const HeaderSearch = ({
  bookId,
  showSearch,
  toggleShowSearch,
  idpId,
  goTo,
}) => {

  const searchInputRef = useRef()

  const wideMode = useWideMode()

  if(!showSearch) return null

  return (
    <TouchableWithoutFeedback onPress={toggleShowSearch}>
      <View style={styles.modalBackdrop}>
        <View style={wideMode ? styles.searchContainerWideMode : styles.searchContainer}>
          <Search
            bookId={bookId}
            goTo={goTo}
            inputRef={searchInputRef}
            idpId={idpId}
            requestClose={toggleShowSearch}
            headerStyle={styles.header}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default HeaderSearch
