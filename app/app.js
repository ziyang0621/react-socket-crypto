import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';
import BTCPage from './pages/BTCPage';
import ETHPage from './pages/ETHPage';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Crypto Price</p>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/btc" component={BTCPage} />
              <Route path="/eth" component={ETHPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
