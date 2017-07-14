import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
