import { useState, useEffect } from 'react';
import { useGetAllPokemons } from '../../hooks/useGetAllPokemons'
import { Button } from '../../components/Button/Button';
import { CardRandomPokemon } from './CardRandomPokemon';
import { useCountPoint } from '../../context/Point';
import { getBaseXp } from '../../utils/Calcul';
import './RandomPokemon.css';

export function RandomPokemon({ display }) {
    const allPokemons = useGetAllPokemons();
    const [newAllPokemons, setNewAllPokemons] = useState(allPokemons);
    console.log("new", newAllPokemons)
    const [randomOne, setRandomOne] = useState();
    const [randomTwo, setRandomTwo] = useState();
    const [btnClickOne, setBtnClickOne] = useState(false);
    const [btnClickTwo, setBtnClickTwo] = useState(false);
    const { pointUserWin, point } = useCountPoint();

    useEffect(() => {
        setNewAllPokemons(allPokemons);
    }, [allPokemons]);

    useEffect(() => {
        if (btnClickOne && btnClickTwo) {
            setBtnClickOne(false);
            setBtnClickTwo(false);
            getBaseXp(randomOne, randomTwo);
            pointUserWin(randomOne.base_experience, randomTwo.base_experience)
            console.log("point 1 ", point.playerPointOne);
            console.log("Point 2", point.playerPointTwo);
        }
    }, [btnClickOne, btnClickTwo])

    function handleRandomOne() {
        const res = Math.floor(Math.random() * newAllPokemons.length - 1);
        setRandomOne(newAllPokemons[res]);
        setBtnClickOne(true);

    }

    function handleRandomTwo() {
        const res = Math.floor(Math.random() * newAllPokemons.length - 1);
        setRandomTwo(newAllPokemons[res])
        console.log(randomTwo)

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