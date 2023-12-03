import './NamePlayers.css';
import { useCountPoint } from '../../context/Point';

export function NamePlayers({ displayName, playerOne, playerTwo }) {
    const { point } = useCountPoint();
    return (
        <div>
            {displayName ? (
                <div className="container_players">
                    <span className="players">
                        {playerOne} : {point.playerPointOne} point :
                    </span>
                    VS
                    <span className="players">
                        {playerTwo} : {point.playerPointTwo} point :
                    </span>
                </div>
            ) : null}

        </div>
    )
}