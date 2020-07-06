import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default class App extends Component {
  state = {
    firstname: "",
    lastname: "",

    people: [
      {id: 1, firstname: "Jb", lastname: "Lavisse"},
      {id: 2, firstname: "Jb", lastname: "Lavisse"},
      {id: 3, firstname: "Jb", lastname: "Lavisse"},
      {id: 4, firstname: "Jb", lastname: "Lavisse"},
      {id: 5, firstname: "Jb", lastname: "Lavisse"},
      {id: 6, firstname: "Jb", lastname: "Lavisse"},
      {id: 7, firstname: "Jb", lastname: "Lavisse"},
      {id: 8, firstname: "Jb", lastname: "Lavisse"},
      {id: 9, firstname: "Jb", lastname: "Lavisse"},
      {id: 10, firstname: "Jb", lastname: "Lavisse"},
      {id: 11, firstname: "Jb", lastname: "Lavisse"},
      {id: 12, firstname: "Jb", lastname: "Lavisse"},
      {id: 13, firstname: "Jb", lastname: "Lavisse"}
    ]
  }

  changeFirstname = (text) => {
    this.setState({
      firstname: text
    })
  }

  changeLastname = (text) => {
    this.setState({
      lastname: text
    })
  }

  render() {
    let schizophreniaList = this.state.people.map(person => {
      return <Text style={styles.person}>{person.firstname} {person.lastname}</Text>
    });

    return (
      <View style={styles.container}>
        <View style={styles.formInput}>
          <Text>Nom: </Text>
          <TextInput style={styles.input}  keyboardType="number-pad"
            value={this.state.lastname} onChangeText={text => this.changeLastname(text)} />
        </View>
        <View style={styles.formInput}>
          <Text>Prénom: </Text>
          <TextInput style={styles.input} 
            value={this.state.firstname} onChangeText={text => this.changeFirstname(text)} />
        </View>
        <View>
          <Text>Bonjour, je m'appelle {this.state.firstname} {this.state.lastname}</Text>
        </View>

        {/* <ScrollView>
          {schizophreniaList}
        </ScrollView> */}

        <FlatList
          data={this.state.people}
          renderItem={({item}) => <Text style={styles.person}>{item.firstname} {item.lastname}</Text>}
          keyExtractor={item => item.id.toString()}
        />
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 10
  }, 
  formInput: {
    margin: 20
  }, 
  person: {
    backgroundColor: 'pink',
    color: 'white',
    margin: 20,
    padding: 20
  }
});
