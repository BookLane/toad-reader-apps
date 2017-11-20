import { FileSystem } from "expo"
import i18n from "./i18n.js"
import { ActionSheet, Toast } from "native-base"

const removeEpub = async ({ bookId, success }) => {
  
  const localBaseUri = `${FileSystem.documentDirectory}books/${bookId}/`

  await FileSystem.deleteAsync(localBaseUri.replace(/\/$/, ''), { idempotent: true })

  success && success()

  console.log(`Done removing book ${bookId}.`)
}

export const confirmRemoveEPub = ({ books, bookId, setDownloadStatus, done }) => {
  ActionSheet.show(
    {
      options: [
        { text: i18n("Remove from device"), icon: "remove-circle", iconColor: "#fa213b" },
        { text: i18n("Cancel"), icon: "close" }
      ],
      destructiveButtonIndex: 0,
      cancelButtonIndex: 1,
      title: i18n(
        'Are you sure you want to remove "{{book_title}}" from this device?',
        {
          book_title: books[bookId].title,
        }
      ),
    },
    buttonIndex => {
      if(buttonIndex == 0) {
        setDownloadStatus({ bookId, downloadStatus: 0 })
        removeEpub({ bookId })
        done && done()
      }
    }
  )
}

export const confirmRemoveAllEPubs = ({ books, setDownloadStatus }) => {
  ActionSheet.show(
    {
      options: [
        { text: i18n("Remove all books"), icon: "remove-circle", iconColor: "#fa213b" },
        { text: i18n("Cancel"), icon: "close" }
      ],
      destructiveButtonIndex: 0,
      cancelButtonIndex: 1,
      title: i18n("Are you sure you want to remove all books from this device?"),
    },
    buttonIndex => {
      if(buttonIndex == 0) {
        Object.keys(books).forEach(bookId => {
          setDownloadStatus({ bookId, downloadStatus: 0 })
          removeEpub({ bookId })
        })
        Toast.show({
          text: i18n("All books removed."),
          buttonText: i18n("Okay"),
          duration: 5000,
        })
      }
    }
  )
}