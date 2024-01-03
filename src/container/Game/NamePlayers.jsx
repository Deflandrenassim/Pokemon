import './NamePlayers.css';
import { useCountPoint } from '../../context/Point';

export function NamePlayers({ displayName, playerOne, playerTwo }) {
    const { point } = useCountPoint();

    return (
        <>
            {displayName ? (
                <div className="container_players">
                    <span className="players">
                        {playerOne} : {point.playerPointOne}
                    </span>

                    VS

                    <span className="players">
                        {playerTwo} : {point.playerPointTwo}
                    </span>
                </div>
            ) :
                null
            }

        </>
    )
}