import React from 'react';
import './Pokemon.css';
import { useGetAllPokemons } from '../../hooks/useGetAllPokemons';
import { Picture } from '../../components/Picture/Picture';
import { VariantPokemon } from './VariantPokemon';
import { Card, CardInfo } from '../../components/Card/Card';

export function Pokemons() {
  const pokemons = useGetAllPokemons();
  console.log(pokemons);

  return (
    <div className="container_pokemons">
      {pokemons.map((pokemon) => (
        <Card>
          <Picture
            src={pokemon.sprites.other.dream_world.front_default}
            alt="pokemon_front"
            size="size"
          />
          <CardInfo>
            <div>
              N°
              {pokemon.id}
            </div>
            <span>
              {pokemon.name}
            </span>
            <div className="variant">

              <VariantPokemon variants={pokemon} />
            </div>

          </CardInfo>

        </Card>
      ))}
    </div>
  );
}
