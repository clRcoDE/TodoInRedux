//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, KeyboardAvoidingView, Dimensions, TouchableHighlight, Image } from "react-native";

import { connect } from "react-redux";
import { setToggle } from '../Services/actions/action'
// create a component


const deviceWidth = Dimensions.get('window').width



class TodoList extends Component {

  changeActivity = index => {
    // console.log(index)
    this.props.dispatch(setToggle(index))
  }

  render() {

    return (
      <KeyboardAvoidingView style={styles.container}>
        {this.props.todos.length < 1 && <Text style={styles.listHeader}>Your To Do List Goes Here </Text>}
        <FlatList
          // inverted
          data={this.props.todos}
          keyExtractor={(item) => item.text}
          ref={ref => this.flatList = ref}
          onContentSizeChange={() => this.flatList.scrollToEnd({ animated: true })}
          renderItem={({ item, index }) => (
            <View style={styles.listItemWrapper}>
              <TouchableHighlight
                onPress={this.changeActivity.bind(this, index)}
                underlayColor='royalblue'
                style={[styles.listElement]}>

                <View style={styles.listItemWrapper}>
                  <Text
                    style={[styles.todoItems, { textDecorationLine: item.isCompleted ? 'line-through' : 'none', textDecorationStyle: 'solid' }]}>
                    {item.isCompleted ? <Image source={require('../Assets/Images/checked.png')} /> : <Image source={require('../Assets/Images/round.png')} />}
                    {item.text}
                  </Text>
                  <TouchableHighlight onPress={() => { }} style={styles.closeButton} underlayColor='royalblue' >
                    <Image source={require('../Assets/Images/close.png')} />
                  </TouchableHighlight>
                </View>
              </TouchableHighlight >
            </View>

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
    elevation: 10
  },
  todoItems: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontStyle: 'italic',
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 5



  },

  listItemWrapper:{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  listElement: {
    height: 65,
    backgroundColor: 'rgba(125,200,255,0.2)',
    // padding: 20,
    width: deviceWidth
    // alignItems:'center',
    // justifyContent: 'center',
    // flex: 5
  },
  listHeader: {
    color: "rgba(125,200,255,0.6)",
    fontSize: 20,
    fontWeight: "200",
    fontFamily: 'Roboto',
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
