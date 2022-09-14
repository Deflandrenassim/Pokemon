import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState();

  const callApi = async (name) => {
    const { data: pokemon } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(pokemon);
    return pokemon;
  };

  const getAllPokemonsInfo = async (results) => {
    Promise.all(results.map(({ name }) => callApi(name)));
    // console.log(results);
  };

  useEffect(() => {
    Axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20')
      .then((response) => {
        getAllPokemonsInfo(response.data.results).then((test) => {
          console.log(test);
          setPokemons(test);
        });
      });
  }, []);

  return (
    <div className="App">
      {pokemons
        && (
          <ul>
            {pokemons.map((pokemon) => (
              <li key={pokemon.id}>
                {pokemon.base_experience}
              </li>
            ))}
          </ul>
        )}

    </div>
  );
}
export default App;
