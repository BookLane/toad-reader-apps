import React, { useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import EditToolData from './EditToolData'

import { i18n } from "inline-i18n"
import { validDomain, validUrl } from '../../utils/toolbox'

import useClassroomInfo from '../../hooks/useClassroomInfo'
import useChangeIndex from '../../hooks/useChangeIndex'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  previewLine: {
    marginVertical: 7,
    fontWeight: '500',
    fontSize: 16,
  },
  byPublisher: {
    marginLeft: 5,
    fontWeight: '200',
    fontSize: 12,
  },
})

const LTIConfigurations = React.memo(({
  bookId,
  inEditMode,
  viewingPreview,
  goUpdateClassroom,

  books,
  userDataByBookId,
}) => {

  const { accountId, classroom, isDefaultClassroom, hasDraftData, bookVersion } = useClassroomInfo({ books, bookId, userDataByBookId })

  const changeIndex = useChangeIndex(hasDraftData, (prev, current) => (prev && !current))

  const transformData = useCallback(
    ({ data }) => {
      data.lti_configurations.forEach(ltiConfiguration => {
        if(isDefaultClassroom) {
          ltiConfiguration.createdByPublisher = true
        }
        if(ltiConfiguration.domain) {
          ltiConfiguration.domain = ltiConfiguration.domain.trim()
          if(validUrl(ltiConfiguration.domain)) {
            ltiConfiguration.domain = ltiConfiguration.domain.replace(/^https?:\/\//, "")
          }
        }
        if(ltiConfiguration.key) {
          ltiConfiguration.key = ltiConfiguration.key.trim()
        }
        if(ltiConfiguration.secret) {
          ltiConfiguration.secret = ltiConfiguration.secret.trim()
        }
      })
    },
    [],
  )

  if(!classroom) return null

  const { uid, lti_configurations, draftData } = classroom

  const data = {}
  const hasDraft = (draftData || {}).lti_configurations !== undefined

  if(inEditMode && hasDraft) {
    data.lti_configurations = draftData.lti_configurations
  } else if(lti_configurations) {
    data.lti_configurations = lti_configurations
  }

  const isRestricted = createdByPublisher => (
    createdByPublisher
    && bookVersion !== 'PUBLISHER'
  )

  if(inEditMode && !viewingPreview) {

    return (
      <EditToolData
        key={changeIndex}
        classroomUid={uid}
        isDefaultClassroom={isDefaultClassroom}
        accountId={accountId}
        dataStructure={[
          {
            name: 'lti_configurations',
            type: [
              {
                name: 'domain',
                type: 'string',
                label: i18n("Domain", "", "enhanced"),
                placeholder: i18n("Eg. toadreader.com"),
                isHiddenWithMessage: ({ dataSegment }) => {
                  const { createdByPublisher } = dataSegment

                  return (
                    isRestricted(createdByPublisher)
                    && i18n("{{domain}} (Configured by the publisher. Used by LTI tools from the Book Default.)", dataSegment)
                  )
                },
              },
              {
                name: 'key',
                type: 'string',
                label: i18n("Key", "", "enhanced"),
                isHidden: ({ dataSegment: { createdByPublisher } }) => isRestricted(createdByPublisher),
              },
              {
                name: 'secret',
                type: 'string',
                label: i18n("Secret", "", "enhanced"),
                isHidden: ({ dataSegment: { createdByPublisher } }) => isRestricted(createdByPublisher),
              },
            ],
            addLabel: i18n("Add another LTI configuration", "", "enhanced"),
            maxItems: 25,
          },
        ]}
        transformData={transformData}
        data={data}
        goUpdateTool={goUpdateClassroom}
      />
    )
  }

  return (
    <View style={styles.container}>
      {(data.lti_configurations || [])
        .filter(({ domain, key, secret, createdByPublisher }) => (
          validDomain(domain)
          && (
            isRestricted(createdByPublisher)
            || (key && secret)
          )
        ))
        .map(({ domain, createdByPublisher }) => (
          <Text style={styles.previewLine}>
            {domain}
            {isRestricted(createdByPublisher) &&
              <Text style={styles.byPublisher}>
                {" "}
                {i18n("Configured by the publisher. Used by LTI tools from the Book Default.")}
              </Text>
            }
          </Text>
        ))
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

export default connect(mapStateToProps, matchDispatchToProps)(LTIConfigurations)