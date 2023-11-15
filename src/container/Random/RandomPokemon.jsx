import { useState } from 'react';
import { useGetAllPokemons } from '../../hooks/useGetAllPokemons'
import { Button } from '../../components/Button/Button';
import { CardRandomPokemon } from './CardRandomPokemon';
import './RandomPokemon.css';

export function RandomPokemon({ display }) {
    const allPokemons = useGetAllPokemons();
    const [randomOne, setRandomOne] = useState();
    const [randomTwo, setRandomTwo] = useState();

    function handleRandomOne() {
        const res = Math.floor(Math.random() * allPokemons.length - 1);
        setRandomOne(allPokemons[res]);
        console.log('random', randomOne);

    }

    function handleRandomTwo() {
        const res = Math.floor(Math.random() * allPokemons.length - 1);
        setRandomTwo(allPokemons[res])
        console.log('random two', randomTwo)
    }

    if (display === true) {
        return (
            <div className="randoms-pokemons">
                <div className="random-one">
                    <CardRandomPokemon random={randomOne} />
                    <Button onClick={() => handleRandomOne()}> random </Button>
                </div>
                <div className="random-two">
                    <CardRandomPokemon random={randomTwo} />
                    <Button onClick={() => handleRandomTwo()}> random </Button>
                </div>
            </div>
        )
    }
    return null;
}