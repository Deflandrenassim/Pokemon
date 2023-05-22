import { TbPokeball } from 'react-icons/tb';
import './Head.css';
import Header from '../../components/header/Header';

function Head() {
    return (
        <Header>
            <div className="header_center">
                <div className="header_acc">
                    Accueil
                </div>
                <div className="header_all">
                    All Pokemon
                </div>
            </div>

            <div className="header_logo">
                <TbPokeball className="poke" />
            </div>
        </Header>
    );
}

export default Head;