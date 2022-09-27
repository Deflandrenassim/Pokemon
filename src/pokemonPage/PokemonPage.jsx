import React, { useEffect, useState } from 'react';
import './PokemonPage.css';
import Axios from 'axios';
import ScrollTop from '../components/ScrollTop/ScrollTop';
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
  const [btnState, setBtnState] = useState(false);

  const callApi = async (name) => { // call api par name
    const { data: pokemon } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return pokemon;
  };

  const toggleActive = () => {
    setBtnState(!btnState);
    console.log(btnState);
  };

  const getAllPokemonsInfo = async (results) => {
    Promise.all(results.map(({ name }) => callApi(name)))
      .then((values) => {
        TableauPokemons = [...values];
        setPokemons(TableauPokemons);
      });
  };
  const handleAllPokemons = (event) => {
    event.currentTarget.classList.toggle('all');
    event.currentTarget.classList.remove('null');
    setPokemonFilter(null);
  };

  const SearchByPokemon = (e) => {
    setSearchPokemon(e.target.value);
    console.log(types);
  };

  const filterByType = (ev) => {
    const currentType = ev.currentTarget.value;
    const res = [];
    for (let i = 0; i < pokemons.length; i += 1) {
      for (let j = 0; j < pokemons[i].types.length; j += 1) {
        if (currentType === pokemons[i].types[j].type.name) {
          res.push(pokemons[i]);
        }
      }
    }
    setPokemonFilter(res);
    toggleActive();
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
          onChange={SearchByPokemon}
          value={searchPokemon}
        />
        <div>

          <div className="pokemon_type">
            {types.map((currentType, key) => (
              <Button
                key={key}
                active={btnState ? 'active' : 'null'}
                type="button"
                functionToCall={filterByType}
                value={currentType.name}
              >
                {currentType.name}
              </Button>

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
      <ScrollTop />
    </div>
  );
}
export default PokemonPage;
