import React from 'react';
import './Card.css';

function CardName({ children }) {
  return (
    <span className="card_name">{children}</span>
  );
}

export default CardName;
