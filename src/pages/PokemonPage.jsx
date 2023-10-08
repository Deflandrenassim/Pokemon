import './PokemonPage.css';
import { Pokemons } from '../container/pokemons/Pokemon';

function PokemonPage() {

  return (
    <div className="pokemon_page">
      <div className="pokemon_page_background">
        <Pokemons />

      </div>
    </div>

  )
}
export default PokemonPage;
