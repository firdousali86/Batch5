import {take, put, call, fork, select} from 'redux-saga/effects';
import {request, success, failure} from '../features/item/itemSlice';

import {ApiHelper, DataHelper} from '../helpers';

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

      if (payload.method === 'POST') {
        const accessToken = yield select(state => state.user.data.accessToken);

        response = yield call(callPostRequest, payload.url, payload.data, {
          'X-Access-Token': accessToken,
        });
      } else {
        response = yield call(callGetRequest, payload.url, {});
      }

      yield put(success(response));
    } catch (ex) {
      yield put(failure(ex));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
