import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON, RECEIVE_NEW_POKEMON, START_LOADING_ALL_POKEMON, START_LOADING_ONE_POKEMON } from '../actions/pokemon_actions';
import lodash from 'lodash';

const initialState = false;

const loadingReducer = (oldState = initialState, action) => {
  let newState;
  switch (action.type) {

    case START_LOADING_ALL_POKEMON:
      return true;

    case START_LOADING_ONE_POKEMON:
      return true;

    case RECEIVE_ALL_POKEMON:
      return false;

    case RECEIVE_ONE_POKEMON:
      return false;

    default:
      return oldState;

  }
};

export default loadingReducer;