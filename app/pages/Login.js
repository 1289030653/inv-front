import React from 'react';
import { Redirect } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

import common from '../stylesheet/Common.css'

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
  },

  form: {
  	height: 300,
  	width: 320,
  	display: 'block',
  },
  checkbox: {
    marginBottom: 20,
    margin: 'auto',
    width: 256,
    textAlign: 'left',
  },
  button: {
    margin: 'auto',
    width: 256,
    backgroundColor: '#03A9F4',
  },

}

class Login extends React.Component {

	constructor(props) {
    super(props);

    this.state = { 
      rememberMe: false,
      username: '',
      password: '',           
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

  }

  handleCheck() {
    this.setState((oldState) => {
      return {
        rememberMe: !oldState.checked,
      };
    });
  }

  handleUsername(event) {
    this.setState({
      username: event.target.value,
      msgUsername: '',
    });
  };
  

  handlePassword(event) {
    this.setState({
      password: event.target.value,
      msgPassword: '',
    });
  };

  //this.state.msgPassword
  //this.state.msgUsername
  handleSubmit() {
    if (this.state.username === '') {
      this.setState({
        msgUsername: '用户名不能为空'
      });
      return;
    }
    if (this.state.password === '') {
      this.setState({
        msgPassword: '密码不能为空'
      });
      return;
    }
    this.props.onSubmit({
      rememberMe: this.state.rememberMe,
      username: this.state.username,
      password: this.state.password,
    });
  };

  render() {

    if (this.props.authc.isLoggedIn) {
      return (
        <Redirect to={{pathname: '/'}}/>
      )
    }

    let msg = this.props.authc.msg === '' ? this.state.msgPassword : this.props.authc.msg

    return (
      <MuiThemeProvider>
        <div className={common.page}>
    	    <Paper style={styles.paper} zDepth={3}>
    	      <div style={styles.form}>
    	        <h2>登陆</h2>
    		      <TextField 
                style={styles.textField} 
                hintText="用户名"
                errorText={this.state.msgUsername}
                onChange={this.handleUsername}  
              />
              <br />
    	        <TextField 
                type="password" 
                style={styles.textField} 
                hintText="密&nbsp;&nbsp;&nbsp;码"
                errorText={msg}
                onChange={this.handlePassword}
              />
              <br />
    	        <Checkbox
    	          label="记住密码"
    	          checked={this.state.rememberMe}
    	          onCheck={this.handleCheck}
    	          style={styles.checkbox}
    	        />
              <br/>
    	        <RaisedButton 
    	          label="登陆" 
    	          backgroundColor="#0091EA"
                onClick={this.handleSubmit}
    	          primary={true} 
    	          style={styles.button} />
    	      </div>
    	    </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
};

export default Login;