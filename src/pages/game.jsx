import './game.css';
import { RegisterPlayers } from '../container/Game/RegisterPlayers';
import { RandomPokemon } from '../container/Random/RandomPokemon';

function Game() {
    return (
        <div>
            <RegisterPlayers />
            <RandomPokemon />
        </div>
    )
}
export default Game;