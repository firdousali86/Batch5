import {take, put, call, fork} from 'redux-saga/effects';
import {request, success, failure} from '../features/user/userSlice';

import {ApiHelper} from '../helpers';

function callGetRequest(url, data, headers = {}) {
  return ApiHelper.get(url, data, headers);
}

function callPostRequest(url, data, headers = {}) {
  return ApiHelper.post(url, data, headers);
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(request);

    try {
      let response;

      response = yield call(callPostRequest, payload.url, payload.data);
      yield put(success(response.data));
    } catch (ex) {
      yield put(failure(ex));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
