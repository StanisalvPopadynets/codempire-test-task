import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';

const TestBtn = (props) => {

  const composedButton = [
    styles.button,
    props.value === 0 ? styles.zero : void(0),
    props.isOrange ? styles.orange : void(0),
    props.isGray ? styles.gray : void(0) 
  ];
  return (
    <TouchableHighlight onPress={props.onPress} style={composedButton}>
      <Text style={styles.title}>{props.value}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    backgroundColor: '#333333',
    padding: 10,
    // width: 40,
    width: '20%',
    height: Dimensions.get('window').width / 5,
    margin: '2%',
    // height: 40,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zero: {
    // width: 80,
    width: '44%',
    aspectRatio: 1,
  },
  orange: {
    backgroundColor: '#ff9812',
  },
  gray: {
    backgroundColor: '#a5a5a5',
  },
  title: {
    color: '#fff',
    fontSize: 24
  }
});

export default TestBtn;

// #ff9812 orange
// #333333 digit
// #a5a5a5 gray
