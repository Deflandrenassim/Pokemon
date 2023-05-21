import React from 'react';
import Head from './container/Head/Head';
import PokemonPage from './pokemonPage/PokemonPage';
import './App.css';

function App() {
  return (
    <>
      <Head />
      <div className="App">
        <PokemonPage />
      </div>
    </>
  );
}
export default App;
