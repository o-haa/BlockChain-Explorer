import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  search_B_request,
  search_B_success,
  search_B_failure,
  search_H_request,
  search_H_success,
  search_H_failure,
} from "../reducers/searchReducers";

async function searchBAPI(action) {
  try {
    console.log(action);
    const result = await axios.post("http://localhost:4000/search/block", {
      action: action,
    });
    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
  }
}

async function searchHAPI(payload) {
  try {
    const result = await axios.post("http://localhost:4000/search/tx", {
      payload: payload,
    });
    return result;
  } catch (e) {
    console.log(e);
  }
}

function* searchB(action) {
  console.log(action.payload);
  try {
    const result = yield call(searchBAPI, action.payload);
    yield put({
      type: search_B_success.toString(),
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: search_B_failure.toString(),
      payload: e.response,
    });
  }
}

function* searchH(action) {
  try {
    const result = yield call(searchHAPI, action.payload);
    yield put({
      type: search_H_success.toString(),
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: search_H_failure.toString(),
      payload: e.response,
    });
  }
}

export default function* searchSaga() {
  yield takeLatest(search_B_request.toString(), searchB);
  yield takeLatest(search_H_request.toString(), searchH);
}
