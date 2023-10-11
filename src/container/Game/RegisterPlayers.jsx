import { useState } from 'react';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';

export function RegisterPlayers() {
    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');
    const [displayName, setDisplayName] = useState(false);

    function handleValidRegister() {
        setDisplayName(!displayName)
    }

    return (
        <div>
            {displayName ? (
                <div>
                    <p>
                        Joeur 1 :
                        {playerOne}
                    </p>
                    <p>
                        Joeur 2 :
                        {playerTwo}
                    </p>

                </div>
            ) : null}

            <Input type="text" placeholder="Joueur 1" onChange={(e) => setPlayerOne(e.target.value)} />
            <Input type="text" placeholder="Joueur 2" onChange={(e) => setPlayerTwo(e.target.value)} />
            <Button onClick={() => handleValidRegister()}> Valider </Button>
        </div>
    )
}