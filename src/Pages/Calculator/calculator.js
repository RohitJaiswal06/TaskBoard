import React, { useState } from 'react';
import * as math from 'mathjs';
import './style.css'
function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');
  const [calculations, setCalculations] = useState([]);


  const handleNumberClick = (number) => {
    setCurrentValue(currentValue + number);
    setDisplayValue(displayValue === '0' ? number : displayValue + number);
  };
  

  const handleOperatorClick = (op) => {
    try{
      if (operator === '') {
        setOperator(op);
        setCurrentValue('');
        setDisplayValue(displayValue + op);
      } else {
        const result = math.evaluate(displayValue);
        setOperator(op);
        setCurrentValue('');
        setDisplayValue(result + op);
      }
    }catch (error) {
      console.error(error);
      setDisplayValue('Error');
    }
  };


  const handleClearClick = () => {
    setDisplayValue('0');
    setCurrentValue('');
    setOperator('');
  };

  const handleEqualsClick = () => {
    try{
      const result = math.evaluate(displayValue);
      setDisplayValue(result.toString());
      setCurrentValue(result.toString());
      setOperator('');
      setCalculations([`${displayValue} = ${result}`, ...calculations.slice(0, 49)]);
    }catch (error) {
      console.error(error);
      setDisplayValue('Error');
    }
  };

  return (
    <div className="calculator">
      <h1 className='text'>Calculator!</h1>
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleNumberClick('7')}>7</button>
          <button onClick={() => handleNumberClick('8')}>8</button>
          <button onClick={() => handleNumberClick('9')}>9</button>
          <button className='operator' onClick={() => handleOperatorClick('/')}>/</button>
        </div>
        <div className="row button">
          <button onClick={() => handleNumberClick('4')}>4</button>
          <button onClick={() => handleNumberClick('5')}>5</button>
          <button onClick={() => handleNumberClick('6')}>6</button>
          <button className='operator' onClick={() => handleOperatorClick('*')}>*</button>
        </div>
        <div className="row button">
          <button onClick={() => handleNumberClick('1')}>1</button>
          <button onClick={() => handleNumberClick('2')}>2</button>
          <button onClick={() => handleNumberClick('3')}>3</button>
          <button className='operator' onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className="row button">
          <button className='operator' onClick={handleClearClick}>C</button>
          <button onClick={() => handleNumberClick('0')}>0</button>
          <button className='operator' onClick={handleEqualsClick}>=</button>
          <button className='operator' onClick={() => handleOperatorClick('+')}>+</button>
        </div>
        <div>
          <ul>
            {calculations.map((calculation, index) => (
              <li key={index}>{calculation}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
