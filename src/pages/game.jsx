import './game.css';
import { RegisterPlayers } from '../container/Game/RegisterPlayers';
import { RandomPokemon } from '../container/Random/RandomPokemon';
import { PointProvider } from '../context/Point';

function Game() {
    return (
        <PointProvider>
            <div className="game-contain">
                <RegisterPlayers />
                <RandomPokemon />
            </div>
        </PointProvider>
    )
}
export default Game;