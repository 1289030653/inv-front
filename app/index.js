import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from './page/App.js';

const Index = () => (
  <Router>
	  <Route path="/" component={App}/>
  </Router>
);

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);