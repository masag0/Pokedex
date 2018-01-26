import React from 'react';
import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { selectItems } from '../../reducers/selectors';
import {requestOnePokemon} from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
  items: selectItems(state, ownProps.match.params.pokemonId),
  loading: state.ui.loading
});


const mapDispatchToProps = (dispatch) => ({
  requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);