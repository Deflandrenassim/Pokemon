import './RegleGame.css';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';

export function RegleGame({ modalActive, setModalActive }) {

    function handleCloseModal() {
        setModalActive(false)
    }

    return (
        <div>
            <Modal active={modalActive} PokeUi="pokeUi">
                <h1> Welcome Game PokeNass</h1>
                <div className="position-btn">
                    <Button onClick={() => handleCloseModal()}> X</Button>
                </div>
                <span>
                    cliquer à tour de role cela fera apparaitre un pokemon au
                    HASARD. Celui qui obtiendra le pokemon le plus fort (Force,Attaque) le plus
                    puissance obtiendra le point.
                </span>
                <span>
                    AMUSEZ VOUS BIEN QUE LE MEILLEUR DRESSEUR GAGNE
                </span>
            </Modal>
        </div>
    )
}