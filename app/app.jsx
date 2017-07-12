import React, { Component } from 'react';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import { subscribeToPrice} from './api';

class App extends Component {
  constructor(props) {
    super(props);
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
        <p>
        The BTC-USD: {this.state.price}
        </p>
      </div>
    );
  }
}

export default App;
