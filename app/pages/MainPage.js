import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {
  componentDidMount() {
    console.log('MainPage did mount');
  }

  render() {
    return (
      <div className="grid-x grid-padding-x align-spaced"> 
        <div className="cell small-4">
          <Link className="hollow button" to="/btc">BTC Price</Link>
        </div>
        <div className="cell small-4">
            <Link className="hollow button" to="/eth">ETH Price</Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
