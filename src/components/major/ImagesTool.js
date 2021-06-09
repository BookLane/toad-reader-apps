import React, { useState, useCallback, useEffect } from "react"
import { StyleSheet, View, Image, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { ViewPager } from "@ui-kitten/components"

import useDimensions from "../../hooks/useDimensions"
import useClassroomInfo from "../../hooks/useClassroomInfo"
import useAssetBaseUri from "../../hooks/useAssetBaseUri"
import useInstanceValue from "../../hooks/useInstanceValue"
import { getReqOptionsWithAdditions } from '../../utils/toolbox'
import useWideMode from "../../hooks/useWideMode"

import HeaderIcon from "../basic/HeaderIcon"
import TappableImage from "../basic/TappableImage"

const dot = {
  borderRadius: 3,
  width: 6,
  height: 6,
  backgroundColor: 'white',
  opacity: .4,
  margin: 5,
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  fullscreenContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
  imageContainer: {
    height: 100,
    width: 100,
    margin: 10,
    backgroundColor: 'rgba(0, 0, 0, .05)',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  close: {
    position: 'absolute',
    top: 13,
    right: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, .15)',
    textAlign: 'center',
  },
  closeIcon: {
    tintColor: 'white',
  },
  dotContainer1: {
    position: 'absolute',
    bottom: 3,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dotContainer2: {
    backgroundColor: 'rgba(0, 0, 0, .15)',
    borderRadius: 8,
    flexDirection: 'row',
    paddingHorizontal: 3,
  },
  dot: {
    ...dot,
  },
  selectedDot: {
    ...dot,
    opacity: 1,
  },
})

const ImagesTool = React.memo(({
  bookId,
  classroomQueryString,
  fullscreenInfo,
  setFullscreenInfo,
  toolUid,

  images=[],

  idps,
  accounts,
  books,
}) => {

  const [ scaleByImageIndex, setScaleByImageIndex ] = useState([])
  const getScaleByImageIndex = useInstanceValue(scaleByImageIndex)

  const { accountId, classroomUid } = useClassroomInfo({ books, bookId })
  const baseUri = useAssetBaseUri({ idps, accounts, forceCookieInUri: !classroomQueryString })

  const wideModeWithEitherOrientation = useWideMode(true)

  const { width: windowWidth, height: windowHeight } = useDimensions().window

  const setImageIndex = useCallback(imageIndex => setFullscreenInfo({ imageIndex, noScroll: true }), [])
  const exitFullscreen = useCallback(() => setFullscreenInfo(), [])

  useEffect(
    () => {
      setScaleByImageIndex([])

      if(
        [ 'ios', 'android' ].includes(Platform.OS)
        && !wideModeWithEitherOrientation
      ) {
        images.forEach(({ filename }, idx) => {
          Image.getSize(
            `${uriDir}${filename}${classroomQueryString}`,
            (imageWidth, imageHeight) => {
              if(imageWidth > imageHeight) {
                const scaleByImageIndex = [ ...getScaleByImageIndex() ]
                const displayedImageHeight = ((windowWidth/imageWidth) * imageHeight)
                const displayedImageWidth = windowWidth
                scaleByImageIndex[idx] = Math.min(
                  windowWidth / displayedImageHeight,
                  windowHeight / displayedImageWidth,
                )
                setScaleByImageIndex(scaleByImageIndex)
              }
            }
          )
        })
      }
    },
    [ images ],
  )

  const uriDir = `${baseUri}/enhanced_assets/${classroomUid}/`

  if(fullscreenInfo) {

    return (
      <>
        <ViewPager
          // The key prevents a bad onSelect call when creating a tool while another was selected.
          key={toolUid}
          style={styles.fullscreenContainer}
          selectedIndex={fullscreenInfo.imageIndex || 0}
          onSelect={setImageIndex}
        >
          {images.map(({ filename }, idx) => (
            scaleByImageIndex[idx]
              ? (
                <Image
                  key={filename}
                  source={{
                    ...getReqOptionsWithAdditions({
                      headers: {
                        "x-cookie-override": accounts[accountId].cookie,
                      },
                    }),
                    uri: `${uriDir}${filename}${classroomQueryString}`,
                  }}
                  style={[
                    styles.image,
                    {
                      transform: [
                        {
                          rotate: '90deg',
                        },
                        {
                          scale: scaleByImageIndex[idx],
                        },
                      ],
                    }
                  ]}
                  resizeMode='contain'
                />
              )
              : (
                <Image
                  key={filename}
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
              )
          ))}
        </ViewPager>
        <HeaderIcon
          iconName="md-close"
          onPress={exitFullscreen}
          style={styles.close}
          iconStyle={styles.closeIcon}
        />
        <View style={styles.dotContainer1}>
          <View style={styles.dotContainer2}>
            {images.map((x, idx) => (
              <View
                key={idx}
                style={idx === fullscreenInfo.imageIndex ? styles.selectedDot : styles.dot}
              />
            ))}
          </View>
        </View>
      </>
    )
  }

  return (
    <View style={styles.container}>
      {images.map(({ filename }, idx) => (
        <TappableImage
          key={filename}
          onPress={setImageIndex}
          onPressInfo={idx}
          containerStyle={styles.imageContainer}
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