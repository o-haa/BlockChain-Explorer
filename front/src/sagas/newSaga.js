import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  newBlock_request,
  newBlock_success,
  newBlock_failure,
} from "../reducers/blockReducers";

async function newAPI() {
  try {
    const result = await axios.post("http://localhost:4000/block/new", null);
    return result;
  } catch (e) {
    console.log(e);
  }
}

function* newBlock(action) {
  try {
    const result = yield call(newAPI, action.payload);
    yield put({
      type: newBlock_success.toString(),
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: newBlock_failure.toString(),
      payload: e.response.data,
    });
  }
}

export default function* newSaga() {
  yield takeLatest(newBlock_request.toString(), newBlock);
}
