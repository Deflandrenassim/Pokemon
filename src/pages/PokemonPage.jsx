import './PokemonPage.css';
import { useGetAllPokemons } from '../hooks/useGetAllPokemons';

function PokemonPage() {
  const { pokemon } = useGetAllPokemons();
  console.log(pokemon);
  return (
    <div> test </div>
  )
}
export default PokemonPage;
