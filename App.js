import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';


export default class App extends Component {
  state = {
    pen: "Lyreco"
  }

  changePen() {
    console.log("coucou");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Mon crayon c'est un {this.state.pen}</Text>
        </View>
        <Text>Open up App.js to start working on your app!</Text>
        <Text style={styles.text}>Coucou <Text>http://www.google.com</Text></Text>
  
        <Button title="STOP" color="#06bb1a" onPress={this.changePen} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777',
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
  }
});
