import { connect } from 'react-redux';
import React from 'react';
import PokemonForm from './pokemon_form';
import { withRouter } from 'react-router-dom';
import { createPokemon, clearErrors } from '../../actions/pokemon_actions';


const mapStateToProps = (state) => ({
  errors: state.ui.errors
});

const mapDispatchToProps = (dispatch) => ({
  createPokemon: (pokemon) => dispatch(createPokemon(pokemon)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonForm);