import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { NamePlayers } from './NamePlayers';
import { Input } from '../../components/Input/Input';
import { RandomPokemon } from '../Random/RandomPokemon';
import './ValidePlayers.css';

export function ValidePlayers() {
    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');
    const [displayName, setDisplayName] = useState(false);
    const [showInput, setShowInput] = useState(true);
    const [name, setName] = useState("");

    function handleValidRegister() {
        if (playerOne && playerTwo === "") {
            setName("Veuillez saisir les noms des joueurs")
        }
        else if (playerOne === "" || playerOne === "") {
            setName("Il manque la saisie d'un joueur");
        } else {
            setDisplayName(!displayName)
            setShowInput(!showInput);
        }
    }


    return (
        <>
            {showInput ? (
                <div className="valide_players">
                    <NamePlayers displayName={displayName} playerOne={playerOne} playerTwo={playerTwo} />
                    <div className="input_name_players">
                        <Input type="text" placeholder="Joueur 1" onChange={(e) => setPlayerOne(e.target.value)} />
                        <Input type="text" placeholder="Joueur 2" onChange={(e) => setPlayerTwo(e.target.value)} />
                        <div> {name}</div>
                    </div>
                    <Button onClick={() => handleValidRegister()}> Valider </Button>
                </div>
            ) : (
                <div className='container_valid'>
                    <span className='score'> SCORE : </span>
                    <div className="valide_players_check">
                        <NamePlayers displayName={displayName} playerOne={playerOne} playerTwo={playerTwo} />
                    </div>
                    <div className="container-random-pokemons">
                        <RandomPokemon display={displayName} />
                    </div>
                </div>
            )}
        </>
    )
}