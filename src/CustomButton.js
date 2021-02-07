import React from 'react';
import { Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';

const CustomButton = (props) => {

  const composedButton = [
    styles.button,
    props.value === 0 ? styles.zero : void(0),
    props.isOrange ? styles.orange : void(0),
    props.isGray ? styles.gray : void(0) 
  ];
  return (
    <TouchableHighlight underlayColor="#a5a5a5" onPress={props.onPress} style={composedButton}>
      <Text style={styles.title}>{props.value}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    backgroundColor: '#333333',
    width: '20%',
    height: Dimensions.get('window').width / 5,
    margin: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zero: {
    paddingLeft: '8%',
    width: '44%',
    alignItems: 'flex-start',
  },
  orange: {
    backgroundColor: '#ff9812',
  },
  gray: {
    backgroundColor: '#a5a5a5',
  },
  title: {
    color: '#fff',
    fontSize: 36,
  }
});

export default CustomButton;

// #ff9812 orange
// #333333 digit
// #a5a5a5 gray
