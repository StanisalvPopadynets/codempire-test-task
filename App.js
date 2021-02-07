import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { checkGray, checkOrange } from './src/util';

import CustomButton from './src/CustomButton';

const symbols = ['AC', '+/-', '%', '÷', 'mc', 'mr', 'm-', 'm+', 7,8,9, 'x', 4,5,6, '-', 1,2,3, '+', 0, ',', '='];

const App = () => {

  const [isCurrentFirst, setIscurrentFirst] = useState(true);
  const [firstVal, setFirstVal] = useState('');
  const [secondVal, setSecondVal] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(0);
  const [memoryValue, setMemoryValue] = useState(null);

  const checkAction = (symbol, isOrange) => {
    if (typeof symbol === 'number') return onDigitClick;
    if (symbol === 'AC') return fullReset;
    if (symbol === '+/-') return toggleSign;
    if (symbol === '%') return divideByHundred;
    if (isOrange && !symbol.includes('m')) return onOrangeClick;
    if (symbol === ',') return addDecimal;
    if (symbol.includes('m')) return memoryOperation;
  };

  const toggleSign = () => {
    setResult(-result);
    isCurrentFirst ? setFirstVal(-result) : setSecondVal(-result);
  };

  const divideByHundred = () => {
    setResult(result / 100);
    isCurrentFirst ? setFirstVal(result / 100) : setSecondVal(result / 100);
  };

  const addDecimal = () => {
    setResult(result + '.');
    isCurrentFirst ? setFirstVal(result + '.') : setSecondVal(result + '.');
  };

  const fullReset = () => {
    setFirstVal('');
    setSecondVal('');
    setOperation('');
    setResult(0);
    setIscurrentFirst(true);
  };

  const onDigitClick = digit => {
    if ((!firstVal || (firstVal && !operation && !secondVal))) {
      const valueToBeSet = (firstVal + String(digit));
      if (valueToBeSet.length > 9)
        return;
      setFirstVal(valueToBeSet);
      setResult(valueToBeSet);
      setIscurrentFirst(true);
    } else {
      const valueToBeSet = (secondVal + String(digit));
      if (valueToBeSet.length > 9)
        return;
      setSecondVal(valueToBeSet);
      setResult(valueToBeSet);
      setIscurrentFirst(false);
    }
  };

  const onOrangeClick = (symbol) => {
    if (symbol === '=') {
      onBasicOperation();
    } else {
      setOperation(symbol);
      setIscurrentFirst(false);
    }
  };

  const onBasicOperation = () => {
    let res;
    switch (operation) {
      case '÷' : res = firstVal / secondVal;
        break;
      case '+' : res = +firstVal + +secondVal;
        break;
      case 'x' : res = firstVal * secondVal;
        break;
      case '-' : res = firstVal - secondVal;
        break;
      default : res = firstVal;
    }
    setFirstVal('');
    setResult(res);
    setSecondVal('');
    setOperation('');
    setIscurrentFirst(true);
  };

  const memoryOperation = symbol => {
    switch (symbol) {
      case 'mc': 
        setMemoryValue(null);
        break;
      case 'mr':
        if (!memoryValue)
          break;
        setResult(memoryValue);
        if (isCurrentFirst) {
          setFirstVal(memoryValue);
        } else {
          setSecondVal(memoryValue);
        }
        break;
      case 'm+':
        setMemoryValue(+result + +memoryValue);
        break;
      case 'm-':
        setMemoryValue(result - memoryValue);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.inputDisplay} value={result ?? '0'}/>
        
        <View style={styles.digitContainer}>

          {
            symbols.map((el) => {
              const isOrange = checkOrange(el);
              const isGray = checkGray(el);
              const onPress = checkAction(el, isOrange);
              return (
                <CustomButton 
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

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  digitContainer: {
    justifyContent: 'space-between',
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  inputDisplay: {
    textAlign: 'right',
    fontSize: 72,
    color: '#fff',
    paddingTop: '10%',
    paddingHorizontal: '6%'
  }
});

export default App;