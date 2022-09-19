import React, { useEffect, useState } from 'react';
import './PokemonPage.css';
import Axios from 'axios';
import Pokemon from '../container/pokemon/Pokemon';
import ModalPokemon from '../container/modal/ModalPokemon';

let TableauPokemons = [];

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  // const [isBool] = useState(false);

  const callApi = async (name) => { // call api par name
    const { data: pokemon } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(pokemon);
    return pokemon;
  };

  const getAllPokemonsInfo = async (results) => { // send 20 poke by name
    Promise.all(results.map(({ name }) => callApi(name)))
      .then((values) => {
        TableauPokemons = [...values];
        // console.log(TableauPokemons);
        setPokemons(TableauPokemons);
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
                <div>
                  <Pokemon
                    pokemon={pokemon}
                  />
                  <ModalPokemon
                    modalPokemon={pokemon}
                  />
                </div>
              ))}
            </ul>
            )}
    </div>
  );
}
export default PokemonPage;
