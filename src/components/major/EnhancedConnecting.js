import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import useClassroomInfo from '../../hooks/useClassroomInfo'
import useWideMode from '../../hooks/useWideMode'

import QRCode from "../basic/QRCode"

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codesContainer: {
    flex: 1,
  },
  instructionsContainer: {
    marginLeft: 30,
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(0, 0, 0, .1)',
  },
  instructions: {
    width: 210,
    marginTop: 15,
    marginLeft: 30,
    marginBottom: 20,
    fontSize: 12,
  },
  image: {
    marginLeft: 30,
    height: 415,
    width: 210,
  },
  codeSection: {
    marginBottom: 30,
  },
  codeSectionLabel: {
    fontWeight: '600',
    fontSize: 17,
    marginBottom: 10,
  },
  codeLine: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  textCodeLabel: {
    marginRight: 4,
  },
  textCode: {
    color: 'red',
    fontWeight: 'bold',
  },
  showForInstructors: {
    textDecorationLine: 'underline',
    opacity: .5,
  },
})

const EnhancedConnecting = React.memo(({
  bookId,

  books,
  userDataByBookId,
}) => {

  const [ showInstructorAccessCode, setShowInstructorAccessCode ] = useState(false)

  const wideMode = useWideMode()

  const setShowInstructorAccessCodeTrue = useCallback(() => setShowInstructorAccessCode(true), [])

  const { classroom } = useClassroomInfo({ books, bookId, userDataByBookId })

  if(!classroom) return null

  const { access_code, instructor_access_code } = classroom

  return (
    <View style={styles.container}>
      <View style={styles.codesContainer}>
        <View style={styles.codeSection}>
          <Text style={styles.codeSectionLabel}>
            {i18n("Students", "", "enhanced")}
          </Text>
          <View style={styles.codeLine}>
            <Text style={styles.textCodeLabel}>
              {i18n("Text code:", "", "enhanced")}
            </Text>
            <Text style={styles.textCode}>
              {access_code}
            </Text>
          </View>
          {!!QRCode &&
            <QRCode
              value={access_code}
              size={250}
            />
          }
        </View>
        <View style={styles.codeSection}>
          <Text style={styles.codeSectionLabel}>
            {i18n("Instructors", "", "enhanced")}
          </Text>
          {!showInstructorAccessCode &&
            <Text>
              <Text
                style={styles.showForInstructors}
                onPress={setShowInstructorAccessCodeTrue}
              >
                {i18n("Connect additional instructors", "", "enhanced")}
              </Text>
            </Text>
          }
          {!!showInstructorAccessCode &&
            <>
              <View style={styles.codeLine}>
                <Text style={styles.textCodeLabel}>
                  {i18n("Text code:", "", "enhanced")}
                </Text>
                <Text style={styles.textCode}>
                  {instructor_access_code}
                </Text>
              </View>
              {!!QRCode &&
                <QRCode
                  value={instructor_access_code}
                  size={250}
                />
              }
            </>
          }
        </View>
      </View>
      {wideMode &&
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructions}>
            {i18n("Users with the enhanced version of this book can connect to this classroom via the main enhanced pull-down.", "", "enhanced")}
          </Text>
          <Image
            source={require("../../../assets/qr-code-how-to.png")}
            style={styles.image}
          />
        </View>
      }
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(EnhancedConnecting)