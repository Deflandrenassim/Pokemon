import React, { useEffect, useState } from 'react';
import './PokemonPage.css';
import Axios from 'axios';
import ScrollTop from '../components/ScrollTop/ScrollTop';
import Pokemon from '../container/pokemon/Pokemon';
// import ModalPokemon from '../container/modal/ModalPokemon';
import Textfield from '../components/Texfield/Textfield';
import Button from '../components/Button/Button';

let TableauPokemons = [];

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [newPokemons, setNewPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [types, setTypes] = useState([]);
  const [btnState, setBtnState] = useState(false);

  const callApi = async (name) => { // call api par name
    const { data: pokemon } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return pokemon;
  };

  const getAllPokemonsInfo = async (results) => {
    Promise.all(results.map(({ name }) => callApi(name)))
      .then((values) => {
        TableauPokemons = [...values];
        setPokemons(TableauPokemons);
        setNewPokemons(TableauPokemons);
      });
  };
  const contains = (typesList, value) => {
    for (let i = 0; i < typesList.length; i += 1) {
      if (typesList[i].type.name === value) { return true; }
    }
    return false;
  };

  const handleFilterClick = (e) => {
    setBtnState(!btnState);
    if (e.target.value === 'reset') {
      setNewPokemons(pokemons);
    } else {
      const newTabPokemons = pokemons.filter((pokemon) => (
        contains(pokemon.types, e.target.value)
      ));
      setNewPokemons(newTabPokemons);
    }
  };

  const handleInputChange = (e) => {
    setSearchPokemon(e.target.value);
    const newTabPokemons = newPokemons.filter((newPokemon) => (
      newPokemon.name.slice(0, e.target.value.length) === e.target.value
    ));

    setNewPokemons(newTabPokemons);
  };

  useEffect(() => {
    Axios.get('https://pokeapi.co/api/v2/type/') // renvoi tous les types de pokemon
      .then((response) => {
        const allTypes = [...response.data.results.slice(0, 15)];
        setTypes(allTypes);
      });

    Axios.get('https://pokeapi.co/api/v2/pokemon?limit=100') // renvoi 20 pokemon
      .then((response) => {
        getAllPokemonsInfo(response.data.results);
      });
  }, []);

  return (
    <div className="App">
      <div className="input">
        <Textfield
          onChange={handleInputChange}
          value={searchPokemon}
        />
        <div>

          <div className="pokemon_type">
            {types.map((currentType, key) => (
              <Button
                key={key}
                active={btnState ? 'active' : 'null'}
                type="button"
                functionToCall={handleFilterClick}
                value={currentType.name}
              >
                {currentType.name}
              </Button>

            ))}

            <div className="button_all">
              <Button value="reset" functionToCall={handleFilterClick}> All Pokemons </Button>
            </div>
          </div>
        </div>
      </div>
      <ul className="ul_card">
        {
          newPokemons.map((pokemon) => (
            <div>
              <Pokemon
                pokemon={pokemon}
              />
            </div>
          ))
        }
      </ul>
      <ScrollTop />
    </div>
  );
}
export default PokemonPage;
