import React, { Component } from 'react';
import './App.css';
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
      <div className="App">
        <p className="App-intro">
        The BTC-USD: {this.state.price}
        </p>
      </div>
    );
  }
}

export default App;
