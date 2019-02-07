//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
// create a component
import { addTodo, addTodoAction, setItems } from "../Services/actions/action";
class TodoApp extends Component {
  constructor(props) {
    super(props);
    // this.inputs = "";

    this.state = {
      inputs: ""
    };
  }
  inputer = text => {
    this.setState({ inputs: text });
    // text=''
  };

  submiter = () => {
    if (this.state.inputs.length === 0) {
      return;
    }
    this.props.dispatch(setItems(this.state.inputs));
    this.setState(prev => ({ inputs: "" }));

    //this.inputs = "";
  };

  render() {
    // let store=this.props
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.adder}>
          <TextInput
            placeholder="WRITE YOUR TASKS HERE"
            placeholderTextColor="#bbb"
            onChangeText={this.inputer}
            onSubmitEditing={this.submiter}
            style={styles.inputStyles}
            value={this.state.inputs}
          />
          <TouchableHighlight
            onPress={this.submiter}
            style={styles.adderButton}
          >
            <Text style={styles.adderButtonText}>
              {/* ADD #{this.props.todos.length + 1} Todo */}
            </Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "white"
  },
  adder: {
    backgroundColor: "white",
    flex: 1,
    // height:100,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  adderButton: {
    height: 50,
    width: 150,
    borderRadius: 100,
    elevation: 10,
    backgroundColor: "royalblue",
    justifyContent: "center",
    alignItems: "center"
  },
  adderButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "800"
  },
  inputStyles: {
    borderBottomWidth: 4,
    borderBottomColor: "#ddd"
  }
});

//make this component available to the app
const mapStateToProps = state => {
  return {
    todos: state.items
  };
};
//make this component available to the app
export default connect(mapStateToProps)(TodoApp);
