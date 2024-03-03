import React from 'react'
import './NotFound.css';
import Pokeball from '../../../src/assets/pokeball.jpeg';
import { Picture } from '../Picture/Picture'

export const NotFound = () => {
  return (
    <div className="not-found">
        <span> NotFound </span>
        <Picture spinner="spinner" src={Pokeball}  alt="pokeball" />
    </div>
  )
}
