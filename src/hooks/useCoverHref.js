const useCoverHref = ({ bookInfo, bookId }) => {

  let { audiobookInfo, coverHref } = bookInfo || {}
  const { coverFilename } = audiobookInfo || {}

  const isAudiobook = !!audiobookInfo

  if(isAudiobook || !bookId) {
    return (
      coverHref
      || (
        coverFilename  // coverFilename was the old way this was done
          ? `epub_content/covers/${coverFilename}`
          : null
      )
    )
  } else {
    return (
      /^epub_content\/covers\//.test(coverHref || ``)
        ? coverHref
        : `epub_content/covers/book_${bookId}.png`  // this also was the old way of doing things
    )
  }

}

export default useCoverHref