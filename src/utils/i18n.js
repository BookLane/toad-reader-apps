/*

  Assumptions:
    * An app instance will only be in a single language.
    * Most of the time, the exact same English text should be translated the same. 

  Concept: As this code will be reused often to spin off new apps, make it easy to "flip a switch" and choose the language.

  ** English is written inline with i18n wrapper around it.
  ** Language is chosen simply via the import line below.
  ** Translations get their own file in the translations directory.
  ** TODO: Write a script to build base translation files.

  Usage examples:
    i18n("Library")
    i18n("{{num_results}} results!", { num_results: this.props.numResults })
    i18n("Back", {}, "i.e. go back")
    i18n("Back", {}, "i.e. the back of the book")  // Differing descriptions create separate variables to translate

*/

// import translations from "./translations/he.js"
const translations = {}  // for English

const i18n = (str, swaps={}, desc) => 
  (
    translations[str]!==undefined
      ? (
        translations[str][desc]!==undefined
          ? translations[str][desc]
          : translations[str]
      )
      : str
  ).replace(/{{([^}]+)}}/g, (x, swapSpot) => swaps[swapSpot] || "")

export default i18n