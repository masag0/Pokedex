import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route, Link, Switch } from 'react-router-dom';
import PokemonFormContainer from './pokemon_form_container';

class PokemonIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestAllPokemon();
  }

  render () {
    console.log(this.props);
    if (!this.props.pokemon) {
      return (
        <div id="loading-pokeball-container">
          <div id="loading-pokeball"></div>
        </div>
      );
    }
    return (
      <div className="index-container">
        <h2>Pokemon Index</h2>

        <Link to="/pokemon/create" ><button>Create Pokemon!</button></Link>

        <ul className="index">

          <div className="leftnav">
            {
              this.props.pokemon.map( (el, idx) => (
                <div key={idx}>
                  <PokemonIndexItem
                    key={idx}
                    pokemon={el}
                    />

                </div>
              ))
            }
          </div>
          <div className="detail-container">
            <Switch>
              <Route path="/pokemon/create" component={PokemonFormContainer} />
              <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer} />
            </Switch>
          </div>
        </ul>

      </div>
    );
  }
}

export default PokemonIndex;