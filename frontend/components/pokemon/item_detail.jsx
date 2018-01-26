import React from 'react';

class ItemDetail extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillReceiveProps() {
    if (this.props.loading) {
      return (
        <div id="loading-pokeball-container">
          <div id="loading-pokeball"></div>
        </div>
      );
    }
  }
  render () {
    if (!this.props.item) {
      return (
        <div id="loading-pokeball-container">
          <div id="loading-pokeball"></div>
        </div>
      );
    }
    const { happiness, name, price } = this.props.item;

    return (
      <div>
        <h3>{name}</h3>
        <ul>
          <li>Happiness: {happiness}</li>
          <li>Price: {price}</li>
        </ul>
      </div>
    );
  }
}


export default ItemDetail;