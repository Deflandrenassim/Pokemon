import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import CardContainer from '../../components/Card/CardContainer';
import CardPicture from '../../components/Card/CardPicture';
import CardName from '../../components/Card/CardName';

function Pokemon({ children, pokemon }) {
  useEffect(() => {
    console.log(pokemon);
  });

  return (
    <div className="modal_pokemon">
      <Card>
        <CardContainer>
          <CardPicture
            img={pokemon.sprites.front_default}
          />

        </CardContainer>
      </Card>
      <CardName>
        {pokemon.name}
      </CardName>
      {children}
    </div>
  );
}
export default Pokemon;
