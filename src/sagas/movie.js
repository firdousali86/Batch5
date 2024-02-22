import {take, put, call, fork, select} from 'redux-saga/effects';
import {request, success, failure} from '../features/movie/movieSlice';

import {ApiHelper, DataHelper} from '../helpers';

function callGetRequest(url, data, headers = {}) {
  return ApiHelper.get(url, data, headers);
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(request);

    try {
      let response;

      response = yield call(
        callGetRequest,
        payload.url,
        {},
        {Authorization: 'Bearer ' + payload.token},
      );

      yield put(success(response));
    } catch (ex) {
      yield put(failure(ex));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
