//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import TodoApp from '../Components/TodoApp';
import reducer from '../Services/reducers/reducer'
import TodoList from '../Components/TodoList'
export const store = createStore(reducer)
// create a component
class MainTodo extends Component {
    
    render() {
        return (
            <Provider store={store} style={styles.container}>
            <TodoList/>
            <TodoApp/>
               
            </Provider>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default MainTodo;
