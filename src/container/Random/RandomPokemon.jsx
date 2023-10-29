import { useState } from 'react';
import { useGetAllPokemons } from '../../hooks/useGetAllPokemons'
import { Button } from '../../components/Button/Button';
import { CardRandomPokemon } from './CardRandomPokemon';

export function RandomPokemon() {
    const allPokemons = useGetAllPokemons();
    const [pokemon, setPokemon] = useState();

    function handleRandom() {
        const res = Math.floor(Math.random() * allPokemons.length - 1);
        setPokemon(allPokemons[res]);
        console.log('res', res);
        console.log('random', pokemon);
    }

    return (
        <div>
            <CardRandomPokemon props={pokemon} />
            <Button onClick={() => handleRandom()}> random </Button>
        </div>
    )
}