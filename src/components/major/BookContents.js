import React from "react"
import { FlatList } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Text, ListItem } from "native-base"

const baseListItemStyle = {
  backgroundColor: 'transparent',
}

class BookContents extends React.Component {

  getListItems = (toc, indentLevel=0) => {
    let listItems = []

    ;(toc || []).forEach(tocItem => {
      listItems = [
        ...listItems,
        {
          ...tocItem,
          indentLevel,
        },
        ...this.getListItems(tocItem.subNav, indentLevel+1),
      ]
    })

    return listItems
  }

  renderItem = ({ item }) => {
    const { goToHref } = this.props
    const { href, indentLevel } = item

    return (
      <ListItem
        style={{...baseListItemStyle, paddingLeft: indentLevel * 15 }}
        onPress={() => {
          goToHref({ href })
        }}
      >
        <Text>{item.label}</Text>
      </ListItem>
    )
  }

  render() {
    const { navigation, books } = this.props
    const { bookId } = navigation.state.params

    return (
      <FlatList
        data={this.getListItems(books[bookId].toc)}
        renderItem={this.renderItem}
        keyExtractor={item => `${item.label}-${item.href}`}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookContents)