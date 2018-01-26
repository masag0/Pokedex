import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';


import * as APIUtil from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';


document.addEventListener("DOMContentLoaded", () => {
  window.APIUtil = APIUtil;
  window.receiveAllPokemon = receiveAllPokemon;
  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;

  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});