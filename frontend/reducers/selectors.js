import lodash from 'lodash';

export const selectAllPokemon = (state) => {
  return (lodash.values(state.entities.pokemon));
};

export const selectItems = (state, id) => {
  return lodash.values(state.entities.items).filter((item) => item.pokemon_id === parseInt(id));
};

