import React from 'react';
import { Routers } from './routers/Routers';
import './App.css';
import Head from './container/Head/Head';
import Home from './pages/home';

function App() {
  return (
    <>

      <Head />
      <Routers>
        <div className="App">
          <Home />
        </div>
      </Routers>
    </>

  );
}
export default App;
