import React, { useCallback } from "react"
import { StyleSheet, Text } from "react-native"
import { i18n } from "inline-i18n"
import { Link } from "../../hooks/useRouterState"

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
                  'already-associated': i18n("Not imported as this book is already in the library.", "", "admin"),
                  'associated-to-existing': i18n("Not imported as this book is already in the library of an associated site. Created association to this library.", "", "admin"),
                }[(result || {}).note]
                || (
                  replaceExisting
                    ? i18n("Replaced successfully.", "", "admin")
                    : i18n("Imported successfully.", "", "admin")
                )
              )}
              {!!result.noOfflineSearch &&
                <>
                  {` `}
                  {i18n("However, due to size, offline search will not be available in the apps. (Online search will still be available.)", "", "admin")}
                </>
              }
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
      title={replaceExisting ? i18n("Replacing EPUB", "", "admin") : i18n("Importing books", "", "admin")}
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