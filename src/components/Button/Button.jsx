import React from 'react';
import './Button.css';

export function Button({ children, onClick, variant, disabled, type }) {

  return (
    <button type={type} className={`button ${variant}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>

  );
}