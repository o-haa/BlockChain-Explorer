import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  allBlock_request,
  allBlock_success,
  allBlock_failure,
} from "../reducers/blockReducers";

async function allBkAPI() {
  try {
    const result = await axios.post(
      "http://localhost:4000/block/allblock",
      null
    );
    return result;
  } catch (e) {
    console.log(e);
  }
}

function* allBk(action) {
  try {
    const result = yield call(allBkAPI, action.payload);
    yield put({
      type: allBlock_success.toString(),
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: allBlock_failure.toString(),
      payload: e.response.data,
    });
  }
}

export default function* allBkSaga() {
  yield takeLatest(allBlock_request.toString(), allBk);
}
