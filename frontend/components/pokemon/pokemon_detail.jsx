import React from 'react';
import { Link } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';
import { Route } from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.loading) {
      return (
        <div id="loading-pokeball-container">
          <div id="loading-pokeball"></div>
        </div>
      );
    }
    if (newProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestOnePokemon(newProps.match.params.pokemonId);
    }
  }

  componentWillMount() {
    if (this.props.loading) {
      return (
        <div id="loading-pokeball-container">
          <div id="loading-pokeball"></div>
        </div>
      );
    }
  }

  // return <h1>Loading</h1>;
  render () {
    if (!this.props.pokemon || this.props.loading) {
      return (
        <div id="loading-pokeball-container">
          <div id="loading-pokeball"></div>
        </div>
      );
    }
    const {pokemon, items} = this.props;

    const moves = pokemon.moves || [];
    return (
      <div className="pokemon-detail">
        <div className="img-frame">
          <img src={pokemon.image_url} width="80%" height="80%"></img>
        </div>
        <h2>{pokemon.name}</h2>
        <ul>
          <li>Type: {pokemon.poke_type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Moves:
            <ul>
              {
                moves.map((move, idx) => {
                  return (
                    <li key={idx}>{move}</li>
                  );
                })
              }
            </ul>
          </li>
        </ul>


          <h4>Items</h4>
          <ul className="item-list">
            {
              items.map((item, idx) => (
                <li key={idx}>
                  <span>{item.name}</span>
                  <br />
                  <Link to={`/pokemon/${pokemon.id}/items/${item.id}`}>
                    <img src={item.image_url} width="80%" height="80%"></img>
                  </Link>
                </li>

              ))
            }
          </ul>

          <Route
            path={`/pokemon/${pokemon.id}/items/:itemId`} component={ItemDetailContainer} />


      </div>
    );

  }
}

export default PokemonDetail;