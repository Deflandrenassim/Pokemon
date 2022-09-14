import React, { useEffect, useState } from 'react';
import './Api.css';
import Axios from 'axios';
import Card from '../components/Card/Card';
import CardPicture from '../components/Card/CardPicture';
import CardName from '../components/Card/CardName';

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
                <Card key={pokemon.id}>
                  <CardName>
                    {pokemon.name}
                  </CardName>
                  <CardPicture img={pokemon.sprites.back_default} />
                  <div className="div">
                    Xp :
                    { ' '}
                    {pokemon.base_experience}
                  </div>
                </Card>
              ))}
            </ul>

            )}

    </div>
  );
}

export default Api;
