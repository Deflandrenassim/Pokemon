import React, { useState, createContext, useMemo } from 'react';

const pointContext = createContext();

export function PointProvider({ children }) {
    const [playerOne, setPlayerOne] = useState(0);
    const [playerTwo, setPlayerTWo] = useState(0);

    const value = useMemo(() => {
        playerOne, setPlayerOne, playerTwo, setPlayerTWo
    })
    return (
        <pointContext.Provider value={value}>
            {children}
        </pointContext.Provider>
    )
}