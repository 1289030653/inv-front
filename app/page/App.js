import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = ({ match }) => (
  <MuiThemeProvider>
    <div>
      <h1>myApp</h1>
    </div>
  </MuiThemeProvider>
);

export default App;