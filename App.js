import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const plusButton = () => {
    setResult(parseFloat(number1) + parseFloat(number2));
  }
  const minusButton = () => {
    setResult(parseFloat(number1) - parseFloat(number2));
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.header}>Calculator</Text>
        <Text style={styles.result}>Result: {result}</Text>

      </View>
      <View style={styles.calculator}>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={number1 => setNumber1(number1)}
            value={number1}
          />
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={number2 => setNumber2(number2)}
            value={number2}
          />
        
          <View style={styles.buttonBar}>
            <Button onPress={plusButton} title='+' />
            <Button onPress={minusButton} title='-' />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  header: {
    fontSize: 25,
    color: '#000',
  },
  
  result: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center'
  },
  input: {
    width: 200, 
    borderColor: 'black', 
    borderWidth: 1, 
    color: '#000', 
    margin: 3,
  },
  inputs: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
  },
  buttonBar: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
});