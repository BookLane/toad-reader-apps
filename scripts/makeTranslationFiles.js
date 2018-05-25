/*

Example json translation file:

{
  "Library here!": "TRANSLATE NEEDED",
  "Library {{here}}!": "TRANSLATE NEEDED",
  "Back": {
    "i.e. go back": "TRANSLATE NEEDED",
    "i.e. the back of the book": "TRANSLATE NEEDED"
  }
}

*/

console.log('')
console.log('Preparing to create translations needed files...')

let numFilesCreated = 0


// go through all files in src and extract calls to i18n(), building out the default json

// for each translation file (except English)
  // import the json (use the [lang]-incomplete.json file if exists, otherwise [lang].json)
  // fill in the default json where language variables are missing
  // if any language variables need translation
    // save to [lang]-incomplete.json


console.log(`Created ${numFilesCreated} translation file(s).`)
console.log('')
