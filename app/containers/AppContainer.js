import { connect } from 'react-redux';

import App from '../pages/App';

const mapStateToProps = (state, ownProps) => ({
  authc: state.authc || { isLoggedIn: false },
});

const AppContainer = connect(
  mapStateToProps
)(App);

export default AppContainer;