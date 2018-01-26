import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route, Link } from 'react-router-dom';

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        {
          store.getState().ui.loading &&
          <div id="loading-pokeball-container">
            <div id="loading-pokeball"></div>
          </div>
        }
        <Route path="/" component={PokemonIndexContainer}/>
      </div>
    </HashRouter>
  </Provider>
);

export default Root;