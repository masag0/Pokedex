import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';
export const RECEIVE_NEW_POKEMON = 'RECEIVE_NEW_POKEMON';
export const RECEIVE_POKEMON_ERRORS = 'RECEIVE_POKEMON_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const START_LOADING_ALL_POKEMON = 'START_LOADING_ALL_POKEMON';
export const START_LOADING_ONE_POKEMON = 'START_LOADING_ONE_POKEMON';

export const receiveAllPokemon = (pokemon) => ({ //action builder
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveOnePokemon = (pokemon) => ({ //action builder
  type: RECEIVE_ONE_POKEMON,
  pokemon: pokemon.pokemon,
  items: pokemon.items
});

export const receiveNewPokemon = (pokemon) => ({ //action builder
  type: RECEIVE_NEW_POKEMON,
  pokemon: pokemon.pokemon
});

export const receivePokemonErrors = (errors) => ({ //action builder
  type: RECEIVE_POKEMON_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const startLoadingAllPokemon = () => ({
  type: START_LOADING_ALL_POKEMON,

});
export const startLoadingOnePokemon = () => ({
  type: START_LOADING_ONE_POKEMON,

});



export const requestAllPokemon = () => (dispatch) => {
  dispatch(startLoadingAllPokemon());
  return APIUtil.fetchAllPokemon().then(
    response => {
      dispatch(receiveAllPokemon(response));
      return response;
    }
  );
};

export const requestOnePokemon = (id) => (dispatch) => {
  dispatch(startLoadingOnePokemon());
  return APIUtil.fetchOnePokemon(id).then(
    response => {
      dispatch(receiveOnePokemon(response));
      return response;
    }
  );
};

export const createPokemon = (pokemon) => (dispatch) => {
  return APIUtil.createPokemon(pokemon).then(
    response => {
      dispatch(receiveNewPokemon(response));
      // console.log('response');
      // console.log(response);
      return response;
    }
    , errors => {
      dispatch(receivePokemonErrors(errors.responseJSON));
    }
  );
};













