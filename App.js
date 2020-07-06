import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default class App extends Component {
  state = {
    pen: "Lyreco"
  }

  changePen = (text) => {
    this.setState({
      pen: text
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput style={styles.input} 
          value={this.state.pen} onChangeText={text => this.changePen(text)} />

        <View style={styles.header}>
          <Text style={styles.headerText}>Mon crayon c'est un {this.state.pen}</Text>
        </View>
        <Text>Open up App.js to start working on your app!</Text>
        <Text style={styles.text}>Coucou <Text>http://www.google.com</Text></Text>
  
        {/* <Button title="STOP" color="#06bb1a" onPress={this.changePen} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  text: {
    color: 'red'
  },
  header: {
    margin: 20,
    padding: 15,
    backgroundColor: 'blue',
  },
  headerText: {
    color: 'white'
  },
  input: {
    borderWidth: 1,
    borderColor: '#777'
  }
});
