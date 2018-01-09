import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types'

import { BrowserRouter as Router, 
	       Route, 
	       Link,
	       Switch
	     } from 'react-router-dom';

import { createStore, applyMiddleware, compose } from 'redux'; 
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';

import { sagas } from './sagas/index';

import { reducers } from './reducers/index';

import AppContainer from './containers/AppContainer';
import NotFound from './pages/NotFound';
import LoginContainer from './containers/LoginContainer';
import HomeContainer from './containers/HomeContainer';

const sagaMiddleware = createSagaMiddleware();

let middleware = applyMiddleware(sagaMiddleware);

if (process.env.NODE_ENV !== 'production') {
  middleware = compose(middleware, window.devToolsExtension && window.devToolsExtension())
}

let store = createStore(reducers, middleware);

sagaMiddleware.run(sagas);

const Root = ( {store} ) => (
	<Provider store={store}>
	  <Router>
	    <Switch>
		    <Route path="/" exact  component={AppContainer}/>
		    <Route path="/login" exact component={LoginContainer}/>
		    <Route path="/index" component={HomeContainer}/>
		    <Route component={NotFound}/>
		  </Switch>
	  </Router>
  </Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired
};

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);