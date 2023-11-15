import './game.css';
import { RegisterPlayers } from '../container/Game/RegisterPlayers';
import { RandomPokemon } from '../container/Random/RandomPokemon';

function Game() {
    return (
        <div className="game-contain">
            <RegisterPlayers />
            <RandomPokemon />
        </div>
    )
}
export default Game;