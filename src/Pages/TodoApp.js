//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todosReducer from '../Services/todosReducer'
import TodoAdder from '../Components/TodoAdder';
import TodoList from '../Components/TodoList';
// create a component

const store = createStore(todosReducer)



 export default class TodoApp extends Component {
    render() {
        return (
            <Provider store={store} style={styles.container}>
                <TodoList/>
                <TodoAdder/>
                
            </Provider>
        );
    }
} 

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});


