import React from 'react';
import './Button.css';

export function Button({ children, onClick, variant, disabled, type, size }) {

  return (
    <button type={type} className={`button ${variant} ${size}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>

  );
}