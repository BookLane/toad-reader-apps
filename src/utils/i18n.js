/*

  Assumptions: An app instance will only be in a single language. 

  Concept: As this code will be reused often to spin off new apps, make it easy to "flip a switch" and choose the language.

  ** English is written inline with i18n wrapper around it.
  ** Language is chosen simply via the import line below.
  ** Translations get their own file in the translations directory.
  ** TODO: Write a script to build base translation files. Go through all files and find the i18n function
  instances, making each first parameter of this function into a key in the translation file.

  Examples:
    i18n("Library")
    i18n("{{num_results}} results!", { num_results: this.props.numResults })

*/

// import translations from "./translations/he.js"
const translations = {}  // for English

const i18n = (str, swaps={}) => (translations[str] || str).replace(/{{([^}]+)}}/, (x, swapSpot) => swaps[swapSpot] || "")

export default i18n