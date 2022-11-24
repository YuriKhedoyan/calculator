import React from "react";
import { useState } from "react";
import NumberButtons from '../common/NumberButtons'
import '../../Assets/style.sass'


const Calculator = () => {
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState('');
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);

  const submit = e => {
    if (operation === '+') {
      setResult(firstNum + secondNum)
      setFirstNum(firstNum + secondNum);
    } else if (operation === '-') {
      setResult(firstNum - secondNum)
      setFirstNum(firstNum - secondNum);
    } else if (operation === '/') {
      setResult(firstNum / secondNum)
      setFirstNum(firstNum / secondNum);
    } else if (operation === '%') {
      setResult(firstNum * secondNum / 100)
      setFirstNum(firstNum * secondNum / 100);
    } else {
      setResult(firstNum * secondNum)
      setFirstNum(firstNum * secondNum);
    }
    console.log(result)
    setSecondNum(0);
    setOperation('');
  }

  const clear = e => {
    setResult(0);
    setFirstNum(0);
    setSecondNum(0);
    setOperation('');
  }

  const checkNumber = num => !operation ? setFirstNum(-Math.abs(num)) : setSecondNum(-Math.abs(num))

  return (
    <>
      <div className="result">
        <p><b>{result ? result : secondNum !== 0 ? secondNum : firstNum}</b></p>
        <p>
        </p>
      </div>
      <div>
        <span>
          <NumberButtons title={'C'} onClick={e => clear()} elementId={'grayButton'}></NumberButtons>
          <NumberButtons title={'+-'} onClick={e => !operation ? checkNumber(firstNum) : checkNumber(secondNum)} elementId={'grayButton'}></NumberButtons>
          <NumberButtons title={'%'} onClick={e => setOperation('%')} elementId={'grayButton'}></NumberButtons>
          <NumberButtons title={'/'} onClick={e => setOperation('/')} elementId={'orangeButton'}></NumberButtons>
        </span>
      </div>
      <div>
        <span>
          {[7, 8, 9].map(el => <NumberButtons title={el} onClick={e => operation ? setSecondNum(Number(String(secondNum) + el)) : setFirstNum(Number(String(firstNum) + el))} elementId={'blackButton'}></NumberButtons>)}
          <NumberButtons title={'X'} onClick={e => setOperation('X')} elementId={'orangeButton'}></NumberButtons>
        </span>
      </div>
      <div>
        <span>
          {[4, 5, 6].map(el => <NumberButtons title={el} onClick={e => operation ? setSecondNum(Number(String(secondNum) + el)) : setFirstNum(Number(String(firstNum) + el))} elementId={'blackButton'}></NumberButtons>)}
          <NumberButtons title={'-'} onClick={e => setOperation('-')} elementId={'orangeButton'}></NumberButtons>
        </span>
      </div>
      <div>
        <span>
          {[1, 2, 3].map(el => <NumberButtons title={el} onClick={e => operation ? setSecondNum(Number(String(secondNum) + el)) : setFirstNum(Number(String(firstNum) + el))} elementId={'blackButton'}></NumberButtons>)}
          <NumberButtons title={'+'} onClick={e => setOperation('+')} elementId={'orangeButton'}></NumberButtons>
        </span>
      </div>
      <div>
        <span>
          <NumberButtons title={'0'} onClick={e => operation ? setSecondNum(Number(secondNum + "0")) : setFirstNum(Number(firstNum + "0"))} elementId={'largeButton'}></NumberButtons>
          <NumberButtons title={'.'} onClick={e => operation ? setSecondNum(secondNum + ".") : setFirstNum(firstNum + ".")} elementId={'blackButton'}></NumberButtons>
          <NumberButtons title={'='} onClick={e => submit()} elementId={'orangeButton'}></NumberButtons>
        </span>
      </div>
    </>
  )
}

export default Calculator;

//tiv@ chpetqa kori, minchev 2-rd tiv@ chgrvi
//2-rd angam + chi ashxatum