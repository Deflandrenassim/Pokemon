import React, {useState, useEffect} from 'react';
import './Pokemon.css';
import { useGetAllPokemons } from '../../hooks/useGetAllPokemons';
import { Picture } from '../../components/Picture/Picture';
import { Card, CardInfo } from '../../components/Card/Card';
import {  useNavigate } from 'react-router-dom';
import {Input} from '../../components/Input/Input'
import {Button} from '../../components/Button/Button';
import { NotFound } from '../../components/NotFound/NotFound';

export function Pokemons() {
  const pokemons = useGetAllPokemons();
  const [copyPokemons, useCopyPokemons] = useState();
  const [inputValue, setInputValue] = useState();
  const [boolBtnReset, setBoolBtnReset] = useState(false);

  useEffect(() => {
     function Get () {
      useCopyPokemons(pokemons)
    }

    Get();
  }, [pokemons])

  const navigate = useNavigate();
  
  function handleClick({ id }) {
    navigate(`/${id}`)
  }

  async function  HandleSearchPokemon  () {
   const pokemons =  await copyPokemons.filter((e) => e.name === inputValue);
  // const pokemonLow = pokemons.toLowerCase();
   console.log("test", pokemons);
    useCopyPokemons(pokemons);
    console.log("copy non found ", copyPokemons)
   }

   function HandleSearchResetPokemons () {
    setInputValue('')
    useCopyPokemons(pokemons)
    setBoolBtnReset(!boolBtnReset);
   } 
  

  if(copyPokemons)
  return (
  <>
      <div className="search-container">
        <Input type="search" placeholder="search pokemon..."
          onChange={(e) => setInputValue(e.target.value.toLowerCase())}
        />
        <Button onClick={HandleSearchPokemon} size="S"> Valider </Button>
        <Button onClick={HandleSearchResetPokemons} size="S"> X </Button>  
      </div>
  
    <div className="container-search-pokemon">
    </div>

     <div className="container_pokemons">

    {copyPokemons.length > 0 ? (
    copyPokemons.map((pokemon) => (
    <Card
      key={pokemon.id} // Assurez-vous d'ajouter une clé unique pour chaque élément dans une liste JSX
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
  ))
) : (
  <>
  <NotFound/>
  </>
)}

    </div>
  </> 
  );

}
