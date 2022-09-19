import React from 'react';
import './Pokemon.css';
import Card from '../../components/Card/Card';
import CardContainer from '../../components/Card/CardContainer';
import CardPicture from '../../components/Card/CardPicture';
import CardName from '../../components/Card/CardName';

function Pokemon({ children, pokemon }) {
  return (
    <div className="pokemon">
      <Card>
        <CardContainer>
          <CardPicture
            img={pokemon.sprites.front_default}
          />
          #
          {pokemon.id}
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
