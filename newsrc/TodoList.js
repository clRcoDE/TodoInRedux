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
      {this.props.todos.length < 1 && <Text style={styles.listHeader}>Your To Do List Goes Here </Text>}
        <FlatList
        // inverted
          data={this.props.todos}
          keyExtractor={(item)=>item.text}
          ref={ref => this.flatList = ref}
          onContentSizeChange={() => this.flatList.scrollToEnd({animated: true})}
          renderItem={({ item, index }) => (
            
            <TouchableHighlight onPress={()=>{}} underlayColor='royalblue' style={styles.listElement}>
              <Text style={styles.todoItems}> &#8226; {item.text} </Text>
              
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
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'royalblue',
    elevation:10
  },
  todoItems:{
      color:'#fff',
      fontSize:20,
      fontFamily: 'Roboto',
      fontWeight:'400',
      fontStyle:'italic'
  },
  listElement:{
      height:65,
      backgroundColor:'rgba(125,200,255,0.2)',
      padding: 20,
      width:deviceWidth,
      // alignItems:'center',
      justifyContent: 'center',

  },
  listHeader:{
    color: "rgba(125,200,255,0.6)",
    fontSize: 20,
    fontWeight: "200",
    fontFamily:'Roboto',
    fontStyle: 'italic',
    // height:50
  }

});

const mapStateToProps = state => {
  return {
    todos: state.items
  };
};
//make this component available to the app
export default connect(mapStateToProps)(TodoList);
