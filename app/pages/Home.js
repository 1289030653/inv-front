import React from 'react';
import common from '../stylesheet/Common.css';
import { Redirect, Switch } from 'react-router-dom';

import { Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import UserInfo from '../components/UserInfo';
import NavBar from '../components/NavBar';
import PrivateRoute from '../components/PrivateRoute';
import UserMgmt from './UserMgmt';
import NotFound from './NotFound';


  const Page1 = () => (
    <h1>page1</h1>
  )
  const Page2 = () => (
    <h1>page2</h1>
  )
  const Page3 = () => (
    <h1>page3</h1>
  )
  const Page4 = () => (
    <h1>page4</h1>
  )


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.authc = this.props.authc;
    this.match = this.props.match;
    this.isLoggedIn = this.authc.isLoggedIn;
    this.state = { isLoggedIn : this.authc.isLoggedIn };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isLoggedIn: nextProps.authc.isLoggedIn });
  }

  render() {

    return (
      <MuiThemeProvider>
        <div className={common.page}>
          <NavBar authc={this.authc} onLogout={this.props.onLogout} />
          <Switch>
            <PrivateRoute isLoggedIn={ this.state.isLoggedIn } path={`${this.match.url}/page1`} component={Page1} />
            <Route path={'/index/page2'} exact component={Page2} />
            <Route path={`${this.match.url}/page3`} component={Page3} />
            <Route path={`${this.match.url}/page4`} component={Page4} />
            <Route component={NotFound}/>
          </Switch>
          {
            this.props.location.pathname === '/index' ?
              <Redirect to={`${this.match.url}/page1`}/> :
              null
          }
        </div>
      </MuiThemeProvider>
    );

  }

};

export default Home;