/*

  Example json translation file:

    {
      "Library here!": "TRANSLATION NEEDED",
      "Library {{here}}!": "TRANSLATION NEEDED",
      "Back": {
        "i.e. go back": "TRANSLATION NEEDED",
        "i.e. the back of the book": "TRANSLATION NEEDED"
      }
    }

  The i18n function parameters: str, swaps, desc

*/

const findInFiles = require('find-in-files')
const fs = require('fs')

const TRANSLATION_NEEDED = "TRANSLATION NEEDED"

console.log('')
console.log('Preparing to create translations needed files...')
console.log('')

const langsGettingNewFile = []
const langsNotGettingNewFile = []
let defaultTranslationObj = {}

// go through all files in src and extract calls to i18n(), building out the default json
findInFiles.find(`i18n\\((?:\\\\.|[^)"']|"(?:\\\\.|[^"])*"|'(?:\\\\.|[^'])*')*\\)`, 'src', '.js$')
  .then(results => {
    for(let path in results) {
      if(['src/utils/i18n.js'].includes(path)) continue

      const res = results[path]
      res.matches.forEach(match => {
        const parts = match.match(/^i18n\([\s\n]*("(?:\\.|[^"])*"|'(?:\\.|[^'])*'|[\w_$]*)(?:\n|.)*?(?:,[\s\n]*("(?:\\.|[^"])*"|'(?:\\.|[^'])*'|[\w_$]*)[\s\n]*)?\)$/)

        if(!parts) {
          // report bad i18n in the code and exit
          console.log(`Bad i18n form in ${path}: ${match}`)
          process.exit()
        }

        const engText = parts[1].replace(/^["'](.*)["']$/, '$1').replace(/\\(.)/g, '$1')

        if(parts[2] === undefined) {
          if(typeof defaultTranslationObj[engText] === 'object') {
            defaultTranslationObj[engText][""] = TRANSLATION_NEEDED
          } else {
            defaultTranslationObj[engText] = TRANSLATION_NEEDED
          }

        } else {
          const desc = parts[2].replace(/^["'](.*)["']$/, '$1').replace(/\\(.)/g, '$1')
          if(typeof defaultTranslationObj[engText] === 'string') {
            defaultTranslationObj[engText] = {
              "": defaultTranslationObj[engText],
            }
          } else if(typeof defaultTranslationObj[engText] !== 'object') {
            defaultTranslationObj[engText] = {}
          }
          defaultTranslationObj[engText][desc] = TRANSLATION_NEEDED
        }

      })
    }

    // for each translation file (except English)
    fs.readdir('./src/utils/translations', (err, files) => {
      if(!err) {
        files.forEach((file, index) => {
          if(['current.json', 'en.json'].includes(file)) return
          if(files.includes(file.replace(/\.json$/, '-incomplete.json'))) return

          const lang = file.replace(/(?:\-incomplete)?\.json$/, '')
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

          const incompleteFileContent = JSON.stringify(newTranslationObj, null, '\t')

          if(incompleteFileContent.indexOf(TRANSLATION_NEEDED) !== -1) {
            fs.writeFileSync(`./src/utils/translations/${lang}-incomplete.json`, incompleteFileContent)
            langsGettingNewFile.push(lang)
          } else {
            langsNotGettingNewFile.push(lang)
          }
        })
      } 

      langsGettingNewFile.length && console.log(`Created translation file(s) for ${langsGettingNewFile.join(', ')}.`)
      langsNotGettingNewFile.length && console.log(`Full translations already provided for ${langsNotGettingNewFile.join(', ')}.`)
      console.log('')
      console.log('Done.')
      console.log('')

      process.exit()
    })

  })
