import { combineReducers } from 'redux';
import users from './users';
import authc from './authc';

export const reducers = combineReducers({
  authc: authc,
  users: users,
	
});

export function reducerCall(state, action, reducerClass)
{
  //get the section class method
  const [, method ] = action.type.split('.');

  //get all class methods
  const methods = Object.getOwnPropertyNames(reducerClass).filter(name => {
    if (name !== 'length' && name !== 'name' && name !== 'prototype') {
      return name;
    }
  });

  //check the action method in hte static class
  if (methods.find(x => x === method)) {
    //clone the state
    const new_state = cloneObject(state);

    //return the static method
    return reducerClass[method](new_state, action);
  } else {
    //there is no valid action, so just return the state
    return state;
  }
}

function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}
