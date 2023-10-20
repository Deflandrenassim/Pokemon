/* eslint-disable react/button-has-type */
import React from 'react';
import './Button.css';

export function Button({
  children, onClick, className,
}) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}