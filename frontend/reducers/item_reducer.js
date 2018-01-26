import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import lodash from 'lodash';

const initialState = {};

const itemReducer = (oldState = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      newState = lodash.merge({}, oldState, action.items);
      // return action.items;
      return newState;
    default:
      return oldState;
  }
};

 export default itemReducer;