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

    function handleValidRegister() {
        setDisplayName(!displayName)
        setShowInput(!showInput);
        console.log(showInput);
    }

    return (
        <div>
            {showInput ? (

                <div className="valide_players">
                    <NamePlayers displayName={displayName} playerOne={playerOne} playerTwo={playerTwo} />
                    <Input type="text" placeholder="Joueur 1" onChange={(e) => setPlayerOne(e.target.value)} />
                    <Input type="text" placeholder="Joueur 2" onChange={(e) => setPlayerTwo(e.target.value)} />
                    <Button onClick={() => handleValidRegister()}> Valider </Button>

                </div>
            ) : (
                <div className="valide_players_check">
                    <NamePlayers displayName={displayName} playerOne={playerOne} playerTwo={playerTwo} />
                    <RandomPokemon display={displayName} />
                </div>
            )}
        </div>
    )
}