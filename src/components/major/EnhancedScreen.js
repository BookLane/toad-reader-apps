import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native"
import { ViewPager } from "@ui-kitten/components"
import { i18n } from "inline-i18n"

import { getToolbarHeight } from '../../utils/toolbox'
import useWideMode from "../../hooks/useWideMode"

import StatusAndActions from "./StatusAndActions"
import HeaderIcon from "../basic/HeaderIcon"
import SaveStateHeaderIcon from "../basic/SaveStateHeaderIcon"

const container = {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'white',
  zIndex: 5,
}

const tabTitle = {
  lineHeight: 30,
  fontWeight: '500',
  marginRight: 20,
  borderBottomWidth: 3,
  borderBottomColor: 'transparent',
}

const styles = StyleSheet.create({
  container: {
    ...container,
  },
  constainerWideMode: {
    ...container,
    top: getToolbarHeight(),
    paddingTop: 20,
  },
  topSection: {
    zIndex: 1,
  },
  topSectionWideMode: {
    paddingHorizontal: 30,
    zIndex: 1,
    flexDirection: 'row',
  },
  headingLine: {
    flexDirection: 'row',
    padding: 8,
    height: getToolbarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.1)',
  },
  headingLineWideMode: {
    flexDirection: 'row',
    flex: 1,
  },
  heading: {
    fontSize: 19,
    flex: 1,
    lineHeight: 40,
  },
  headingWideMode: {
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
    padding: 15,
  },
  exitPreviewContainerWideMode: {
    position: 'absolute',
    bottom: -29,
    right: 25,
    backgroundColor: 'white',
    padding: 5,
  },
  menu: {
    paddingVertical: 5,
  },
  menuItem: {
    lineHeight: 50,
    paddingHorizontal: 15,
    fontSize: 17,
  },
})

const EnhancedScreen = React.memo(({
  bookId,
  inEditMode,
  closeToolAndExitReading,
  heading,
  tabs,
  initialSelectedTabIndex,
  viewingPreview,
  setViewingPreview,
}) => {

  const [ selectedTabIndex, setSelectedTabIndex ] = useState(initialSelectedTabIndex)
  const [ previewSelectedTabIndex, setPreviewSelectedTabIndex ] = useState()

  const onExitPreview = useCallback(() => setViewingPreview(false), [])

  const wideMode = useWideMode()

  if(tabs.length === 0 && !viewingPreview) return null

  const tabIndex = viewingPreview ? previewSelectedTabIndex : selectedTabIndex
  const setTabIndex = viewingPreview ? setPreviewSelectedTabIndex : setSelectedTabIndex
  const resetTabIndex = useCallback(() => setTabIndex(), [ setTabIndex ])

  return (
    <View style={wideMode ? styles.constainerWideMode : styles.container}>
      <View style={wideMode ? styles.topSectionWideMode : styles.topSection}>
        <View style={wideMode ? styles.headingLineWideMode : styles.headingLine}>
          {!wideMode &&
            <HeaderIcon
              iconName="md-arrow-back"
              onPress={tabIndex === undefined ? closeToolAndExitReading : resetTabIndex}
              style={styles.back}
            />
          }
          <Text style={wideMode ? styles.headingWideMode : styles.heading}>
            {(wideMode || tabIndex === undefined) ? heading : tabs[tabIndex].title}
          </Text>
          {!wideMode && inEditMode && tabIndex !== undefined && <SaveStateHeaderIcon />}
        </View>
        {(inEditMode && !viewingPreview && (wideMode || tabIndex !== undefined)) &&
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
          {(wideMode || tabIndex === undefined) && 
            <ScrollView
              key={viewingPreview ? `preview-tabs` : `draft-tabs`}
              style={wideMode ? styles.tabs : styles.menu}
              horizontal={wideMode}
            >
              {tabs.map(({ title }, idx) => (
                <TouchableOpacity
                  key={idx}
                  onPress={() => setTabIndex(idx)}
                >
                  <Text
                    style={
                      wideMode
                        ? (
                          idx === (tabIndex || 0)
                            ? styles.selectedTabTitle
                            : styles.tabTitle
                        )
                        : styles.menuItem
                    }
                  >
                    {title}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          }
          {wideMode &&
            <ViewPager
              key={viewingPreview ? `preview-content` : `draft-content`}
              style={styles.tabsContent}
              selectedIndex={tabIndex || 0}
              onSelect={setTabIndex}
            >
              {tabs.map(({ content }, idx) => (
                <View
                  key={idx}
                  style={styles.tabContent}
                >
                  {content}
                </View>
              ))}
            </ViewPager>
          }
          {!wideMode && tabIndex !== undefined &&
            <View
              style={styles.tabContent}
            >
              {tabs[tabIndex].content}
            </View>
          }
        </>
      }
    </View>
  )
})

export default EnhancedScreen