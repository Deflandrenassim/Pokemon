import React, { useEffect, useState } from 'react';
import './PokemonPage.css';
import Axios from 'axios';
import Pokemon from '../container/pokemon/Pokemon';
import ModalPokemon from '../container/modal/ModalPokemon';
import Textfield from '../components/Texfield/Textfield';
import PokemonType from '../container/pokemonType/PokemonType';

let TableauPokemons = [];

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [type, setType] = useState('');

  const callApi = async (name) => { // call api par name
    const { data: pokemon } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    // console.log(pokemon);
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
  const SearchByPokemon = (e) => {
    setSearchPokemon(e.target.value);
  };

  useEffect(() => {
    Axios.get('https://pokeapi.co/api/v2/type/') // renvoi tous les type de pokemon
      .then((response) => {
        setType(response.data.results);
      });

    Axios.get('https://pokeapi.co/api/v2/pokemon?limit=200') // renvoi 20 pokemon
      .then((response) => {
        getAllPokemonsInfo(response.data.results);
      });
  }, []);

  return (
    <div className="App">
      <div className="input">
        <Textfield
          onChange={SearchByPokemon}
          value={searchPokemon}
        />
        <div>
          <PokemonType TypePoke={type} />
        </div>
      </div>
      {pokemons
            && (
            <ul className="ul_card">
              {pokemons.filter((searchName) => searchName.species.name.includes(searchPokemon))
                .map((pokemon) => (
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
