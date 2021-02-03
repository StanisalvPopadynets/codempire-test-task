import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import Digit from './src/Digit';
import Operation from './src/Operation';
import Orange from './src/Orange';

const operations = ['/', 'm+', 'x', '+', '-', '='];
const digits = [',', ...Array(10).keys()];

 const App = () => {

  const [firstVal, setFirstVal] = useState('');
  const [secondVal, setSecondtVal] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(null);

  const onDigitClick = digit => {
    debugger
    if ((!firstVal || (firstVal && !operation && !secondVal))) {
      setFirstVal(Number(firstVal + String(digit)));
      setResult(Number(firstVal + String(digit)));
    } else {
      setSecondtVal(Number(secondVal + String(digit)));
      setResult(Number(secondVal + String(digit)));
    }
  }

  const onOperation = () => {
    let res;
    switch (operation) {
      case '/' : res = firstVal / secondVal;
        break;
      case '+' : res = firstVal + secondVal;
        break;
      case 'x' : res = firstVal * secondVal;
        break;
      case '-' : res = firstVal - secondVal;
        break;
      default : console.log(res);
      }
      console.log('RESULT', res)
      setFirstVal(res);
      setResult(res);
      setSecondtVal('');
      setOperation('');
    } 
  // console.log(firstVal)
  // console.log(secondVal)
  // console.log("APPPPPPPPPPPPPPPPp")
  return (
    <View style={styles.container}>
      <TextInput textAlign='center' style={{textAlign: 'right'}} value={result ?? '0'}/>
      <View style={{flexDirection: 'row'}}>
        
        <View style={styles.digitContainer}>
          {/* <Digit value=',' style={{flexOrder: 1}} /> */}
          {digits.map(el => <Digit onPress={() => onDigitClick(el)} key={el} value={el}/> )}
          <View style={{flexDirection: 'row', width: 120, flexWrap: 'wrap'}}>
            <Operation value='AC' />
            <Operation value='+/-' />
            <Operation value='%' />
            <Operation value='mc' />
            <Operation value='mr' />
            <Operation value='m-' />
          </View>
        </View>
        <View>
          {operations.map(el => <Orange key={el} value={el} onPress={() => {
            if(el === '=') {
              onOperation();
            }
            else {
              setOperation(el);
            }
          }} />)}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  digitContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    width: 120
  }
});

export default App;