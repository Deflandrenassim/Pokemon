import './App.css';
import React from 'react';
import Head from './container/Head/Head';
import Home from './pages/home';

function App() {
  return (
    <>
      <Head />
      <div className="App">
        <Home />
      </div>
    </>
  );
}
export default App;
