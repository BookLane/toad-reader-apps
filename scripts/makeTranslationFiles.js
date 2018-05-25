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

  The i18n function parameters: str, swaps, desc

*/

const findInFiles = require('find-in-files')

console.log('')
console.log('Preparing to create translations needed files...')

let numFilesCreated = 0
let defaultTranslationObj = {}

// go through all files in src and extract calls to i18n(), building out the default json
findInFiles.find(`i18n\\((?:[^)"']*|"[^"]*"|'[^']*')*\\)`, 'src/components/basic', '.js$')
// findInFiles.find(`i18n\\([^)"']*("[^)]*"|'[^)]*')\\)`, 'src/components/basic', '.js$')
  .then(function(results) {
    for(let path in results) {
      const res = results[path]
      res.matches.forEach(match => {
        const parts = match.match(/^i18n\([\s\n]*("[^"]*"|'[^']*'|[\w_$]*)(?:\n|.)*?(?:,[\s\n]*("[^"]*"|'[^']*'|[\w_$]*)[\s\n]*)?\)$/)

        if(!parts) {
          // report bad i18n in the code and exit
          console.log(`Bad i18n form in ${path}: ${match}`)
          exit
        }

        const engText = parts[1].replace(/^["'](.*)["']$/, '$1')

        if(parts[2] === undefined) {
          defaultTranslationObj[engText] = "TRANSLATE NEEDED"

        } else {
          const desc = parts[1].replace(/^["'](.*)["']$/, '$1')
          if(!defaultTranslationObj[engText]) {
            defaultTranslationObj[engText] = {}
          }
          defaultTranslationObj[engText][desc] = "TRANSLATE NEEDED"
        }

      })
        // (?:\s|\n)
        // console.log(
        //     'found "' + res.matches[0] + '" ' + res.count
        //     + ' times in "' + result + '"'
        // );
    }

    console.log(defaultTranslationObj)

    // for each translation file (except English)
      // import the json (use the [lang]-incomplete.json file if exists, otherwise [lang].json)
      // fill in the default json where language variables are missing
      // if any language variables need translation
        // save to [lang]-incomplete.json


    console.log(`Created ${numFilesCreated} translation file(s).`)
    console.log('')

  })
