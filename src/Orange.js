import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Orange = (props) => {
  
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.title}>{props.value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    backgroundColor: '#ff9812',
    padding: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zero: {
    width: 80
  },
  title: {
    color: '#fff'
  }
});

export default Orange;

// #ff9812 orange
// #333333 digit
// #a5a5a5 gray
