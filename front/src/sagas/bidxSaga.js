import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  bidx_request,
  bidx_success,
  bidx_failure,
} from "../reducers/blockReducers";

async function bidxAPI(payload) {
  try {
    const result = await axios.post(
      "http://localhost:4000/block/" + payload,
      null
    );
    return result;
  } catch (e) {
    console.log(e);
  }
}

function* bidx(action) {
  try {
    const result = yield call(bidxAPI, action.payload.params.idx);
    yield put({
      type: bidx_success.toString(),
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: bidx_failure.toString(),
      payload: e.response.data,
    });
  }
}

export default function* bidxSaga() {
  yield takeLatest(bidx_request.toString(), bidx);
}
