import React, { useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { i18n } from "inline-i18n"
import { validLTIUrl } from "../../utils/toolbox"
import useClassroomInfo from "../../hooks/useClassroomInfo"

import Button from "../basic/Button"

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  noLTISetup: {
    marginTop: 20,
  },
})

const LTITool = React.memo(({
  bookId,
  toolUid,

  url,
  ltiConfigurationRestrictions,

  books,
  userDataByBookId,
}) => {

  const { classroom } = useClassroomInfo({ books, bookId, userDataByBookId })

  const launch = useCallback(
    () =>  {
      alert('go!')

      // get a JWT from the backend which includes expiry time, lti link, info to post to that link
      // fetch

      // open https://za.read.biblemesh.com/lti/{jwt} in a new tab
    },
    [],
  )

  const invalidSetup = !validLTIUrl({ url, ltiConfigurationRestrictions, classroom })

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          status="primary"
          onPress={launch}
          disabled={invalidSetup}
        >
          {i18n("Launch")}
        </Button>
      </View>
      {!!invalidSetup &&
        <Text style={styles.noLTISetup}>
          {i18n("There is not a LTI configuration with a domain matching this tool’s url.")}
        </Text>
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

export default connect(mapStateToProps, matchDispatchToProps)(LTITool)