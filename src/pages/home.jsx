import './home.css';
import { Pokemons } from '../container/pokemons/Pokemon';

function Home() {

  return (
    <div className="pokemon_page">
      <div className="pokemon_page_background">
        <Pokemons />

      </div>
    </div>

  )
}
export default Home;
