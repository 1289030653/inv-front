import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

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
  },
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

}

class Login extends React.Component {

	constructor(props) {
    super(props);

    this.state = {checked: false,};

  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }
  render() {

    if (this.props.authc.isLoggedIn) {
      return (
        <Redirect to={{pathname: '/'}}/>
      )
    }

    return (
      <MuiThemeProvider>
        <div style={styles.page}>
    	    <Paper style={styles.paper} zDepth={3}>
    	      <div style={styles.form}>
    	        <h2>登陆</h2>
    		      <TextField style={styles.textField} hintText="用户名"/><br />
    	        <TextField type="password" style={styles.textField} hintText="密&nbsp;&nbsp;&nbsp;码"/><br />
    	        <Checkbox
    	          label="记住密码"
    	          checked={this.state.checked}
    	          onCheck={this.updateCheck.bind(this)}
    	          style={styles.checkbox}
    	        /><br/>
    	        <RaisedButton 
    	          label="登陆" 
    	          backgroundColor="#0091EA"
                onClick={()=>{this.props.onSubmit();}}
    	          primary={true} 
    	          style={styles.button} />
    	      </div>
    	    </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  authc: state.authc || { isLoggedIn: false }
})

const mapDispatchToProps = dispatch => ({
    onSubmit: () => {
      dispatch(
        {
          type: 'authc.login',
        }
      )
    }
})

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer;