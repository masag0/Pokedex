import { RECEIVE_POKEMON_ERRORS, CLEAR_ERRORS } from '../actions/pokemon_actions';
import lodash from 'lodash';

const initialState = [];

const errorsReducer = (oldState = initialState, action) => {
  let newState;
  switch (action.type) {

    case RECEIVE_POKEMON_ERRORS:
      return action.errors;

    case CLEAR_ERRORS:
      return initialState;

    default:
      return oldState;

  }
};

export default errorsReducer;