import React from 'react';
import { Route,
         Redirect } from 'react-router-dom';

class PrivateRoute extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    let { component: Component, ...rest } = this.props;

    return (
      <Route {...rest} 
        render = {props => (
          this.props.isLoggedIn ? (
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