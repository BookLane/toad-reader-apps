import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native"
import { ViewPager } from "@ui-kitten/components"
import { i18n } from "inline-i18n"

import { getToolbarHeight } from '../../utils/toolbox'
import useWideMode from "../../hooks/useWideMode"

import StatusAndActions from "./StatusAndActions"
import HeaderIcon from "../basic/HeaderIcon"

const container = {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'white',
  zIndex: 5,
  paddingTop: 20,
}

const topSection = {
  paddingHorizontal: 30,
  zIndex: 1,
}

const tabTitle = {
  lineHeight: 30,
  fontWeight: '500',
  marginRight: 20,
  borderBottomWidth: 3,
  borderBottomColor: 'transparent',
}

const headingLine = {
  flexDirection: 'row',
}

const styles = StyleSheet.create({
  container: {
    ...container,
    paddingTop: 25,
  },
  constainerWideMode: {
    ...container,
    top: getToolbarHeight(),
  },
  topSection: {
    ...topSection,
  },
  topSectionWideMode: {
    ...topSection,
    flexDirection: 'row',
  },
  headingLine: {
    ...headingLine,
  },
  headingLineWideMode: {
    ...headingLine,
    flex: 1,
  },
  heading: {
    paddingBottom: 20,
    fontWeight: '600',
    fontSize: 18,
    flex: 1,
  },
  tabs: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.1)',
    paddingHorizontal: 30,
    flexGrow: 0,
  },
  tabTitle: {
    ...tabTitle,
  },
  selectedTabTitle: {
    ...tabTitle,
    color: 'rgb(51, 102, 255)',
    borderBottomColor: 'rgb(51, 102, 255)',
  },
  tabsContent: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
  },
  tabContentContainer: {
    flex: 1,
  },
  exitPreview: {
    textTransform: 'uppercase',
    color: 'rgb(51, 102, 255)',
    fontWeight: '700',
    fontSize: 13,
    marginTop: 'auto',
  },
  exitPreviewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  exitPreviewContainerWideMode: {
    position: 'absolute',
    bottom: -29,
    right: 25,
    backgroundColor: 'white',
    padding: 5,
  },
  close: {
    top: -12,
    right: -12,
    height: 38,
  },
})

const EnhancedScreen = React.memo(({
  bookId,
  inEditMode,
  closeToolAndExitReading,
  heading,
  tabs,
  viewingPreview,
  setViewingPreview,
}) => {

  const [ selectedTabIndex, setSelectedTabIndex ] = useState(0)
  const [ previewSelectedTabIndex, setPreviewSelectedTabIndex ] = useState(0)

  const onExitPreview = useCallback(() => setViewingPreview(false), [])

  const wideMode = useWideMode()

  if(tabs.length === 0 && !viewingPreview) return null

  const tabIndex = viewingPreview ? previewSelectedTabIndex : selectedTabIndex
  const setTabIndex = viewingPreview ? setPreviewSelectedTabIndex : setSelectedTabIndex

  return (
    <View style={wideMode ? styles.constainerWideMode : styles.container}>
      <View style={wideMode ? styles.topSectionWideMode : styles.topSection}>
        <View style={wideMode ? styles.headingLineWideMode : styles.headingLine}>
          <Text style={styles.heading}>{heading}</Text>
          {!viewingPreview && !wideMode &&
            <HeaderIcon
              iconName="md-close"
              onPress={closeToolAndExitReading}
              uiStatus="faded"
              style={styles.close}
            />
          }
        </View>
        {(inEditMode && !viewingPreview) &&
          <StatusAndActions
            bookId={bookId}
            setViewingPreview={setViewingPreview}
          />
        }
        {inEditMode && viewingPreview &&
          <View style={wideMode ? styles.exitPreviewContainerWideMode : styles.exitPreviewContainer}>
            <TouchableOpacity onPress={onExitPreview}>
              <Text style={styles.exitPreview}>
                {i18n("Exit preview", "", "enhanced")}
              </Text>
            </TouchableOpacity>
          </View>
        }
      </View>
      {tabs.length > 0 &&
        <>
          <ScrollView
            key={viewingPreview ? `preview-tabs` : `draft-tabs`}
            style={styles.tabs}
            horizontal={true}
          >
            {tabs.map(({ title }, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => setTabIndex(idx)}
              >
                <Text
                  style={idx === tabIndex ? styles.selectedTabTitle : styles.tabTitle}
                >
                  {title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <ViewPager
            key={viewingPreview ? `preview-content` : `draft-content`}
            style={styles.tabsContent}
            selectedIndex={tabIndex}
            onSelect={setTabIndex}
          >
            {tabs.map(({ content }, idx) => (
              <ScrollView
                key={idx}
                style={styles.tabContent}
                contentContainerStyle={styles.tabContentContainer}
              >
                {content}
              </ScrollView>
            ))}
          </ViewPager>
        </>
      }
    </View>
  )
})

export default EnhancedScreen