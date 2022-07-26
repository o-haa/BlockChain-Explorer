import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import { tx_request, tx_success, tx_failure } from "../reducers/txReducers";

async function txAPI() {
  try {
    const result = await axios.post("http://localhost:4000/tx", null);
    return result;
  } catch (e) {
    console.log(e);
  }
}

function* tx(action) {
  try {
    const result = yield call(txAPI, action.payload);
    yield put({
      type: tx_success.toString(),
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: tx_failure.toString(),
      payload: e.response.data,
    });
  }
}

export default function* txSaga() {
  yield takeLatest(tx_request.toString(), tx);
}
