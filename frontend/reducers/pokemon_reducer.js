import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';
import lodash from 'lodash';

const initialState = {};

const pokemonReducer = (oldState = initialState, action) => {
  let newState;
  switch (action.type) {

    case RECEIVE_ALL_POKEMON:
    newState = lodash.merge({}, oldState, action.pokemon);
      return newState;

    case RECEIVE_ONE_POKEMON:
      newState = lodash.merge({}, oldState);
      newState[action.pokemon.id] = action.pokemon;
      return newState;

    case RECEIVE_NEW_POKEMON:
      newState = lodash.merge({}, oldState);
      // let pokemon = action.pokemon;
      // lodash.merge(newState, pokemon);
      newState[action.pokemon.id] = action.pokemon;
      return newState;

    default:
      return oldState;

  }
};

export default pokemonReducer;