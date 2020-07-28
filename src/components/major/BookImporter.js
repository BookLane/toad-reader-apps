import React, { useCallback } from "react"
import { StyleSheet, Text } from "react-native"
import { i18n } from "inline-i18n"
import { Link } from "../routers/react-router"

import FileImporter from "./FileImporter"

const styles = StyleSheet.create({
  failed: {
    fontWeight: 'bold',
    color: "red",
  },
  result: {
  },
  bookId: {
    color: "rgba(0,0,0,.4)",
  },
})

const BookImporter = ({
  open,
  accountId,
  updateBooks,
  onClose,
  replaceExisting,
}) => {

  const getFileLink = useCallback(
    ({ mode, name, result }) => {
      return (
        !!(mode === 'complete' && (result || {}).bookId)
          ? (
            <Link
              to={`/book/${(result || {}).bookId}`}
            >
              {name}
            </Link>
          )
          : name
      )
    },
    [],
  )

  const getSuccessText = useCallback(
    ({ result }) => {
      return (
        <>
          {!!(result || {}).success &&
            <Text style={styles.result}>
              {(
                {
                  'already-associated': i18n("Not imported as this book is already in the library."),
                  'associated-to-existing': i18n("Not imported as this book is already in the library of an associated site. Created association to this library."),
                }[(result || {}).note]
                || (
                  replaceExisting
                    ? i18n("Replaced successfully.")
                    : i18n("Imported successfully.")
                )
              )}
            </Text>
          }
          {!!(result || {}).success &&
            <Text style={styles.bookId}>{i18n("Book id: {{id}}", { id: result.bookId })}</Text>
          }
        </>
      )
    },
    [ replaceExisting ],
  )

  const refresh = useCallback(
    () => updateBooks({ accountId }),
    [ accountId ],
  )

  return (
    <FileImporter
      open={open}
      title={replaceExisting ? i18n("Replacing EPUB") : i18n("Importing books")}
      fileType='application/epub+zip'
      multiple={!replaceExisting}
      relativePath={`/importbook.json${replaceExisting ? `?replaceExisting=1` : ``}`}
      accountId={accountId}
      getFileLink={getFileLink}
      getSuccessText={getSuccessText}
      onSuccess={refresh}
      onClose={onClose}
    />
  )
}

export default BookImporter