import React from 'react';
import './Calculator.css';
import Button from './Button';

const Calculator = () => (
  <div className="calculator">
    <div className="display">0</div>
    <div className="row">
      <Button type="button">AC</Button>
      <Button type="button">+/-</Button>
      <Button type="button">%</Button>
      <Button type="button" className="operator">÷</Button>
    </div>
    <div className="row">
      <Button type="button">7</Button>
      <Button type="button">8</Button>
      <Button type="button">9</Button>
      <Button type="button" className="operator">*</Button>
    </div>
    <div className="row">
      <Button type="button">4</Button>
      <Button type="button">5</Button>
      <Button type="button">6</Button>
      <Button type="button" className="operator">-</Button>
    </div>
    <div className="row">
      <Button type="button">1</Button>
      <Button type="button">2</Button>
      <Button type="button">3</Button>
      <Button type="button" className="operator">+</Button>
    </div>
    <div className="row">
      <Button type="button" className="button-0">0</Button>
      <Button type="button">.</Button>
      <Button type="button" className="operator">=</Button>
    </div>
  </div>
);

export default Calculator;
