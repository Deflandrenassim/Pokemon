import React from 'react';
import './Button.css';

function Button({ children, functionToCall }) {
  return (
    <button className="button" onClick={functionToCall} type="button">
      {children}
    </button>
  );
}

export default Button;
