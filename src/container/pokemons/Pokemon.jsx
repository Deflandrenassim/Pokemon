import React from 'react';
import './Pokemon.css';
import { useGetAllPokemons } from '../../hooks/useGetAllPokemons';
import { Picture } from '../../components/Picture/Picture';
import { Card, CardInfo } from '../../components/Card/Card';
import { useNavigate } from 'react-router-dom';

export function Pokemons() {
  const pokemons = useGetAllPokemons();
  const copyPokemons = pokemons;
  const navigate = useNavigate();

  function CompareType() {
    for (let i = 0; i < copyPokemons.length; i++) {
      if (copyPokemons[i].types) {
        for (let j = 0; j < copyPokemons[i].types.length; j++) {
        }
      }
    }
  }
  CompareType();

  function handleClick({ id }) {
    navigate(`/${id}`)
  }

  return (
    <div className="container_pokemons">
      {copyPokemons.map((pokemon) => (
        <>
          <Card
            margin="margin"
            onClick={() => handleClick(pokemon)}
            variant="allPok"
          >
            <Picture
              src={pokemon.sprites.other.dream_world.front_default}
              alt="pokemon_front"
            />
            <CardInfo>
              <span>
                {pokemon.name}
              </span>
            </CardInfo>
          </Card>
        </>
      ))}
    </div>
  );
}
