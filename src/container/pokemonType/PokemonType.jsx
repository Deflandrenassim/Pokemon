import React from 'react';
import './PokemonType.css';
import Types from '../../components/Types/Types';

function PokemonType({ children, TypePoke }) {
  const allType = [...TypePoke.slice(0, 17)];

  return (
    <div className="pokemon_type">
      {allType.map((type) => <Types>{type.name.slice(0, 17)}</Types>)}
      {children }
    </div>
  );
}

export default PokemonType;
