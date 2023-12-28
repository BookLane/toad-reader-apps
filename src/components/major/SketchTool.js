import React, { useCallback, useRef, useState } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import { updateToolEngagement } from "../../redux/actions"
import useClassroomInfo from '../../hooks/useClassroomInfo'
import useSetTimeout from '../../hooks/useSetTimeout'
import useAssetBaseUri from '../../hooks/useAssetBaseUri'
import useDimensions from '../../hooks/useDimensions'

import SketchPad from "../basic/SketchPad"

const info = {
  fontSize: 14,
  fontWeight: '200',
  fontStyle: 'italic',
  marginBottom: 20,
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 0,
    marginHorizontal: 30,
    flex: 1,
  },
  info: {
    ...info,
  },
  emphasizedInfo: {
    ...info,
    fontWeight: '400',
    color: 'red',
  },
  instructions: {
    marginBottom: 20,
  },
  notBigEnough: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notBigEnoughText: {
    color: 'rgb(150, 150, 150)',
  },
})

const SketchTool = React.memo(({
  bookId,
  classroomQueryString,
  toolUid,
  viewingPreview,
  priorEngagement,
  logUsageEvent,

  instructions,
  background,
  requireTabletSize,

  idps,
  accounts,
  books,

  updateToolEngagement,
}) => {

  const { isDefaultClassroom, classroomUid } = useClassroomInfo({ books, bookId })
  const baseUri = useAssetBaseUri({ idps, accounts, forceCookieInUri: !classroomQueryString })
  const uriDir = `${baseUri}/enhanced_assets/${classroomUid}/`

  const { width, height } = useDimensions().window
  const meetsSizeRequirement = !requireTabletSize || Math.min(width, height) >= 600

  const [ setSaveTimeout ] = useSetTimeout({ fireOnUnmount: true })
  const shouldLogUsage = useRef((priorEngagement || {}).text == null)
  const [ sketch, setSketch ] = useState(() => {
    if(viewingPreview) return null
    try {
      return JSON.parse(priorEngagement.text)
    } catch(err) {}
    return null
  })

  const goUpdateEngagement = useCallback(
    updates => {

      updateToolEngagement({
        bookId,
        classroomUid,
        toolUid,
        ...updates,
      })

    },
    [ bookId, classroomUid, toolUid ],
  )

  const updateSketchInEdit = useCallback(
    sketch => {

      if(!viewingPreview) {
        setSaveTimeout(
          () => goUpdateEngagement({ text: JSON.stringify(sketch) }),
          300,
        )
      }

      setSketch(sketch)

      if(shouldLogUsage.current) {
        logUsageEvent({
          toolUid,
          usageType: `Sketch drawn`,
        })
        shouldLogUsage.current = false
      }

    },
    [ viewingPreview, setSaveTimeout, goUpdateEngagement, logUsageEvent, toolUid ],
  )

  return (
    <View style={styles.container}>
      <Text style={isDefaultClassroom ? styles.emphasizedInfo : styles.info}>
        {i18n("This is a sketch pad.", "", "enhanced")}
        {` `}
        {isDefaultClassroom
          ? i18n("No one will see your sketch since you are not within a classroom.", "", "enhanced")
          : i18n("Your sketch may be seen by you and your instructor(s).", "", "enhanced")
        }
      </Text>
      {!!instructions &&
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      }
      {meetsSizeRequirement &&
        <SketchPad
          sketch={sketch}
          updateSketchInEdit={updateSketchInEdit}
          mode="edit"
          backgroundImage={background ? `${uriDir}${background.filename}${classroomQueryString}` : null}
        />
      }
      {!meetsSizeRequirement &&
        <View style={styles.notBigEnough}>
          <Text style={styles.notBigEnoughText}>
            {i18n("Tablet size or larger required.", "", "enhanced")}
          </Text>
        </View>
      }
    </View>
  )
})

const mapStateToProps = ({ idps, accounts, books }) => ({
  idps,
  accounts,
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  updateToolEngagement,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(SketchTool)