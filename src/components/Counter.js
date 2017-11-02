import React, { Component } from "react"
import { Container, Content, Text, Card, Body, Button, Title, CardItem } from "native-base"
import AppHeader from "./basic/AppHeader.js"
import { increment, decrement } from "../redux/actions.js"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
class Counter extends Component{
  render(){
    console.log(this.props.count);
    return(
      <Container>
        <AppHeader>
          <Body>
            <Title>Redux Counter</Title>
          </Body>
        </AppHeader>
        <Content padder>
          <Card>
            <CardItem>
              <Text>
                {this.props.count}
              </Text>
            </CardItem>
          </Card>
          <Button dark bordered onPress= {() => this.props.increment()}>
            <Text>Increment</Text>
          </Button>
          <Button dark bordered onPress= {() => this.props.decrement()}>
            <Text>Decrement</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
function mapStateToProps(state){
  return{
    count : state.count
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({increment: increment, decrement: decrement}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Counter);
