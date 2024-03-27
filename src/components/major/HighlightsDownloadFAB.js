import React, { useMemo, useCallback, useRef, useState, useEffect } from "react"
import { StyleSheet, View, Text } from "react-native"
import { OverflowMenu, MenuItem } from "@ui-kitten/components"
import { i18n } from "inline-i18n"
import { CSVLink } from "react-csv"
import { jsPDF } from "jspdf"
import useToggle from "react-use/lib/useToggle"
import "../../utils/Roboto-Regular-normal"

import { combineItems } from '../../utils/toolbox'

import FAB from '../basic/FAB'
import SketchPad from "../basic/SketchPad"
import CoverAndSpin from "../basic/CoverAndSpin"

const MAX_EXPORT_QUOTE_CHARACTER_LENGTH = 100

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 80,
    height: 80,
  },
  overflowMenu: {
    marginRight: 10,
  },
  sketchPadContainer: {
    zIndex: -1,
    position: 'absolute',
    top: '100%',
    left: 0,
  },
})

const getTotalSketches = highlightGroupsToShow => highlightGroupsToShow.map(({ highlights }) => highlights.map(({ sketch }) => ((sketch || {}).sketchData ? true : false))).flat().filter(Boolean).length

const HighlightsDownloadFAB = React.memo(({
  filename,
  highlightGroupsToShow,
  spineLabelsByIdRef,
  bookUrl,
  typeStrings,
}) => {

  const [ showOptions, toggleShowOptions ] = useToggle(false)
  const dataURLs = useRef({})
  const [ sketchesReady, setSketchesReady ] = useState(false)

  const csvData = useMemo(
    () => {

      const csvData = [
        [
          i18n("Chapter", "", "enhanced"),
          i18n("Location", "", "enhanced"),
          i18n("Highlight snippet", "", "enhanced"),
          i18n("Highlighter", "", "enhanced"),
          i18n("My notes", "", "enhanced"),
          i18n("Instructor’s Notes", "", "enhanced"),
        ],
      ]

      highlightGroupsToShow.forEach(highlightGroupToShow => {
        highlightGroupToShow.highlights.forEach(({ cfi, text, types, notes, instructorHighlightersWithoutNotes }) => {

          const latestLocation = {
            spineIdRef: highlightGroupToShow.spineIdRef,
            cfi,
          }

          text = text || ""

          if(text.length > MAX_EXPORT_QUOTE_CHARACTER_LENGTH) {
            text = `${text.substr(0, MAX_EXPORT_QUOTE_CHARACTER_LENGTH - 3)}...`
          }
  
          csvData.push([
            spineLabelsByIdRef[highlightGroupToShow.spineIdRef] || "",
            `${bookUrl}#{"latestLocation":${JSON.stringify(latestLocation)}}`,
            text,
            combineItems(...[
              ...(!types.includes('user') ? [] : [
                i18n("Me", "", "enhanced"),
              ]),
              ...notes.map(({ author_fullname }) => author_fullname).filter(Boolean),
              ...instructorHighlightersWithoutNotes,
            ]),
            (notes.filter(({ author_fullname }) => !author_fullname)[0] || {}).note || "",
            notes.filter(({ author_fullname }) => author_fullname).map(({ note }) => note).join("\n\n"),
          ].map(col => col.replace(/"/g, '""')))
        })
      })

      return csvData
    },
    [ highlightGroupsToShow, bookUrl ],
  )

  const onSelect = useCallback(
    ({ row }) => {

      if(row === 1) {
        if(!sketchesReady) return

        const options = {
          format: "letter",
          unit: "in",
          lineHeightFactor: 1,
        }

        const pageHeight = 11
        const pageWidth = 8.5
        const pageMargins = {
          top: .75,
          bottom: .75,
          left: .5,
          right: .5,
        }
        const pointsPerUnit = 200

        const doc = new jsPDF(options)

        doc.setFont("Roboto-Regular")

        let currentTop = pageMargins.top

        const addText = ({
          text,
          marginLeft=pageMargins.left,
          marginRight=pageMargins.right,
          marginBottom=.13,
          color="#000000",
          size=11,
          background,
          verticalPadding=0,
          horizontalPadding=0,
          leftLineColor,
        }) => {
          if(!text) return
          let lineTop = currentTop
          let textLineHeight = 0
          const lineLeft = marginLeft
          if(leftLineColor) {
            marginLeft += .1
          }
          doc.setTextColor(color)
          doc.setFontSize(size)
          text.split(/\n+/g).forEach(paragraph => {
            const lines = doc.splitTextToSize(paragraph, pageWidth - marginLeft - marginRight)
            lines.forEach(line => {
              const { h, w } = doc.getTextDimensions(line)
              textLineHeight = h * .8
              if(currentTop + h > pageHeight - pageMargins.bottom) {
                if(leftLineColor) {
                  doc.setLineWidth(.01)
                  doc.setDrawColor(leftLineColor)
                  doc.line(lineLeft, lineTop - textLineHeight, lineLeft, currentTop - textLineHeight*1.4)
                }      
                doc.addPage(options.format)
                lineTop = currentTop = pageMargins.top
              }
              if(background) {
                doc.setFillColor(background)
                doc.rect(marginLeft, currentTop - h*.8 - verticalPadding, w + horizontalPadding*2, h + verticalPadding*2, `F`)
              }
              doc.text(line, marginLeft + horizontalPadding, currentTop)
              currentTop += h*1.3
            })
            currentTop += marginBottom
          })
          currentTop -= textLineHeight*.4
          if(leftLineColor) {
            doc.setLineWidth(.01)
            doc.setDrawColor(leftLineColor)
            doc.line(lineLeft, lineTop - textLineHeight, lineLeft, currentTop - textLineHeight - marginBottom)
          }
        }

        addText({
          text: filename,
          size: 18,
        })

        highlightGroupsToShow.forEach(({ spineIdRef, highlights }, idx1) => {
          currentTop += .2
          addText({
            text: spineLabelsByIdRef[spineIdRef],
            color: "#AAAAAA",
            size: 13,
          })
          highlights.forEach(({ cfi, types, text, notes, sketch, instructorHighlightersWithoutNotes }, idx2) => {
            types.forEach(type => {
              addText({
                text: typeStrings[type],
                background: "#d4dfee",
                size: 9,
                horizontalPadding: .05,
                verticalPadding: .02,
              })
            })
            const quotationMark = '“'
            doc.setTextColor("#000000")
            doc.setFontSize(40)
            const { w, h } = doc.getTextDimensions(quotationMark)
            doc.text(quotationMark, pageMargins.left, currentTop + .3)
            addText({
              text: text || i18n("(Highlighted text unavailable.)", "", "enhanced"),
              marginLeft: pageMargins.left + w + .1,
            })
            if(notes.length > 0) currentTop += .12
            notes.forEach(note => {
              addText({
                text: note.note,
                color: "999999",
                size: 11,
                marginLeft: pageMargins.left + w + .1,
                leftLineColor: "#3f92ef",
              })
              if(note.author_fullname) {
                currentTop -= .1
                addText({
                  text: note.author_fullname,
                  size: 10,
                  marginLeft: pageMargins.left + w + .1,
                  marginBottom: .18
                })
              }
            })
            if(instructorHighlightersWithoutNotes.length > 0) {
              currentTop -= .1
              addText({
                text: combineItems(...instructorHighlightersWithoutNotes),
                size: 10,
                marginLeft: pageMargins.left + w + .1,
                marginBottom: .18
              })
            }
            if(notes.length > 0) currentTop += .02
            if((sketch || {}).sketchData && dataURLs.current[`${idx1} ${idx2}`]) {
              let width = sketch.canvasWidth / pointsPerUnit
              let height = sketch.canvasHeight / pointsPerUnit
              const widthReductionFactor = (pageWidth - pageMargins.left - pageMargins.right) / width
              if(widthReductionFactor < 1) {
                width *= widthReductionFactor
                height *= widthReductionFactor
              }
              const heightReductionFactor = ((pageHeight - pageMargins.top - pageMargins.bottom) / 2) / height
              if(heightReductionFactor < 1) {
                width *= heightReductionFactor
                height *= heightReductionFactor
              }
              if(currentTop + height > pageHeight - pageMargins.bottom) {
                doc.addPage(options.format)
                currentTop = pageMargins.top
              }
              doc.addImage(dataURLs.current[`${idx1} ${idx2}`], 'PNG', (pageWidth - width) / 2, currentTop, width, height, `${idx1} ${idx2}`, 'MEDIUM')
              currentTop += height + .2
            }
          })
        })

        doc.save(`${filename}.pdf`)

      }

      toggleShowOptions()
    },
    [ toggleShowOptions, filename, highlightGroupsToShow, typeStrings, sketchesReady ],
  )

  useEffect(
    () => {
      setSketchesReady(getTotalSketches(highlightGroupsToShow) === 0)
      dataURLs.current = {}
    },
    [ highlightGroupsToShow ],
  )

  return (
    <>

      <OverflowMenu
        placement='top end'
        anchor={() => (
          <View style={styles.fabContainer}>
            <FAB
              iconName="md-cloud-download"
              status="primary"
              onPress={toggleShowOptions}
            />
          </View>
        )}
        visible={showOptions}
        style={styles.overflowMenu}
        onBackdropPress={toggleShowOptions}
        onSelect={onSelect}
      >
        <CSVLink
          data={csvData}
          filename={`${filename}.csv`}
          target="_blank"
        >
          <MenuItem
            title={
              <Text>
                {i18n("Spreadsheet (csv)")}
              </Text>
            }
          />
        </CSVLink>
        <MenuItem
          title={
              <Text>
                {i18n("Document (pdf)")}
                {!sketchesReady && <CoverAndSpin size="small" />}
              </Text>
          }
        />
      </OverflowMenu>

      {showOptions && highlightGroupsToShow.map(({ highlights }, idx1) => (
        highlights.map(({ sketch }, idx2) => (
          (sketch || {}).sketchData
            ? (
              <View
                key={`${idx1} ${idx2}`}
                style={[
                  styles.sketchPadContainer,
                  {
                    width: sketch.canvasWidth,
                    height: sketch.canvasHeight,
                  },
                ]}
              >
                <SketchPad
                  sketch={sketch}
                  mode="toDataURL"
                  onDataURLReady={dataURL => {
                    dataURLs.current[`${idx1} ${idx2}`] = dataURL

                    if(Object.values(dataURLs.current).length === getTotalSketches(highlightGroupsToShow)) {
                      setSketchesReady(true)
                    }
                  }}
                />
              </View>
            )
            : null
        ))
      ))}

    </>
  )
})

export default HighlightsDownloadFAB