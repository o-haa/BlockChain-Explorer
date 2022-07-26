import { createAction } from "redux-actions";

const initialState = {
  allTx: [],
  txList: [],
  idx: [],
};
const ALLTX = {
  REQUEST: "ALLTX_REQUEST",
  SUCCESS: "ALLTX_SUCCESS",
  FAILURE: "ALLTX_FAILURE",
};

const TX = {
  REQUEST: "TX_REQUEST",
  SUCCESS: "TX_SUCCESS",
  FAILURE: "TX_FAILURE",
};

const TIDX = {
  REQUEST: "TIDX_REQUEST",
  SUCCESS: "TIDX_SUCCESS",
  FAILURE: "TIDX_FAILURE",
};

export const allTx_request = createAction(ALLTX.REQUEST);
export const allTx_success = createAction(ALLTX.SUCCESS);
export const allTx_failure = createAction(ALLTX.FAILURE);

export const tx_request = createAction(TX.REQUEST);
export const tx_success = createAction(TX.SUCCESS);
export const tx_failure = createAction(TX.FAILURE);

export const tidx_request = createAction(TIDX.REQUEST);
export const tidx_success = createAction(TIDX.SUCCESS);
export const tidx_failure = createAction(TIDX.FAILURE);

const tx = (state = initialState, action) => {
  switch (action.type) {
    case ALLTX.REQUEST:
      return {
        ...state,
      };
    case ALLTX.SUCCESS:
      return {
        ...state,
        allTx: [action.payload.result],
      };
    case ALLTX.FAILURE:
      return {
        ...state,
      };
    case TX.REQUEST:
      return {
        ...state,
      };
    case TX.SUCCESS:
      return {
        ...state,
        txList: [action.payload.result],
      };
    case TX.FAILURE:
      return {
        ...state,
      };
    case TIDX.REQUEST:
      return {
        ...state,
      };
    case TIDX.SUCCESS:
      return {
        ...state,
        idx: [action.payload.result],
      };
    case TIDX.FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default tx;
