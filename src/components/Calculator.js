import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };
  return (
    <div className="calculator">
      <div className="display">{calculatorData.next || calculatorData.total || '0'}</div>
      <div className="row">
        <Button type="button" onClick={() => handleButtonClick('AC')}>AC</Button>
        <Button type="button" onClick={() => handleButtonClick('+/-')}>+/-</Button>
        <Button type="button" onClick={() => handleButtonClick('%')}>%</Button>
        <Button type="button" className="operator" onClick={() => handleButtonClick('÷')}>÷</Button>
      </div>
      <div className="row">
        <Button type="button" onClick={() => handleButtonClick('7')}>7</Button>
        <Button type="button" onClick={() => handleButtonClick('8')}>8</Button>
        <Button type="button" onClick={() => handleButtonClick('9')}>9</Button>
        <Button type="button" className="operator" onClick={() => handleButtonClick('x')}>x</Button>
      </div>
      <div className="row">
        <Button type="button" onClick={() => handleButtonClick('4')}>4</Button>
        <Button type="button" onClick={() => handleButtonClick('5')}>5</Button>
        <Button type="button" onClick={() => handleButtonClick('6')}>6</Button>
        <Button type="button" className="operator" onClick={() => handleButtonClick('-')}>-</Button>
      </div>
      <div className="row">
        <Button type="button" onClick={() => handleButtonClick('1')}>1</Button>
        <Button type="button" onClick={() => handleButtonClick('2')}>2</Button>
        <Button type="button" onClick={() => handleButtonClick('3')}>3</Button>
        <Button type="button" className="operator" onClick={() => handleButtonClick('+')}>+</Button>
      </div>
      <div className="row">
        <Button type="button" className="button-0" onClick={() => handleButtonClick('0')}>0</Button>
        <Button type="button" onClick={() => handleButtonClick('.')}>.</Button>
        <Button type="button" className="operator" onClick={() => handleButtonClick('=')}>=</Button>
      </div>
    </div>
  );
};

export default Calculator;
