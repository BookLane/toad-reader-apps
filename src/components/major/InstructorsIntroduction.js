import React, { useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

const styles = StyleSheet.create({
  container: {
  },
})

const InstructorsIntroduction = React.memo(({
  bookId,
  inEditMode,

  books,
  userDataByBookId,
}) => {


  return null
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(InstructorsIntroduction)