import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Home from '../pages/Home';

const mapStateToProps = (state, ownProps) => ({
  authc: state.authc || { isLoggedIn: false },
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (userInfo) => {
      dispatch(
        {
          type: 'userLogin',
          userInfo: userInfo,
        }
      )
    },

    onLogout: () => {
    	dispatch(
	    	{
	        type: 'userLogout',
	    	}
    	)
    }
});

const HomeContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));

export default HomeContainer;