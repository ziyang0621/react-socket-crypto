import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
// import { subscribeToPrice } from '../api';

import BTCNewsPage from './BTCNewsPage';

class BTCPage extends Component {
  componentDidMount() {
    console.log('BTCPage did mount');

    // subscribeToPrice((err, price) => this.setState({
    //   price
    // }));
  }

  state = {
      price: 0
  };

  render() {
    const { match: { url } } = this.props;
    return (
      <div>
        <div>
          BTC Price: {this.state.price}
        </div>
        <div className="grid-x grid-padding-x align-center">
          <div className="cell small-4">
            <Link className="hollow button" to={`${url}/btcnews`}>BTC News</Link>
          </div>
        </div>
        <Route path={`${url}/btcnews`} component={BTCNewsPage} />
      </div>
    );
  }
}

export default BTCPage;
