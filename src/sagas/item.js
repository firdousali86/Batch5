import {take, put, call, fork} from 'redux-saga/effects';
import {request, success, failure} from '../features/item/itemSlice';

import {ApiHelper} from '../helpers';

function callGetRequest(url, data, headers = {}) {
  return ApiHelper.get(url, data, headers);
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(request);

    try {
      let response;

      response = yield call(callGetRequest, payload.url, {});
      yield put(success(response));
    } catch (ex) {
      yield put(failure(ex));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
