import React from 'react';
import './Button.css';

function Button({ children, functionToCall, appearance }) {
  return (
    <button className={`button ${appearance}`} onClick={functionToCall} type="button">
      {children}
    </button>
  );
}

export default Button;
