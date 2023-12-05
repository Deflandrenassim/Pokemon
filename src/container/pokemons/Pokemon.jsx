import React from 'react';
import './Pokemon.css';
import { useGetAllPokemons } from '../../hooks/useGetAllPokemons';
import { Picture } from '../../components/Picture/Picture';
import { VariantPokemon } from './VariantPokemon';
import { Card, CardInfo } from '../../components/Card/Card';

export function Pokemons() {
  const pokemons = useGetAllPokemons();

  return (
    <div className="container_pokemons">
      {pokemons.map((pokemon) => (
        <Card>
          <Picture
            src={pokemon.sprites.other.dream_world.front_default}
            alt="pokemon_front"
          />
          <CardInfo>
            <div>
              N°
              {pokemon.id}

            </div>
            <span>
              {pokemon.name}
            </span>
          </CardInfo>
          <VariantPokemon variants={pokemon} />

        </Card>
      ))}
    </div>
  );
}
