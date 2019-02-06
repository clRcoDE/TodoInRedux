//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {connect} from 'react-redux'

// create a component
class TodoList extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* {this.props.map((item,index)=>{<View><Text>{item.text}</Text></View>})} */}
                <View><Text>hello world</Text></View>
            </View>
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

//make this component available to the app
const mapStateToProps = state => {
    return{
        state:state
    }
}
//make this component available to the app
export default connect(mapStateToProps)(TodoList);
