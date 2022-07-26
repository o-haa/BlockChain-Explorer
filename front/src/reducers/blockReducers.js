import { createAction } from "redux-actions";

const initialState = {
  allBk: [],
  new: [],
  bkList: [],
  idx: [],
};

const ALLBLOCK = {
  REQUEST: "ALLBLOCK_REQUEST",
  SUCCESS: "ALLBLOCK_SUCCESS",
  FAILURE: "ALLBLOCK_FAILURE",
};

const NEWBLOCK = {
  REQUEST: "NEWBLOCK_REQUEST",
  SUCCESS: "NEWBLOCK_SUCCESS",
  FAILURE: "NEWBLOCK_FAILURE",
};

const BLOCK = {
  REQUEST: "BLOCK_REQUEST",
  SUCCESS: "BLOCK_SUCCESS",
  FAILURE: "BLOCK_FAILURE",
};

const BIDX = {
  REQUEST: "BIDX_REQUEST",
  SUCCESS: "BIDX_SUCCESS",
  FAILURE: "BIDX_FAILURE",
};

export const allBlock_request = createAction(ALLBLOCK.REQUEST);
export const allBlock_success = createAction(ALLBLOCK.SUCCESS);
export const allBlock_failure = createAction(ALLBLOCK.FAILURE);

export const newBlock_request = createAction(NEWBLOCK.REQUEST);
export const newBlock_success = createAction(NEWBLOCK.SUCCESS);
export const newBlock_failure = createAction(NEWBLOCK.FAILURE);

export const block_request = createAction(BLOCK.REQUEST);
export const block_success = createAction(BLOCK.SUCCESS);
export const block_failure = createAction(BLOCK.FAILURE);

export const bidx_request = createAction(BIDX.REQUEST);
export const bidx_success = createAction(BIDX.SUCCESS);
export const bidx_failure = createAction(BIDX.FAILURE);

const block = (state = initialState, action) => {
  switch (action.type) {
    case ALLBLOCK.REQUEST:
      return {
        ...state,
      };
    case ALLBLOCK.SUCCESS:
      return {
        ...state,
        allBk: [action.payload.result],
      };
    case ALLBLOCK.FAILURE:
      return {
        ...state,
      };
    case NEWBLOCK.REQUEST:
      return {
        ...state,
      };
    case NEWBLOCK.SUCCESS:
      return {
        ...state,
        new: [action.payload.result],
      };
    case NEWBLOCK.FAILURE:
      return {
        ...state,
      };
    case BLOCK.REQUEST:
      return {
        ...state,
      };
    case BLOCK.SUCCESS:
      return {
        ...state,
        bkList: [action.payload.result],
      };
    case BLOCK.FAILURE:
      return {
        ...state,
      };
    case BIDX.REQUEST:
      return {
        ...state,
      };
    case BIDX.SUCCESS:
      return {
        ...state,
        idx: [action.payload.result],
      };
    case BIDX.FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default block;
