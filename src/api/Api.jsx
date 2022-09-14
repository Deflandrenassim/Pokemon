import React, { useEffect, useState } from 'react';
import './Api.css';
import Axios from 'axios';
import CardContainer from '../components/Card/CardContainer';
import Card from '../components/Card/Card';
import CardPicture from '../components/Card/CardPicture';
import CardName from '../components/Card/CardName';
import Button from '../components/Button/Button';

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
                <Card>
                  <li className="li_card" key={pokemon.id}>
                    <CardContainer>
                      <CardPicture img={pokemon.sprites.front_default} />
                      <CardName>
                        {pokemon.name}
                      </CardName>
                      <div className="div">
                        Experience  :
                        { ' '}
                        {pokemon.base_experience}
                      </div>
                      <Button> Plus de détail </Button>
                    </CardContainer>
                  </li>
                </Card>
              ))}
            </ul>

            )}

    </div>
  );
}

export default Api;
