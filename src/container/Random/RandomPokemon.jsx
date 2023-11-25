import { useState, useEffect } from 'react';
import { useGetAllPokemons } from '../../hooks/useGetAllPokemons'
import { Button } from '../../components/Button/Button';
import { CardRandomPokemon } from './CardRandomPokemon';
import { getBaseXp, verifyClick } from '../../utils/Calcul';
import './RandomPokemon.css';

export function RandomPokemon({ display }) {
    const allPokemons = useGetAllPokemons();
    const [randomOne, setRandomOne] = useState();
    const [randomTwo, setRandomTwo] = useState();
    const [btnClickOne, setBtnClickOne] = useState(false);
    const [btnClickTwo, setBtnClickTwo] = useState(false);


    useEffect(() => {
        if (btnClickOne && btnClickTwo) {
            setBtnClickOne(false);
            setBtnClickTwo(false);
            console.log(randomOne, randomTwo);
            getBaseXp(randomOne, randomTwo);

        }
    }, [btnClickOne, btnClickTwo])

    function handleRandomOne() {
        const res = Math.floor(Math.random() * allPokemons.length - 1);
        setRandomOne(allPokemons[res]);
        setBtnClickOne(true);
        console.log('btn click One', btnClickOne);
    }

    function handleRandomTwo() {
        const res = Math.floor(Math.random() * allPokemons.length - 1);
        setRandomTwo(allPokemons[res])
        setBtnClickTwo(true);
        console.log('btn click TWo', btnClickTwo);
    }

    if (display === true) {
        return (
            <div className="randoms-pokemons">
                <div className="random-one">
                    <CardRandomPokemon random={randomOne} />
                    <Button onClick={() => handleRandomOne()} > random </Button>
                </div>
                <div className="random-two">
                    <CardRandomPokemon random={randomTwo} />
                    <Button onClick={() => handleRandomTwo()} > random </Button>
                </div>
            </div>
        )
    }
    return null;
}