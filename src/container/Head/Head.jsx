import { TbPokeball } from 'react-icons/tb';
import './Head.css';
import Header from '../../components/header/Header';

function Head() {
    return (
        <Header>
            <div className="header_align">
                <div className="header_title">
                    <span> NassPoké</span>
                </div>
                <div className="container-links">
                    <div>
                        Accueil
                    </div>
                    <div>
                        Pokemons
                    </div>
                    <div>
                        Game
                    </div>
                </div>

                <div className="header_logo">
                    <span className="header_poke">
                        <TbPokeball />
                    </span>
                </div>
            </div>
        </Header>
    );
}

export default Head;