import { all } from "redux-saga/effects";
import blockSaga from "./blockSaga";
import txSaga from "./txSaga";
import bidxSaga from "./bidxSaga";
import tidxSaga from "./tidxSaga";
import newSaga from "./newSaga";
import searchSaga from "./searchSaga";
import allBkSaga from "./allBk.saga";
import allTxSaga from "./allTx.saga";
import accoountSaga from "./accountSaga";

export default function* rootSaga() {
  yield all([
    blockSaga(),
    txSaga(),
    bidxSaga(),
    tidxSaga(),
    newSaga(),
    searchSaga(),
    allBkSaga(),
    allTxSaga(),
    accoountSaga(),
  ]);
}
