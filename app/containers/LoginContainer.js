import { connect } from 'react-redux';

import Login from '../pages/Login';

const mapStateToProps = (state, ownProps) => ({
  authc: state.authc || { isLoggedIn: false }
})

const mapDispatchToProps = dispatch => ({
    onSubmit: (userInfo) => {
      dispatch(
        {
          type: 'userLogin',
          userInfo: userInfo,
        }
      )
    }
})

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer;