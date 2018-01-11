import React from 'react';
import { NavLink } from 'react-router-dom';

import UserInfo from './UserInfo';

const styles = {
  navBarContainer: {
  	height: 60,
  	align: 'center',
  	backgroundColor: '#00684d',
  },
  navBarMenu: {
  	height: 60,
  	minWidth: 960,
  	maxWidth: 1140,
  	margin: 'auto',
  	backgroundColor: '#00684d',
  },
  navBarMenuElement: {
  	height: 60,
  	margin: 'auto',
  	float: 'left'
  },
  nav: {
    display: 'inline-block',
    textDecoration: 'none',
    lineHeight: '60px',
    marginLeft: 20,
    color: 'white',
    width: 140,
    padding: 'auto',
    fontSize: 16,
  },

  navActive: {
    fontWeight: 'bold',
    color: '#00684d',
    backgroundColor: 'white'
  }


}


class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.currentUser = this.props.authc.currentUser;
  }

  render() {
    return (
      <div style={styles.navBarContainer}>
        <div style={styles.navBarMenu}>
          <div style={styles.navBarMenuElement}>
            <NavLink
              to="/index/page1"
              style={styles.nav}
              activeStyle={styles.navActive}
            >page1</NavLink>
            <NavLink
              to="/index/page2"
              style={styles.nav}
              activeStyle={styles.navActive}
            >page2</NavLink>
            <NavLink
              to="/index/page3"
              style={styles.nav}
              activeStyle={styles.navActive}
            >page3</NavLink>
            <NavLink
              to="/index/page4"
              style={styles.nav}
              activeStyle={styles.navActive}
            >page4</NavLink>
          </div>
          <p style={{padding:20,float:'left'}}></p>
          <UserInfo currentUser={this.currentUser} onLogout={this.props.onLogout} />
        </div>
      </div>
    );
  }

};

export default NavBar;