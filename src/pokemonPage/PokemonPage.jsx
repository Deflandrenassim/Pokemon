import React, { useEffect, useState } from 'react';
import './PokemonPage.css';
import Axios from 'axios';
import Pokemon from '../container/pokemon/Pokemon';

let TableauPokemons = [];

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [isHidden, setIsHidden] = useState(false);
  const HandleModal = () => {
    console.log(isHidden);
    setIsHidden(!isHidden);
  };

  const callApi = async (name) => { // call api par name
    const { data: pokemon } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(pokemon);
    return pokemon;
  };

  const getAllPokemonsInfo = async (results) => { // send 20 poke by name
    Promise.all(results.map(({ name }) => callApi(name)))
      .then((values) => {
        // setPokemons(values);
        TableauPokemons = [...values];
        console.log(TableauPokemons);
        setPokemons(TableauPokemons);
        console.log(`${values}ma values `);
      });
  };

  useEffect(() => {
    Axios.get('https://pokeapi.co/api/v2/pokemon?limit=30') // renvoi 20 pokemon
      .then((response) => {
        getAllPokemonsInfo(response.data.results);
      });
  }, []);

  return (
    <div className="App">
      {pokemons
            && (
            <ul className="ul_card">
              {pokemons.map((pokemon) => (
                <Pokemon
                  pokemon={pokemon}
                  // name={pokemon.name}
                  // picture={pokemon.sprites.front_default}
                  functionToCall={HandleModal}
                />
              ))}
            </ul>
            )}
    </div>
  );
}
export default PokemonPage;
