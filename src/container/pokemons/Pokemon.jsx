import React from 'react';
import './Pokemon.css';
import { useGetAllPokemons } from '../../hooks/useGetAllPokemons';
import { Picture } from '../../components/Picture/Picture';
import { VariantPokemon } from './VariantPokemon';
import { Card } from '../../components/Card/Card';

export function Pokemons() {
  const pokemons = useGetAllPokemons();
  console.log(pokemons);

  return (
    <div className="container_pokemons">
      {pokemons.map((pokemon) => (
        <Card>
          <Picture src={pokemon.sprites.front_default} alt="pokemon_front" size="size" />
          <div>
            N°
            {pokemon.id}
            <span>
              <div>
                {pokemon.name}
              </div>
              <VariantPokemon variants={pokemon} />
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}
