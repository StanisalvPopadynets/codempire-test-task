import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Digit = (props) => {

  const composedButton = StyleSheet.compose(styles.button, props.value === 0 ? styles.zero : void(0))
  return (
    <TouchableOpacity onPress={props.onPress} style={composedButton}>
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
  zero: {
    width: 80,
  },
  title: {
    color: '#fff'
  }
});

export default Digit;

// #ff9812 orange
// #333333 digit
// #a5a5a5 gray
