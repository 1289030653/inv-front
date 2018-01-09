import React from 'react';



class PrivateRoute extends React.Component {

  constructor(props) {
    super(props);
    this.currentUser = this.props.authc.currentUser;
  }

  render() {
    return (
      <Route {...rest} render={props => (
        fakeAuth.isAuthenticated ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )}/>
    );
  }

};

export default PrivateRoute;