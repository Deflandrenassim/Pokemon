import './game.css';
import { RegisterPlayers } from '../container/Game/RegisterPlayers';
import { RandomPokemon } from '../container/Random/RandomPokemon';
import { PointProvider } from '../context/Point';
import { NavBarLinks } from '../components/Navbar/Navbar';

function Game() {
    return (
        <PointProvider>
            <RegisterPlayers />
            <RandomPokemon />
            <NavBarLinks page="game" />
        </PointProvider>
    )
}
export default Game;