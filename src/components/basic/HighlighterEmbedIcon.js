import React, { useCallback } from "react"
import { StyleSheet, TouchableOpacity } from "react-native"
import * as Clipboard from 'expo-clipboard'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Ionicons } from "@expo/vector-icons"
import { i18n } from "inline-i18n"

import { getIdsFromAccountId, isStaging, dashifyDomain } from '../../utils/toolbox'
import Toast from "../../utils/Toast"

const styles = StyleSheet.create({
  embed: {
    padding: 8,
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: 21,
    lineHeight: 21,
  },
})

const HighlighterEmbedIcon = React.memo(({
  bookId,
  selectionInfo,

  books,
  idps,
}) => {

  const goCopyEmbedCode = useCallback(
    async () => {

      const book = books[bookId] || {}
      const accountId = Object.keys(book.accounts)[0] || ""
      const { idpId } = getIdsFromAccountId(accountId)
      let { domain } = idps[idpId]

      if(isStaging()) {
        domain = `${dashifyDomain(domain)}.staging.toadreader.com`
      }

      const latestLocation = {
        spineIdRef: selectionInfo.spineIdRef,
        cfi: selectionInfo.cfi,
      }

      const highlightUrl = `https://${domain}/#/book/${bookId}#${encodeURIComponent(JSON.stringify({ latestLocation }))}`
      const scriptUrl = `https://${domain}/scripts/widget_setup.js`

      const embedCode = `
        <!-- Change width, max-height, text size (%) and theme (author-theme, default-theme or night-theme) of the reader via the data attributes. -->
        <!-- Style the widget encasement via css rules, doubling the class name. -->
        <!-- Eg. .erasereader-widget-div.erasereader-widget-div, .widget-reference.widget-reference::before { border-color: #ab781c; color: #ab781c; } -->
        <a class="erasereader-widget" href="${highlightUrl}" target="_blank" data-maxheight="" data-width="" data-textsize="" data-theme=""><div>${i18n("Open book")}</div></a>
        <script>!function(d,i,s){if(!window.erasereader){if(!d.getElementById(i)) {var c=d.getElementsByTagName(s)[0],j=d.createElement(s);j.id=i; j.src="${scriptUrl}"; c.parentNode.insertBefore(j,c);}}else{erasereader.setup()}}(document,"erasereader-widget-script","script");</script>
      `.replace(/^\n+|\n+$/, '').replace(/^ +/gm, '')

      await Clipboard.setStringAsync(embedCode)
      Toast.show({
        text: i18n("Embed code copied"),
        duration: 4000,
      })


    },
    [ bookId, selectionInfo, books, idps ],
  )

  return (
    <>
      <TouchableOpacity
        onPress={goCopyEmbedCode}
      >
        <Ionicons
          name="code"
          style={styles.embed}
        />
      </TouchableOpacity>
    </>
  )
})

const mapStateToProps = ({ idps, books }) => ({
  idps,
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(HighlighterEmbedIcon)
