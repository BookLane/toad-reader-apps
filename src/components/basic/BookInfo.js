import React from "react"
import { FileSystem } from "expo"
import { View, Text } from "native-base"

import BookInfoCover from "./BookInfoCover.js"
import BookInfoTitle from "./BookInfoTitle.js"
import BookInfoAuthor from "./BookInfoAuthor.js"
import BookInfoDetails from "./BookInfoDetails.js"

class BookInfo extends React.Component {

  render() {
    const { bookId, bookInfo } = this.props
    const { coverFilename, title, author, downloadStatus, epubSizeInMB } = bookInfo

    return (
      <View>
        <BookInfoCover bookId={bookId} coverFilename={coverFilename} />
        <BookInfoTitle>{title}</BookInfoTitle>
        <BookInfoAuthor>{author}</BookInfoAuthor>
        <BookInfoDetails bookInfo={bookInfo} />
      </View>
    )
  }
}

export default BookInfo