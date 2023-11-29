import { useState } from 'react';
import { RegleGame } from './RegleGame';
import { ValidePlayers } from './ValidePlayers';

export function RegisterPlayers() {

    const [modalActive, setModalActive] = useState(true);
    return (
        <>
            <ValidePlayers />
            <RegleGame modalActive={modalActive} setModalActive={setModalActive} />
        </>
    )
}