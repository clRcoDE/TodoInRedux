//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import addTodo from '../Services/Actions'



// create a component
class TodoAdder extends Component {

    
constructor(props){
  super(props);
  input=''
}

  submitter = () => {

// console.log(this.props)
// console.log('hello')
this.props.dispatch(addTodo)

  };

  inputer=(text)=>{
input = text
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.addNew}>
          <View style={styles.inputer}>
            <TextInput
              placeholder="WRITE IT DOWN"
              placeholderTextColor="white" 
              onChangeText={this.inputer.bind(this)}
              onSubmitEditing={this.submitter.bind(this)}
              />
          </View>
          <View style={styles.submitter}>
            <TouchableHighlight onPress={this.submitter.bind(this)}  underlayColor='rgba(100,100,100,0.6)'  style={{backgroundColor:'navy'}}  >
              <Text style={{color:'grey'}} >add to do </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});


const mapStateToProps = state => {
  return{
      state:state
  }
}
//make this component available to the app
export default connect(mapStateToProps)(TodoAdder);
