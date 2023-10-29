import { useGetAllPokemons } from '../../hooks/useGetAllPokemons'
import { Button } from '../../components/Button/Button';

export function RandomPokemon() {
    const allPokemons = useGetAllPokemons();

    function handleRandom() {
        console.log(allPokemons)
    }

    return (
        <div>
            <Button onClick={() => handleRandom()}> random </Button>
        </div>
    )
}