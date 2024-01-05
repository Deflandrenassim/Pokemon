import { useState } from 'react';
import { RegleGame } from './RegleGame';
import { ValidePlayers } from './ValidePlayers';
import './RegisterPlayers.css';

export function RegisterPlayers() {

    const [modalActive, setModalActive] = useState(true);
    return (
        <>
            <ValidePlayers />
            <RegleGame modalActive={modalActive} setModalActive={setModalActive} />
        </>
    )
}