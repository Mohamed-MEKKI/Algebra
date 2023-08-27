import React, { useState } from 'react';


const ScientificCalculator = () => {
  const [currentInput, setCurrentInput] = useState('');

  const handleButtonClick = buttonText => {
    switch (buttonText) {
      case 'C':
        setCurrentInput('');
        break;
      case '←':
        setCurrentInput(currentInput.slice(0, -1));
        break;
      case '=':
        try {
          setCurrentInput(eval(currentInput).toString());
        } catch (error) {
          setCurrentInput('Error');
        }
        break;
      case '√':
        setCurrentInput(Math.sqrt(currentInput).toString());
        break;
      case '^':
        setCurrentInput(currentInput + '**');
        break;
      case 'sin':
        setCurrentInput(Math.sin(currentInput).toString());
        break;
      case 'cos':
        setCurrentInput(Math.cos(currentInput).toString());
        break;
      case 'tan':
        setCurrentInput(Math.tan(currentInput).toString());
        break;
      case 'π':
        setCurrentInput(Math.PI);
        break;
      default:
        setCurrentInput(currentInput + buttonText);
        break;
    }
  };
  const calculatorStyles = {
    width: '300px',
    margin: '100px auto',
    border: '1px solid #ccc',
    padding: '10px',
  };

  const displayStyles = {
    width: '100%',
    marginBottom: '10px',
    padding: '5px',
  };

  const buttonStyles = {
    padding: '10px',
    fontSize: '16px',
  };

  const buttonsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '5px',
  };

  const buttons = [
    'C', '←', '^', '√',
    'sin', 'cos', 'tan','π',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
  ];

  return (
    <>
      <div id="calculator" style={calculatorStyles}>
        <div id="display" style={displayStyles}>{currentInput}</div>
        <div id="buttons" style={buttonsContainerStyles}>
          {buttons.map((buttonText, index) => (
            <button key={index} onClick={() => handleButtonClick(buttonText)} style={buttonStyles}>
              {buttonText}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScientificCalculator;
