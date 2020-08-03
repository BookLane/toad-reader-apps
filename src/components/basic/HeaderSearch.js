import React, { useRef } from "react"
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native"

import { statusBarHeight } from "../../utils/toolbox"

import Search from "../major/Search"


const styles = StyleSheet.create({
  modalBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, .5)",
    zIndex: 10,
  },
  searchContainer: {
    marginHorizontal: 'auto',
    paddingTop: 5 - statusBarHeight,
    width: 500,
    maxWidth: '90%',
    minHeight: 300,
    maxHeight: '90%',
    backgroundColor: 'white',
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

  if(!showSearch) return null

  return (
    <TouchableWithoutFeedback onPress={toggleShowSearch}>
      <View style={styles.modalBackdrop}>
        <View style={styles.searchContainer}>
          <Search
            bookId={bookId}
            goTo={goTo}
            inputRef={searchInputRef}
            idpId={idpId}
            requestClose={toggleShowSearch}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default HeaderSearch
