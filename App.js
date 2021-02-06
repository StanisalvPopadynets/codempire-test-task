import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Digit from './src/Digit';
import Operation from './src/Operation';
import Orange from './src/Orange';
import TestBtn from './src/TestBtn';

const checkOrange = symbol => {
  switch (symbol) {
    case '/': return true;
    case 'm+': return true;
    case 'x': return true;
    case '-': return true;
    case '+': return true;
    case '=': return true;
    default: return false;
  }
}

const checkGray = symbol => {
  switch (symbol) {
    case 'AC': return true;
    case '%': return true;
    case '+/-': return true;
    default: return false;
  }
}

const test = ['AC', '+/-', '%', '/', 'mc', 'mr', 'm-', 'm+',7,8,9, 'x',4,5,6,'-',1,2,3, '+', 0, ',', '=']
const operations = ['/', 'm+', 'x', '+', '-', '='];
const digits = [...Array(10).keys(), '/',];
digits.splice(1, 0, ','); // add comma in order to fit it into the grid

const App = () => {

  const [isCurrentFirst, setIscurrentFirst] = useState(true);
  const [firstVal, setFirstVal] = useState('');
  const [secondVal, setSecondtVal] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(0);

  const checkAction = (symbol, isOrange) => {
    if (typeof symbol === 'number') return onDigitClick;
    if (symbol === 'AC') return fullReset;
    if (symbol === '+/-') return toggleSign;
    if (symbol === '%') return divideByHundred;
    if (isOrange && !symbol.includes('m')) return onOrangeClick;
    if (symbol === ',') return addDecimal;
  }

  const toggleSign = () => {
    setResult(-result);
    isCurrentFirst ? setFirstVal(-result) : setSecondtVal(-result);
  };

  const divideByHundred = () => {
    setResult(result / 100);
    isCurrentFirst ? setFirstVal(result / 100) : setSecondtVal(result / 100);
  };

  const addDecimal = () => {
    setResult(result + '.');
    isCurrentFirst ? setFirstVal(result + '.') : setSecondtVal(result + '.');
  }

  const fullReset = () => {
    setFirstVal('');
    setSecondtVal('');
    setOperation('');
    setResult(0);
    setIscurrentFirst(true);
  }

  const onDigitClick = digit => {
    // debugger
    if ((!firstVal || (firstVal && !operation && !secondVal))) {
      const valueToBeSet = Number(firstVal + String(digit))
      setFirstVal(valueToBeSet);
      setResult(valueToBeSet);
      setIscurrentFirst(true);
    } else {
      const valueToBeSet = Number(secondVal + String(digit));
      setSecondtVal(valueToBeSet);
      setResult(valueToBeSet);
      setIscurrentFirst(false);
    }
  }

  const onOrangeClick = (symbol) => {
    symbol === '='
      ? onBasicOperation()
      : setOperation(symbol)
  }

  const onBasicOperation = () => {
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
      default : res = firstVal;
    }
    console.log('RESULT', res)
    setFirstVal(res);
    setResult(res);
    setSecondtVal('');
    setOperation('');
    setIscurrentFirst(true);
  } 
    // debugger
  return (
    <View style={styles.container}>
      <TextInput textAlign='center' style={{textAlign: 'right', fontSize: 72, color: '#fff', paddingVertical: 40, paddingHorizontal: '6%'}} value={result ?? '0'}/>
      <View style={{flexDirection: 'row'}}>
        
        <View style={styles.digitContainer}>

          {/* {digits.map(el => <Digit onPress={() => onDigitClick(el)} key={el} value={el}/> )}
          
          <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Operation onPress={fullReset} value='AC' />
            <Operation onPress={() =>  {
                setResult(-result);
                isCurrentFirst ? setFirstVal(-result) : setSecondtVal(-result);
              }} value='+/-' 
            />
            <Operation onPress={() => {
                setResult(result / 100);
                isCurrentFirst ? setFirstVal(result / 100) : setSecondtVal(result / 100);                
              }} value='%' />
            <Operation value='mc' />
            <Operation value='mr' />
            <Operation value='m-' />
          </View> */}

          {
            test.map((el) => {
              const isOrange = checkOrange(el);
              const isGray = checkGray(el);
              const onPress = checkAction(el, isOrange);
              return (
                <TestBtn 
                  key={el}
                  value={el}
                  isOrange={isOrange}
                  isGray={isGray}
                  onPress={() => onPress(el)}
                />
              );
            })
          }

        </View>

        {/* <View style={{flex: 1, justifyContent: 'space-between'}}>
          {operations.map(el => <Orange key={el} value={el} onPress={() => {
            if(el === '=') {
              onBasicOperation();
            }
            else {
              setOperation(el);
            }
          }} />)}
        </View> */}

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  digitContainer: {
    // backgroundColor: 'blue',
    justifyContent: 'space-between',
    flex: 5,
    flexDirection: 'row',
    // flexWrap: 'wrap-reverse',
    flexWrap: 'wrap',
    justifyContent: 'center'
    // backgroundColor: 'red'
    // width: 120
  }
});

export default App;