import React from 'react';
import './Types.css';

function types({ children, onClick }) {
  return (
    <button
      type="button"
      className="type"
      onClick={onClick}
    >
      {children}
    </button>

  );
}

export default types;
