import './NamePlayers.css';

export function NamePlayers({ displayName, playerOne, playerTwo }) {
    return (
        <div>
            {displayName ? (
                <div className="container_players">
                    <span className="players">
                        {playerOne}
                    </span>
                    VS
                    <span className="players">
                        {playerTwo}
                    </span>
                </div>
            ) : null}

        </div>
    )
}