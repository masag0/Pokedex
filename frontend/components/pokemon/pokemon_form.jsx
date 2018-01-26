import React from 'react';
import lodash from 'lodash';
import { withRouter } from 'react-router-dom';

const initialState = {
  name: "", attack: "", defense: "",
  image_url: "", poke_type: "bug",
  moves: ["tackle", "splash"]};

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = lodash.merge(initialState, props);


    this.POKEMON_TYPES = ["bug", "dragon", "electric", "fighting", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"];
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {name, attack, defense, image_url, moves, poke_type} = this.state;
    this.props.createPokemon(
      {pokemon: {name, attack, defense, image_url, moves, poke_type}})
      // .then(this.setState(initialState))
      .then(
        newPokemon => {
          console.log(newPokemon.pokemon.id);
          this.props.history.push(`/pokemon/${newPokemon.pokemon.id}`);
        }
      )
      .then(this.props.clearErrors());

  }

  errors () {
    if (this.props.errors) {
      return (
        <ul className="errors">
          {
            this.props.errors.map((error,idx) => (
              <li key={idx}>{error}</li>
            ))
          }
        </ul>
      );
    }
  }

  update(property) {
    if (property === 'moves0') {
      return e => {
        const array = [e.target.value, this.state.moves[1]];
        this.setState({ moves: array});
      };
    } else if (property === 'moves1') {
      return e => {
        const array = [ this.state.moves[0], e.target.value];
        this.setState({ moves: array});
      };
    }
    return e => this.setState({ [property]: e.target.value});
  }

  render () {

    const {name, attack, defense, poke_type, moves, image_url} = this.state;
    return (
      <div>
        {this.errors()}


        <form className="pokemon-form" onSubmit={(e) => this.handleSubmit(e)}>
          <label>Name:
            <input type="text" value={name} onChange={this.update('name')} />
          </label>
          <br/>
          <label>Attack:
            <input type="text" value={attack} onChange={this.update('attack')} />
          </label>
          <br/>
          <label>Defense:
            <input type="text" value={defense} onChange={this.update('defense')}/>
          </label>
          <br/>
          <label>Image Url:
            <input type="text" value={image_url} onChange={this.update('image_url')}/>
          </label>
          <br/>
          <label>Type:
            <select value={this.state.poke_type} onChange={this.update('poke_type')}>
              {
                this.POKEMON_TYPES.map((el, idx) => (
                  <option key={idx} value={el}>{el}</option>
                ))
              }
            </select>
          </label>
          <br/>

          <label>Move 1:
            <input type="text" value={moves[0]} onChange={this.update('moves0')}/>
          </label>
          <br/>
          <label>Move 2:
            <input type="text" value={moves[1]} onChange={this.update('moves1')}/>
          </label>
          <br/>

          <input className="submit" type="submit" value="Create Pokemon"/>
        </form>

      </div>
    );
  }
}


export default withRouter(PokemonForm);