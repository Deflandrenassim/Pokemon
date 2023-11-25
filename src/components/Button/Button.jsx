import React from 'react';
import './Button.css';

export function Button({ children, onClick, className, disabled, type }) {

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>

  );
}