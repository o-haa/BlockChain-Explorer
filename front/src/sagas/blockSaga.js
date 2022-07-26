import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  block_request,
  block_success,
  block_failure,
} from "../reducers/blockReducers";

async function blockAPI() {
  try {
    const result = await axios.post("http://localhost:4000/block", null);
    return result;
  } catch (e) {
    console.log(e);
  }
}

function* block(action) {
  try {
    const result = yield call(blockAPI, action.payload);
    yield put({
      type: block_success.toString(),
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: block_failure.toString(),
      payload: e.response.data,
    });
  }
}

export default function* blockSaga() {
  yield takeLatest(block_request.toString(), block);
}
