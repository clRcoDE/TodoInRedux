/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import TodoApp from './src/Pages/TodoApp'
import MainTodo from './newsrc/MainTodo';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       {/* <TodoApp/> */}
       <MainTodo/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
