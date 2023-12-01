const useDownloadProgress = ({ downloadProgressByBookId, bookInfo, bookId }) => {

  const { audiobookInfo } = bookInfo || {}
  const isAudiobook = !!audiobookInfo

  if(isAudiobook) {

    const { spines } = audiobookInfo

    let totalMS = 0
    let totalMSDownloaded = 0
    spines.forEach(({ filename, durationMS=1 }) => {
      totalMS += durationMS
      totalMSDownloaded += ((downloadProgressByBookId[bookId] || {})[filename] || 0) * durationMS
    })

    return parseInt((totalMSDownloaded / totalMS) * 100, 10)

  } else {

    return downloadProgressByBookId[bookId] || 0

  }

}

export default useDownloadProgress