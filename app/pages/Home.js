import React from 'react';
import common from '../stylesheet/Common.css';
import { Redirect } from 'react-router-dom';

import { Route } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import UserInfo from '../components/UserInfo';
import NavBar from '../components/NavBar';


const styles = {
  paper: {
  	height: 380,
  	width: 360,
  	textAlign: 'center',
  	display: 'inline-block',
  	marginTop: '10%',
  	marginLeft: 'auto',
  	padding: 20,
  },

  textField: {
    marginBottom: 20,
    //backgroundColor: 'orange'
  },

  form: {
  	height: 300,
  	width: 320,
  	display: 'block',
  	//backgroundColor: 'gray'
  },
  checkbox: {
    marginBottom: 20,
    margin: 'auto',
    width: 256,
    textAlign: 'left',
    //backgroundColor: 'orange'
  },
  button: {
    margin: 'auto',
    width: 256,
  },
  navBarContainer: {
  	height: 60,
  	align: 'center',
  	backgroundColor: '#03A9F4',
  },
  navBarMenu: {
  	height: 60,
  	minWidth: 960,
  	maxWidth: 1140,
  	margin: 'auto',
  	backgroundColor: '#03A9F4',
  },
  navBarMenuElement: {
  	height: 60,
  	margin: 'auto',
  	backgroundColor: 'gray',
  	float: 'left'
  },
  navBarMenuElement1: {
  	height: 60,
  	margin: 'auto',
  	backgroundColor: 'gray',
  	float: 'right'
  },


}

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
    if (!this.state.isLoggedIn) {
      return (
        <Redirect to={{pathname: '/login',}}/>
      );
    } else {
      return (
        <MuiThemeProvider>
          <div className={common.page}>
            <NavBar authc={this.authc} onLogout={this.props.onLogout} />
            <Route path={`${this.match.url}/page1`} component={Page1} />
            <Route path={`${this.match.url}/page2`} component={Page2} />
            <Route path={`${this.match.url}/page3`} component={Page3} />
            <Route path={`${this.match.url}/page4`} component={Page4} />
            {
              this.props.location.pathname === '/index' ?
                <Redirect to={`${this.match.url}/page1`}/> :
                null
            }
          </div>
        </MuiThemeProvider>
      );
    }

  }

};

export default Home;