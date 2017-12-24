import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Container, Content } from "native-base"
import i18n from "../../utils/i18n.js"

import BookHeader from "../major/BookHeader.js"
import BookPages from "../major/BookPages.js"
import BookContents from "../major/BookContents.js"
import BookProgress from "../major/BookProgress.js"
import Options from "../major/Options.js"

import { confirmRemoveEPub } from "../../utils/removeEpub.js"

import { setDownloadStatus } from "../../redux/actions.js";

class Book extends React.Component {

  constructor() {
    super()
    this.state = {
      bookView: 'pages',
      subtitle: 'chapter here',
      showOptions: false,
    }
  }

  render() {

    const { navigation, books, setDownloadStatus } = this.props
    const { bookId } = navigation.state.params
    const { bookView, subtitle, showOptions } = this.state

    const BookViewComponent = bookView == 'pages' ? BookPages : BookContents

    return (
      <Container>
        <BookHeader
          bookId={bookId}
          subtitle={bookView == 'pages' && subtitle}
          navigation={navigation}
          bookView={bookView}
          toggleBookView={() => this.setState({
            bookView: bookView == 'pages' ? 'contents' : 'pages',
            showOptions: false,
          })}
          toggleShowOptions={() => this.setState({ showOptions: !showOptions })}
        />
        <Content>
          <BookViewComponent
            navigation={navigation}
          />
          {showOptions && 
            <Options
              requestHide={() => this.setState({ showOptions: false })}
              options={[
                {
                  text: i18n("Display settings"),
                  onPress: () => alert('Display settings'),
                },
                {
                  text: i18n("Recommend this book"),
                  onPress: () => alert('Recommend this book'),
                },
                {
                  text: i18n("My highlights and notes"),
                  onPress: () => navigation.navigate("Highlights"),
                },
                {
                  text: i18n("Remove from device"),
                  onPress: () => confirmRemoveEPub({
                    books,
                    bookId,
                    setDownloadStatus,
                    done: () => {
                      navigation.goBack(navigation.state.params.pageKey)
                    }
                  }),
                },
              ]}
            />
          }
        </Content>
        {bookView == 'pages' && <BookProgress />}
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
})

const  matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setDownloadStatus,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Book)