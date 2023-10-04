import React from 'react';
import './Pokemon.css';
import { useGetAllPokemons } from '../../hooks/useGetAllPokemons';
import { Picture } from '../../components/Picture/Picture';

export function Pokemon() {
  const pokemons = useGetAllPokemons();
  console.log(pokemons);

  return (
    <div className="container_pokemons">
      <div className="pokemons">
        {pokemons.map((pokemon) => (
          <div>
            <Picture src={pokemon.sprites.front_default} alt="pokemon_front" size="size" />
            <div> TESSST  </div>
          </div>

        ))}
      </div>
    </div>
  );
}
