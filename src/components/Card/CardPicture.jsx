import React from 'react';
import './Card.css';

function CardPicture({ img, size, color }) {
  return (
    <img className={`card_picture ${size} ${color}`} src={img} alt="" />
  );
}

export default CardPicture;
