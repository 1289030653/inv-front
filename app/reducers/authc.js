import { reducerCall } from './index';

export default function authc(state = { isLoggedIn: false }, action) {
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
    new_state.isLoggedIn = true;
    return new_state;
  }

}
