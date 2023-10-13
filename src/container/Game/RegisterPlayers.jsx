import { useState } from 'react';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { RegleGame } from './RegleGame';
import { NamePlayers } from './NamePlayers';

export function RegisterPlayers() {
    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');
    const [displayName, setDisplayName] = useState(false);
    const [modalActive, setModalActive] = useState(true);

    function handleValidRegister() {
        setDisplayName(!displayName)
    }

    return (
        <>
            <NamePlayers displayName={displayName} playerOne={playerOne} playerTwo={playerTwo} />
            <Input type="text" placeholder="Joueur 1" onChange={(e) => setPlayerOne(e.target.value)} />
            <Input type="text" placeholder="Joueur 2" onChange={(e) => setPlayerTwo(e.target.value)} />
            <Button onClick={() => handleValidRegister()}> Valider </Button>
            <RegleGame modalActive={modalActive} setModalActive={setModalActive} />
        </>
    )
}