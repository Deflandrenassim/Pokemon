import React from 'react';
import './Textfield.css';

function Textfield({ onChange, value }) {
  return (
    <input
      className="textfield"
      type="text"
      placeholder="Recherche un pokemon"
      onChange={onChange}
      value={value}
    />

  );
}

export default Textfield;
