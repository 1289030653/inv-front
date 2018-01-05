import React from 'react';

import { Redirect } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './Home';

import Login from './Login';

const styles = {
  page: {
    //backgroundColor: 'orange',
    // minHeight: '100%',
    // minWidth: '100%',
    minHeight: 960,
    minWidth: 1140,
    padding: 'auto',
    margin: 'auto',
    textAlign: 'center',
  }
}

class App extends React.Component {
  constructor(props) {
     super(props);
  }

  render() {

    const isLoggedIn = this.props.authc.isLoggedIn;

    const page = isLoggedIn ? <Home /> : <Redirect to={{
          pathname: '/login',
        }}/>;

    return (
      <MuiThemeProvider>
        <div style={styles.page}>
		      { page }
        </div>
		  </MuiThemeProvider>
    );
  }
};

export default App;