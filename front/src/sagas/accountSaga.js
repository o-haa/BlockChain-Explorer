import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  account_request,
  account_success,
  account_failure,
  new_account_request,
  new_account_success,
  new_account_failure,
} from "../reducers/accountReducers";

async function accountAPI(payload) {
  const params = payload.address;
  try {
    const result = await axios.post(
      "http://localhost:4000/accounts/" + params,
      null
    );
    return result;
  } catch (e) {
    console.log(e);
  }
}

async function newAccountAPI(payload) {
  try {
    const result = await axios.post("http://localhost:4000/accounts/new", null);
    return result;
  } catch (e) {
    console.log(e);
  }
}

function* account(action) {
  console.log(action);
  try {
    const result = yield call(accountAPI, action.payload.params);
    yield put({
      type: account_success.toString(),
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: account_failure.toString(),
      payload: e.response,
    });
  }
}

function* newAccount(action) {
  try {
    const result = yield call(newAccountAPI, action.payload);
    yield put({
      type: new_account_success.toString(),
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: new_account_failure.toString(),
      payload: e.response,
    });
  }
}

export default function* accoountSaga() {
  yield takeLatest(account_request.toString(), account);
  yield takeLatest(new_account_request.toString(), newAccount);
}
