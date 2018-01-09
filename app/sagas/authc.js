import { call, put } from 'redux-saga/effects';

import ApiAuthc from '../api/authc';

export function* userLogin(action) {

  const authc = yield call(ApiAuthc.login, action);
  
  yield put({
    type: 'authc.login',
    authc: authc,
  });
}

export function* userLogout(action) {

  const response = yield call(ApiAuthc.logout, action);

  yield put({
    type: 'authc.logout',
  });
}