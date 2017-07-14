import React, { Component } from 'react';
import { subscribeToPrice} from '../api';


class BTCPage extends Component {
  componentDidMount() {
    console.log('BTCPage did mount');

    subscribeToPrice((err, price) => this.setState({
      price
    }));
  }

  state = {
      price: 0
  };

  render() {
    return (
      <div>
        BTC Price: {this.state.price}
      </div>
    );
  }
}

export default BTCPage;
