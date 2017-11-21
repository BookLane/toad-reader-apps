import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Text, List, ListItem } from "native-base"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    minHeight: 300,
    zIndex: 1,
  },
})

const baseListItemStyle = {
  backgroundColor: 'transparent',
}

class BookContents extends React.Component {

  render() {

    const { navigation, books } = this.props
    const { bookId } = navigation.state.params

    const getListItems = (toc, indentLevel=0) => {
      let listItems = []

      ;(toc || []).forEach(tocItem => {
        listItems.push(
          <ListItem
            key={`${tocItem.label}-${tocItem.href}`}
            style={{...baseListItemStyle, paddingLeft: indentLevel * 15 }}
            onPress={() => this.props.navigation.goBack()}
          >
            <Text>{tocItem.label}</Text>
          </ListItem>
        )
        listItems = [...listItems, ...getListItems(tocItem.subNav, indentLevel+1)]
      })

      return listItems
    }
    
    return (
      <List>
        {getListItems(books[bookId].toc)}
      </List>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
})

const  matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookContents)