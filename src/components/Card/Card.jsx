import React from 'react';
import './Card.css';

function Card({ children }) {
  return (
    <div className="card_container">
      {children}
    </div>
  );
}

export default Card;
