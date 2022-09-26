import React, { useEffect, useState } from 'react';
import './PokemonPage.css';
import Axios from 'axios';
import Pokemon from '../container/pokemon/Pokemon';
import ModalPokemon from '../container/modal/ModalPokemon';
import Textfield from '../components/Texfield/Textfield';
import Button from '../components/Button/Button';

let TableauPokemons = [];

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [types, setTypes] = useState([]);
  const [pokemonFilter, setPokemonFilter] = useState(null);

  const callApi = async (name) => { // call api par name
    const { data: pokemon } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    // console.log(pokemon);
    return pokemon;
  };

  const getAllPokemonsInfo = async (results) => {
    Promise.all(results.map(({ name }) => callApi(name)))
      .then((values) => {
        TableauPokemons = [...values];
        setPokemons(TableauPokemons);
      });
  };
  const handleAllPokemons = () => {
    setPokemonFilter(null);
  };

  const SearchByPokemon = (e) => {
    setSearchPokemon(e.target.value);
  };

  const filterByType = (ev) => {
    const currentType = ev.currentTarget.value;
    const res = [];
    for (let i = 0; i < pokemons.length; i += 1) {
      for (let j = 0; j < pokemons[i].types.length; j += 1) {
        if (currentType === pokemons[i].types[j].type.name) {
          console.log(pokemons[i]);
          res.push(pokemons[i]);
        }
      }
    }
    setPokemonFilter(res);
  };

  useEffect(() => {
    Axios.get('https://pokeapi.co/api/v2/type/') // renvoi tous les types de pokemon
      .then((response) => {
        const allTypes = [...response.data.results.slice(0, 15)];
        setTypes(allTypes);
        console.log(allTypes);
      });

    Axios.get('https://pokeapi.co/api/v2/pokemon?limit=100') // renvoi 20 pokemon
      .then((response) => {
        getAllPokemonsInfo(response.data.results);
      });
  }, []);

  // useEffect(() => {
  //   filterByType();
  // }, [type]);

  return (
    <div className="App">
      <div className="input">
        <Textfield
          onChange={SearchByPokemon}
          value={searchPokemon}
        />
        <div>

          <div className="pokemon_type">
            {types.map((currentType) => (

              <button type="button" onClick={filterByType} value={currentType.name}>
                {currentType.name}
              </button>
            ))}
            <div className="button_all">

              <Button functionToCall={handleAllPokemons}> All Pokemons </Button>

            </div>
          </div>
        </div>
      </div>
      {pokemons
            && (
            <ul className="ul_card">
              {pokemonFilter != null
                ? pokemonFilter.map((pokemon) => (
                  <div>
                    <Pokemon
                      pokemon={pokemon}
                    />
                    <ModalPokemon
                      modalPokemon={pokemon}
                    />
                  </div>
                ))
                : pokemons.filter((searchName) => searchName.species.name.includes(searchPokemon))
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
