import React, { useState } from 'react';


const ScientificCalculator = () => {
  const [currentInput, setCurrentInput] = useState('');

  const handleButtonClick = buttonText => {
    // Implement your button click logic here
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
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'sin', 'cos', 'tan'
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
