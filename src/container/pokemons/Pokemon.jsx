import React, {useState, useEffect} from 'react';
import './Pokemon.css';
import { useGetAllPokemons } from '../../hooks/useGetAllPokemons';
import { Picture } from '../../components/Picture/Picture';
import { Card, CardInfo } from '../../components/Card/Card';
import {  useNavigate } from 'react-router-dom';
import { InputFilter } from './InputFilter';
import {Button} from '../../components/Button/Button';

export function Pokemons() {
  const pokemons = useGetAllPokemons();
  const [copyPokemons, useCopyPokemons] = useState();
  const [inputValue, setInputValue] = useState();
  console.log('copy', copyPokemons);

  useEffect(() => {
   async  function Get () {
          useCopyPokemons(pokemons)
    }

    Get();
  }, [pokemons])

  const navigate = useNavigate();
  
  function handleClick({ id }) {
    navigate(`/${id}`)
  }

  function HandleSearchPokemon () {
   const pokemons =  copyPokemons.filter((e) => e.name == inputValue)
    useCopyPokemons(pokemons);
   }

   function HandleSearchResetPokemons () {
    useCopyPokemons(pokemons)
   } 
  

  if(copyPokemons)
  return (
    <>
    <div className="container-search-pokemon">
      <InputFilter type="search" onChange={(e) => setInputValue(e.target.value)}/>
      <Button onClick={HandleSearchPokemon}> Valider </Button>
      <Button onClick={HandleSearchResetPokemons}> X </Button>
    </div>

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
    </> 
  );
   return <div>Loading.....</div>
}
