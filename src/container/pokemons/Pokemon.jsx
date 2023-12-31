import React from 'react';
import { useState } from 'react';
import './Pokemon.css';
import { useGetAllPokemons } from '../../hooks/useGetAllPokemons';
import { Picture } from '../../components/Picture/Picture';
import { VariantPokemon } from './VariantPokemon';
import { Card, CardInfo } from '../../components/Card/Card';
import { useNavigate } from 'react-router-dom';
// import { ButtonsTypes } from '../FilterBtn/ButtonsTypes';

export function Pokemons() {
  const pokemons = useGetAllPokemons();
  const allPokemons = pokemons;
  const navigate = useNavigate();
  const [type, setType] = useState();

  function CompareType() {
    for (let i = 0; i < allPokemons.length; i++) {
      if (allPokemons[i].types) {
        for (let j = 0; j < allPokemons[i].types.length; j++) {
        }
      }
    }
  }
  CompareType();

  function handleClick({ id }) {
    navigate(`/${id}`)
    console.log(id)
  }

  return (
    <div className="container_pokemons">
      {allPokemons.map((pokemon) => (
        <>
          <Card
            onClick={() => handleClick(pokemon)}
            variant="allPok"
          >
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
        </>
      ))}
    </div>
  );
}
