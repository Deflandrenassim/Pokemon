import React from 'react';
import './Card.css';

export function Card({ children, onClick }) {
  return (
    <div onClick={onClick} className="card">
      {children}
    </div>
  );
}
export function CardInfo({ children }) {
  return (
    <div className="card_info">
      {children}
    </div>
  )
}