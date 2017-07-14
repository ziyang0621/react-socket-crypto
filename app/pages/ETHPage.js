import React, { Component } from 'react';

class ETHPage extends Component {
  componentDidMount() {
    console.log('ETHPage did mount');
  }

  state = {
      price: 0
  };

  render() {
    return (
      <div>
        ETH Price: {this.state.price}
      </div>
    );
  }
}

export default ETHPage;
