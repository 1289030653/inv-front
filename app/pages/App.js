import React from 'react';
import common from '../stylesheet/Common.css';

import { Redirect } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './Home';

import Login from './Login';

class App extends React.Component {
  constructor(props) {
     super(props);
  }

  render() {

    const isLoggedIn = this.props.authc.isLoggedIn;

    const path = isLoggedIn ? 
      <Redirect to={{pathname: '/index',}}/> : 
      <Redirect to={{pathname: '/login',}}/>;

    return (
      path
    );
  }
};

export default App;