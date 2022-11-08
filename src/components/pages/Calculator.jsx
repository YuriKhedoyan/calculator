import React from "react";
import '../../Assets/style.css'
import NumberButtons from '../common/NumberButtons'
import { useState } from "react";
import Button from '@mui/material/Button';


const Calculator = () => {
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState('');
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  console.log(firstNum, operation, secondNum, result)

  const submit = e => {
    operation === '+' ? setResult(firstNum + secondNum) : operation === '-' ? setResult(firstNum - secondNum) : operation === '/' ? setResult(firstNum / secondNum) : operation === '%' ? setResult(firstNum * secondNum / 100) : setResult(firstNum * secondNum);
    setFirstNum(result);
    setSecondNum(0);
    setOperation('');
  }

  const clear = e => {
    setResult(0);
    setFirstNum(0);
    setSecondNum(0);
    setOperation('');
  }
  return (
    <>
      <div className="result">
        <p><b>{result !== 0 ? result : !operation ? firstNum : secondNum}</b></p>
      </div>
      <div>
        <span>
          <NumberButtons title={'C'} onClick={e => clear()} color={'#9f9f9f'}></NumberButtons>
          <NumberButtons title={'+-'} onClick={e => !operation && firstNum < 0 ? setFirstNum(Math.abs(firstNum)) : !operation && firstNum > 0 ? setFirstNum(-Math.abs(firstNum)) : secondNum > 0 ? setSecondNum(Math.abs(result)) : setSecondNum(-Math.abs(result))} color={'#9f9f9f'}></NumberButtons>
          <NumberButtons title={'%'} onClick={e => setOperation('%')} color={'#9f9f9f'}></NumberButtons>
          <NumberButtons title={'/'} onClick={e => setOperation('/')} color={'#f69906'}></NumberButtons>
        </span>
      </div>
      <div>
        <span>
          {[7, 8, 9].map(el => <NumberButtons title={el} onClick={e => operation ? setSecondNum(Number(secondNum + el)) : setFirstNum(Number(firstNum + el))} color={'#313131'}></NumberButtons>)}
          <NumberButtons title={'X'} onClick={e => setOperation('X')} color={'#f69906'}></NumberButtons>
        </span>
      </div>
      <div>
        <span>
          {[4, 5, 6].map(el => <NumberButtons title={el} onClick={e => operation ? setSecondNum(Number(secondNum + el)) : setFirstNum(Number(firstNum + el))} color={'#313131'}></NumberButtons>)}
          <NumberButtons title={'-'} onClick={e => setOperation('-')} color={'#f69906'}></NumberButtons>
        </span>
      </div>
      <div>
        <span>
          {[1, 2, 3].map(el => <NumberButtons title={el} onClick={e => operation ? setSecondNum(Number(secondNum + el)) : setFirstNum(Number(firstNum + el))} color={'#313131'}></NumberButtons>)}
          <NumberButtons title={'+'} onClick={e => setOperation('+')} color={'#f69906'}></NumberButtons>
        </span>
      </div>
      <div>
        <span>
          <NumberButtons title={'0'} onClick={e => operation ? setSecondNum(Number(secondNum + "0")) : setFirstNum(Number(firstNum + "0"))} color={'#313131'} width={'952px'}></NumberButtons>
          <NumberButtons title={'.'} onClick={e => operation ? setSecondNum(secondNum + ".") : setFirstNum(firstNum + ".")} color={'#313131'}></NumberButtons>
          <NumberButtons title={'='} onClick={e => submit()} color={'#f69906'}></NumberButtons>
        </span>
      </div>
    </>
  )
}

export default Calculator;