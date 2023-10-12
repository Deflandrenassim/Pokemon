import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';

export function RegleGame({ modalActive, setModalActive }) {

    function handleCloseModal() {
        setModalActive(false)
    }
    return (
        <Modal active={modalActive}>
            <h1> Welcome Game PokeNass</h1>
            <span>
                Le But du jeux est de cliquer à tous de role cela fera apparaitre un pokemon au
                HASARD. Celui qui obtiendra le pokemon le plus fort (Force,Attaque) le plus
                puissance obtiendra le point.
            </span>
            <span>
                AMUSEZ VOUS BIEN QUE LE MEILLEUR DRESSEUR GAGNE
            </span>
            <Button onClick={() => handleCloseModal()}> X</Button>
        </Modal>
    )
}