import React from "react"
import { Container, Content, Text, Button } from "native-base"

import BookHeader from "../major/BookHeader.js"
// import BookPages from "../major/BookPages.js"
// import BookContents from "../major/BookContents.js"
// import BookProgress from "../major/BookProgress.js"

class Book extends React.Component {

  constructor() {
    super()
    this.state = {
      bookView: 'pages',
      subtitle: 'chapter here',
    }
  }

  render() {

    const { navigation } = this.props
    const { bookId } = navigation.state.params
    const { bookView, subtitle } = this.state

    return (
      <Container>
        <BookHeader
          bookId={bookId}
          subtitle={subtitle}
          navigation={navigation}
          bookView={bookView}
          toggleBookView={() => this.setState({ bookView: bookView == 'pages' ? 'contents' : 'pages' })}
        />
        <Content padder>
          <Text>Book contents</Text>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.goBack()}>
            <Text>Back to reading</Text>
          </Button>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Highlights")}>
            <Text>Highlights</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Book