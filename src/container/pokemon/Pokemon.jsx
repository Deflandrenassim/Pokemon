import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import CardContainer from '../../components/Card/CardContainer';
import CardPicture from '../../components/Card/CardPicture';
import CardName from '../../components/Card/CardName';

function Pokemon({
  children, pokemon,
}) {
  useEffect(() => {
    console.log(pokemon);
  });

  return (
    <div className="modal_pokemon">
      <Card>
        {pokemon.id}
        <CardContainer>
          <CardPicture
            img={pokemon.sprites.front_default}
          />
          <CardName>
            {pokemon.name}
          </CardName>
        </CardContainer>
      </Card>
      {children}
    </div>
  );
}
export default Pokemon;
