import {call, put, takeEvery} from 'redux-saga/effects';
import {requestEvery, success, failure} from '../features/item/itemSlice';
import {ApiHelper} from '../helpers';

function callGetRequest(url, data, headers) {
  return ApiHelper.get(url, data, headers);
}

function* watchRequest(action) {
  const {payload} = action;

  try {
    let response;
    response = yield call(callGetRequest, payload.url, {});
    yield put(success(response.data));
  } catch (ex) {
    yield put(failure(ex));
  }
}

export default function* root() {
  yield takeEvery(requestEvery, watchRequest);
}
