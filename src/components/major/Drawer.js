import React from "react"
import { Image } from "react-native"
import { Container, Content, Text, List, ListItem } from "native-base"

import backToLibrary from '../../utils/native/backToLibrary.js'

class Drawer extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={{
                uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
              }}
            />
          </Image>
          <List>
            <ListItem
              button
              onPress={() => this.props.navigation.dispatch(backToLibrary)}>
              <Text>Library</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => this.props.navigation.navigate("Accounts")}>
              <Text>Accounts</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => alert('remove!')}>
              <Text>Remove stuff</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Drawer