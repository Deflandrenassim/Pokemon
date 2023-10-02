import React from 'react';
import './Pokemon.css';
import { useGetAllPokemons } from '../../hooks/useGetAllPokemons';
import { Picture } from '../../components/Picture/Picture';

export function Pokemon() {
  const pokemons = useGetAllPokemons();
  console.log(pokemons);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <div>
          <Picture src={pokemon.sprites.front_default} alt="pokemon_front" />
        </div>

      ))}
    </div>
  );
}
