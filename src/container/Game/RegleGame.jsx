import './RegleGame.css';
import { Modal } from '../../components/Modal/Modal';
import { IoIosAddCircleOutline } from "react-icons/io";
import { Button } from '../../components/Button/Button';

export function RegleGame({ modalActive, setModalActive }) {

    function handleCloseModal() {
        setModalActive(!modalActive)
    }
    if (modalActive === true)
        return (
            <>
                <Modal active={modalActive} PokeUi="pokeUi">
                    <div className='container-regle'>
                        <h1> Welcome Game PokeNass</h1>
                        <div className="position-btn">
                        </div>
                        <span className="reglement">
                            The Combat de Pokemon. A tour de role clique sur ton boutton cela fera apparaitre un pokemon celui qui obtiendra la plus
                            grande force de pokemon se verra attribuer le point. A toi de jouer...
                        </span>
                        <Button onClick={() => handleCloseModal()}> Accepter </Button>
                    </div>
                </Modal>
            </>
        )
    return (
        <div className="regle" onClick={() => handleCloseModal()}>
            <IoIosAddCircleOutline size={30} />
        </div>
    )

}