import React, { useEffect, useState } from 'react';
import './Modal.css';
import Button from '../../components/Button/Button';

function ModalPokemon({ children, modalPokemon }) {
  const [isBool, setIsBool] = useState(true);

  const HandleChangeModal = () => {
    setIsBool(!isBool);
  };

  useEffect(() => {
    console.log(isBool);
  });
  return (
    <div className="modal">
      {isBool
        ? (
          <div>
            <Button functionToCall={HandleChangeModal}> en savoir plus</Button>
          </div>
        ) : (
          <div className="modal_pokemon">
            {' '}
            Xp :
            {modalPokemon.base_experience}
            <div>
              types :
              {modalPokemon.types[0].type.name}
            </div>
          </div>
        )}
      {children}
    </div>
  );
}
export default ModalPokemon;
