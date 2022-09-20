import React, { useState } from 'react';
import './Modal.css';
import Button from '../../components/Button/Button';
import CardPicture from '../../components/Card/CardPicture';

function ModalPokemon({ children, modalPokemon }) {
  const [isBool, setIsBool] = useState(true);

  const HandleChangeModal = () => {
    setIsBool(!isBool);
  };
  return (
    <div className="modal">
      {isBool
        ? (
          <div className="modal_center">
            <Button
              functionToCall={HandleChangeModal}
              appearance="appareance"
            >
              en savoir plus
            </Button>
          </div>
        ) : (
          <div className="modal_pokemon">
            <div className="modal_row">
              <CardPicture
                img={modalPokemon.sprites.front_default}
                size="size"
              />
              <CardPicture
                size="size"
                img={modalPokemon.sprites.back_default}
              />
            </div>
            <div className="modal_column">
              <span className="info">
                Expérience :
                {' '}
                {modalPokemon.base_experience}
              </span>
              <span className="info">
                Types :
                {' '}
                {modalPokemon.types[0].type.name}
              </span>
              <span className="info ">
                <span>
                  Attack  :
                  {' '}
                  {modalPokemon.stats[1].base_stat}
                  {' '}
                </span>
              </span>
              <span className="info">
                Defense  :
                { ' ' }
                {modalPokemon.stats[2].base_stat}
              </span>

              <Button functionToCall={HandleChangeModal}> Retour </Button>
            </div>

          </div>
        )}
      {children}
    </div>
  );
}
export default ModalPokemon;
