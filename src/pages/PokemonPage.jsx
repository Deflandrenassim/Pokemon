import './PokemonPage.css';
import { useGetAllPokemons } from '../hooks/useGetAllPokemons';

function PokemonPage() {
  const pokemons = useGetAllPokemons();
  console.log(pokemons);
  return (
    <div className="pokemon_page">
      <div> test </div>
      <div> test </div>
      <div> test </div>
    </div>

  )
}
export default PokemonPage;
