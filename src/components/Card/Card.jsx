import React from 'react';
import './Card.css';

export function Card({ children, onClick, variant }) {
  return (
    <div className={`card ${variant}`} onClick={onClick} >
      {children}
    </div >
  );
}
export function CardFlex({ children, variant }) {
  return (
    <div className={`card_flex ${variant}`}>
      {children}
    </div>
  )
}
export function CardInfo({ children }) {
  return (
    <div className="card_info">
      {children}
    </div>
  )
}