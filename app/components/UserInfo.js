import React from 'react';
import common from '../stylesheet/Common.css';
import FlatButton from 'material-ui/FlatButton';

const styles = {
 
  button: {
    margin: 'auto',
    width: 256,
  },

  navBarMenuElement: {
  	height: 60,
  	margin: 'auto',
  	float: 'left'
  },
  navBarMenuElement1: {
  	height: 60,
  	margin: 'auto',
  	float: 'right'
  },
  element: {
    float: 'left',
    height: 40,
    marginTop: 10,
    color: 'white',
    marginLeft: 5,
    fontSize: 16,
  },
  text: {
    lineHeight: '40px',
    float: 'left',
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'normal'
  }


}


class UserInfo extends React.Component {

  constructor(props) {
    super(props);
    this.currentUser = this.props.currentUser;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onLogout();
  }

  render() {
    return (
      <div style={styles.navBarMenuElement1}>
        <div style={styles.element}>
          <div style={styles.text}>用户名: {this.currentUser.username}</div>
          <div style={styles.text}>用户: {this.currentUser.name}</div>
        </div>
        <FlatButton 
          label="退&nbsp;出" 
          style={styles.element}
          labelStyle={styles.label}
          onClick={this.handleClick}
        />
      </div>
    );
  }
};

export default UserInfo;