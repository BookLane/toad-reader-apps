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
const fs = require('fs')

console.log('')
console.log('Preparing to create translations needed files...')

let numFilesCreated = 0
let defaultTranslationObj = {}

// go through all files in src and extract calls to i18n(), building out the default json
findInFiles.find(`i18n\\((?:[^)"']*|"[^"]*"|'[^']*')*\\)`, 'src', '.js$')
  .then(results => {
    for(let path in results) {
      if(['src/utils/i18n.js'].includes(path)) continue

      const res = results[path]
      res.matches.forEach(match => {
        const parts = match.match(/^i18n\([\s\n]*("[^"]*"|'[^']*'|[\w_$]*)(?:\n|.)*?(?:,[\s\n]*("[^"]*"|'[^']*'|[\w_$]*)[\s\n]*)?\)$/)

        if(!parts) {
          // report bad i18n in the code and exit
          console.log(`Bad i18n form in ${path}: ${match}`)
          process.exit()
        }

        const engText = parts[1].replace(/^["'](.*)["']$/, '$1')

        if(parts[2] === undefined) {
          if(typeof defaultTranslationObj[engText] === 'object') {
            defaultTranslationObj[engText][""] = "TRANSLATE NEEDED"
          } else {
            defaultTranslationObj[engText] = "TRANSLATE NEEDED"
          }

        } else {
          const desc = parts[2].replace(/^["'](.*)["']$/, '$1')
          if(typeof defaultTranslationObj[engText] === 'string') {
            defaultTranslationObj[engText] = {
              "": defaultTranslationObj[engText],
            }
          } else if(typeof defaultTranslationObj[engText] !== 'object') {
            defaultTranslationObj[engText] = {}
          }
          defaultTranslationObj[engText][desc] = "TRANSLATE NEEDED"
        }

      })
    }

    console.log(defaultTranslationObj)

    // for each translation file (except English)
    fs.readdir('./src/utils/translations', (err, files) => {
      if(!err) {
        files.forEach((file, index) => {
          if(['current.json'].includes(file)) return
          if(files.includes(file.replace(/\.json$/, '-incomplete.json'))) return

          // import the json (use the [lang]-incomplete.json file if exists, otherwise [lang].json)
          const translationObj = JSON.parse(fs.readFileSync(`./src/utils/translations/${file}`, 'utf8'))
          const newTranslationObj = JSON.parse(JSON.stringify(defaultTranslationObj))
          
          // fill in the default json where language variables are missing
          for(let engText in translationObj) {
            if(typeof translationObj[engText] === 'object') {
              if(typeof newTranslationObj[engText] === 'object') {
                for(let desc in translationObj[engText]) {
                  if(newTranslationObj[engText][desc]) {
                    newTranslationObj[engText][desc] = translationObj[engText][desc]
                  }
                }
              } else if(translationObj[engText][""]) {
                newTranslationObj[engText] = translationObj[engText][""]
              }

            } else {
              if(typeof newTranslationObj[engText] === 'object') {
                if(newTranslationObj[engText][""]) {
                  newTranslationObj[engText][""] = translationObj[engText]
                }
              } else if(newTranslationObj[engText]) {
                newTranslationObj[engText] = translationObj[engText]
              }
            }
          }

          console.log(file, newTranslationObj)
          // if any language variables need translation
            // save to [lang]-incomplete.json
        })
      } 

      console.log(`Created ${numFilesCreated} translation file(s).`)
      console.log('')

      process.exit()
    })

  })
