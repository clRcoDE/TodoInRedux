//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList,KeyboardAvoidingView ,Dimensions, TouchableHighlight} from "react-native";

import { connect } from "react-redux";

// create a component

const deviceWidth=Dimensions.get('window').width
class TodoList extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <FlatList
          data={this.props.todos}
          keyExtractor={(item)=>item.text}
          renderItem={({ item, index }) => (
            <TouchableHighlight onPress={()=>{}} underlayColor='rgba(200,200,200,0.6)' style={styles.listElement}>
              <Text style={styles.todoItems}>{item.keyId} &#8226; {item.text} </Text>
              
            </TouchableHighlight >
          )}
        />
        {/* <View style={styles.lister}>{this.props.todos.map((item,index)=><Text>{item.text}</Text>)}</View> */}
        {/* <Text>TodoList</Text> */}
      </KeyboardAvoidingView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'royalblue',
  },
  todoItems:{
      color:'#fff',
      fontSize:16,
      fontFamily: 'Roboto',
      fontWeight:'800'
  },
  listElement:{
      height:50,
      backgroundColor:'rgba(200,200,200,0.25)',
      padding: 20,
      width:deviceWidth

  }
});

const mapStateToProps = state => {
  return {
    todos: state
  };
};
//make this component available to the app
export default connect(mapStateToProps)(TodoList);
