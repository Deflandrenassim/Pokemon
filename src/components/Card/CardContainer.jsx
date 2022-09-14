import React from 'react';
import './Card.css';

function CardContainer({ children }) {
  return (
    <div className="card_container">{children }</div>
  );
}

export default CardContainer;
