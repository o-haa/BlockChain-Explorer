import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  tidx_request,
  tidx_success,
  tidx_failure,
} from "../reducers/txReducers";

async function tidxAPI(payload) {
  try {
    const result = await axios.post(
      "http://localhost:4000/tx/" + payload,
      null
    );
    return result;
  } catch (e) {
    console.log(e);
  }
}

function* tidx(action) {
  try {
    const result = yield call(tidxAPI, action.payload.params.hash);
    yield put({
      type: tidx_success.toString(),
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: tidx_failure.toString(),
      payload: e.response.data,
    });
  }
}

export default function* tidxSaga() {
  yield takeLatest(tidx_request.toString(), tidx);
}
