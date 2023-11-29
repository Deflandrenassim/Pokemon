import React, { useState, createContext, useMemo, useContext } from 'react';

const PointContext = createContext();

export function PointProvider({ children }) {
    const [point, setPoint] = useState({
        playerPointOne: 0,
        playerPointTwo: 0,
    });

    const value = useMemo(() => ({
        setPoint, point
    }), [point])

    return (
        <PointContext.Provider value={value}>
            {children}
        </PointContext.Provider>
    )
}

export function useCountPoint() {
    const { point, setPoint } = useContext(PointContext);

    function pointUserWin(randomeOne, randomeTwo) {
        console.log("point user1", randomeOne);
        console.log("point user2", randomeTwo)

        if (randomeOne > randomeTwo) {
            setPoint(prev => ({
                ...prev,
                playerPointOne: prev.playerPointOne + 1,
            }));

        } else if (randomeOne < randomeTwo) {
            setPoint(prev => ({
                ...prev,
                playerPointTwo: prev.playerPointTwo + 1,
            }));

        } else {
            return 'null';
        }
    }
    return { pointUserWin, point }
}