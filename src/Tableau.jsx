import React from 'react';

function Tableau({ pokemons }) {
  return (
    <div>
      {pokemons.map((pokemon) => (
        <div>
          {' '}
          {pokemon.name}
          {' '}
        </div>
      ))}

    </div>
  );
}
export default Tableau;
