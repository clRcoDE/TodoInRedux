//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , TextInput ,TouchableHighlight,KeyboardAvoidingView} from 'react-native';
import {connect} from 'react-redux'
// create a component
// import addTodo from './action'
class TodoApp extends Component {
    
constructor(props){
    super(props);
    this.inputs=''
}
inputer=(text)=>{
this.inputs=text;
// text=''

}


submiter=()=>{
    this.props.dispatch({type:'ADD_TODO',text:this.inputs})
    
    // console.log(this.props)
    

}

    render() {
        // let store=this.props
        return (
            <KeyboardAvoidingView style={styles.container}>
                
                
                <View style={styles.adder}>
                <TextInput placeholder='WRITE YOUR TASKS HERE' onChangeText={this.inputer.bind(this)}  onSubmitEditing={this.submiter}  style={styles.inputStyles} />
                <TouchableHighlight onPress={this.submiter} style={styles.adderButton}><Text style={styles.adderButtonText}>ADD Todo</Text></TouchableHighlight>
                </View>

            </KeyboardAvoidingView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    adder:{
        backgroundColor:'white',
        flex:1,
        // height:100,
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    adderButton:{
        height:50,
        width:150,
       borderRadius: 100,
       elevation:10,
       backgroundColor:'royalblue',
       justifyContent: 'center',
       alignItems: 'center',
    },
    adderButtonText:{
        color:'white',
        fontSize:16,
        fontWeight:'800'
    },
    inputStyles:{
        borderBottomWidth:2,
        borderBottomColor:'#bbb'
        
    }
});

//make this component available to the app
const mapStateToProps = state => {
    return{
        todos:state
    }
  }
  //make this component available to the app
  export default connect(mapStateToProps)(TodoApp);
