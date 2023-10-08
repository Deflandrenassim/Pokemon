import React from 'react';
import './Pokemon.css';
import { useGetAllPokemons } from '../../hooks/useGetAllPokemons';
import { Picture } from '../../components/Picture/Picture';
import { VariantPokemon } from './VariantPokemon';

export function Pokemons() {
  const pokemons = useGetAllPokemons();
  console.log(pokemons);

  return (
    <div className="container_pokemons">
      {pokemons.map((pokemon) => (
        <div className="pokemons">
          <Picture src={pokemon.sprites.front_default} alt="pokemon_front" size="size" />
          <div>
            {pokemon.name}
          </div>
          <div>
            {pokemon.id}
            <span>
              <VariantPokemon type={pokemon} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
