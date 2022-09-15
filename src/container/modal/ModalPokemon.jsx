import React from 'react';

function ModalPokemon({ children, xp, id }) {
  return (
    <div className="modal_pokemon">
      {children}
      <div>
        <div>
          #0
          {id}
        </div>
        <div>
          {xp}
        </div>
      </div>
    </div>
  );
}

export default ModalPokemon;
