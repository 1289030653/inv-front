import { reducerCall } from './index';

const fakeInitState = {
  isLoggedIn: true,
  msg: '登陆成功',
  currentUser: {
    id: 1,
    username: 'admin',
    name: '管理员'

  }
}

const initState = {
  isLoggedIn: false,
}

export default function authc(state = fakeInitState, action) {
  return reducerCall(state, action, reducerClass);
}

/**
 * reducer static class
 */
class reducerClass
{
  static login(new_state, action)
  {
    new_state.isLoggedIn = new_state.isLoggedIn ? new_state.isLoggedIn : false;
    new_state.msg = new_state.msg ? new_state.msg : '';
    
    new_state.isLoggedIn = action.authc.success;
    new_state.msg = action.authc.msg;
    new_state.currentUser = action.authc.obj;

    return new_state;
  }

  static logout(new_state, action)
  {

    return initState;
  }

}
