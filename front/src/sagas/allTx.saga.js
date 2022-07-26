import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  allTx_request,
  allTx_success,
  allTx_failure,
} from "../reducers/txReducers";

async function allTxAPI() {
  try {
    const result = await axios.post("http://localhost:4000/tx/alltx", null);
    return result;
  } catch (e) {
    console.log(e);
  }
}

function* allTx(action) {
  try {
    const result = yield call(allTxAPI, action.payload);
    yield put({
      type: allTx_success.toString(),
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: allTx_failure.toString(),
      payload: e.response.data,
    });
  }
}

export default function* allTxSaga() {
  yield takeLatest(allTx_request.toString(), allTx);
}
