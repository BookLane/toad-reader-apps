import { useParams } from "react-router-dom"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import Book from "./Book"
import Audiobook from "./Audiobook"

const BookWrapper = ({
  books,
  ...otherProps
}) => {

  const { bookId } = useParams()
  const book = books[bookId] || {}

  if(book.audiobookInfo) return <Audiobook {...otherProps} />
  return <Book {...otherProps} />

}

const mapStateToProps = ({ books }) => ({
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookWrapper)