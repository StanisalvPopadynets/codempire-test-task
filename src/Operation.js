import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Opeation = (props) => {

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.title}>{props.value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    backgroundColor: '#333333',
    padding: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff'
  }
});

export default Opeation;

// #ff9812 orange
// #333333 digit
// #a5a5a5 gray
