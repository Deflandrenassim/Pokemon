import { useState, useEffect } from 'react';
import { useGetAllPokemons } from '../../hooks/useGetAllPokemons'
import { Button } from '../../components/Button/Button';
import { CardRandomPokemon } from './CardRandomPokemon';
import { useCountPoint } from '../../context/Point';
import { getBaseXp } from '../../utils/Calcul';
import './RandomPokemon.css';

export function RandomPokemon({ display }) {
    const allPokemons = useGetAllPokemons();
    const copyAllPokemons = allPokemons;
    const [randomOne, setRandomOne] = useState();
    const [randomTwo, setRandomTwo] = useState();
    const [btnClickOne, setBtnClickOne] = useState(false);
    const [btnClickTwo, setBtnClickTwo] = useState(false);
    const { pointUserWin } = useCountPoint();

    useEffect(() => {
        if (btnClickOne && btnClickTwo) {
            setBtnClickOne(false);
            setBtnClickTwo(false);
            getBaseXp(randomOne, randomTwo);
            console.log("random click ", randomOne, randomTwo)
            pointUserWin(randomOne.base_experience, randomTwo.base_experience)
        }
    }, [btnClickOne, btnClickTwo])

    function handleRandomOne() {
        const res = Math.floor(Math.random() * copyAllPokemons.length - 1);
        setRandomOne(copyAllPokemons[res]);
        setBtnClickOne(true);
    }

    function handleRandomTwo() {
        const res = Math.floor(Math.random() * copyAllPokemons.length - 1);
        setRandomTwo(copyAllPokemons[res])
        setBtnClickTwo(true);

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