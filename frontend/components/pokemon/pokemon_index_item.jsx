import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = (props) => {
  const {pokemon} = props;
  return (
    <li>
      <Link to={'/pokemon/' + pokemon.id}>
        <span>{pokemon.id}</span>
        <img src={pokemon.image_url} width='30' height='30'></img>
        <span>{pokemon.name}</span>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;

