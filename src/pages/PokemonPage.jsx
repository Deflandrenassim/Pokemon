import './PokemonPage.css';
import { Pokemon } from '../container/pokemons/Pokemon';

function PokemonPage() {

  return (
    <div className="pokemon_page">
      <div className="pokemon_page_background">
        <Pokemon />

      </div>
    </div>

  )
}
export default PokemonPage;
