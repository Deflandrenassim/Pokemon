import React from 'react';
import './Button.css';

function Button({
  children, functionToCall, appearance, active, value,
}) {
  return (
    <button className={`button ${appearance} ${active}`} onClick={functionToCall} type="button" value={value}>
      {children}
    </button>
  );
}

export default Button;
