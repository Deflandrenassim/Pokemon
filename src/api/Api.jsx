import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Card from '../components/Card/Card';

function Api() {
  const [pokemons, setPokemons] = useState();

  const callApi = async (name) => { // call api par name
    const { data: pokemon } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.log(pokemon);
    return pokemon;
  };

  const getAllPokemonsInfo = async (results) => { // send 20 poke by name
    Promise.all(results.map(({ name }) => callApi(name)))
      .then((values) => {
        setPokemons(values);
      //  console.log(values);
      });
  };

  useEffect(() => {
    Axios.get('https://pokeapi.co/api/v2/pokemon?limit=20') // renvoi 20 pokemon
      .then((response) => {
        // console.log(response);
        getAllPokemonsInfo(response.data.results);
        // .then((test) => {
        //   // console.log(response.data.results)
        //   console.log(test);
        // });
      });
  }, []);
  return (
    <div className="App">
      {pokemons
            && (
              <ul>
                {pokemons.map((pokemon) => (
                  <Card key={pokemon.id}>
                    {pokemon.name}
                    {pokemon.base_experience}
                    {pokemon.sprites.back_shiny}
                  </Card>
                ))}
              </ul>
            )}

    </div>
  );
}

export default Api;
