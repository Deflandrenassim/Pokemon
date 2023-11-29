import './game.css';
import { RegisterPlayers } from '../container/Game/RegisterPlayers';
import { RandomPokemon } from '../container/Random/RandomPokemon';
import { PointProvider } from '../context/Point';
import { PlayerPoint } from '../container/Game/PlayerPoint';

function Game() {
    return (
        <PointProvider>
            <div className="game-contain">
                <PlayerPoint />
                <RegisterPlayers />
                <RandomPokemon />
            </div>
        </PointProvider>
    )
}
export default Game;