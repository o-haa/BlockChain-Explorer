import { createAction } from "redux-actions";

const initialState = {
  Block: [],
  Hash: [],
};

const SEARCHB = {
  REQUEST: "SEARCH_B_REQUEST",
  SUCCESS: "SEARCH_B_SUCCESS",
  FAILURE: "SEARCH_B_FAILURE",
};

const SEARCHH = {
  REQUEST: "SEARCH_H_REQUEST",
  SUCCESS: "SEARCH_H_SUCCESS",
  FAILURE: "SEARCH_H_FAILURE",
};

export const search_B_request = createAction(SEARCHB.REQUEST);
export const search_B_success = createAction(SEARCHB.SUCCESS);
export const search_B_failure = createAction(SEARCHB.FAILURE);

export const search_H_request = createAction(SEARCHH.REQUEST);
export const search_H_success = createAction(SEARCHH.SUCCESS);
export const search_H_failure = createAction(SEARCHH.FAILURE);

const searchReducers = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHB.REQUEST:
      return {
        ...state,
      };
    case SEARCHB.SUCCESS:
      return {
        ...state,
        Block: [...action.payload.result],
        Hash: [],
      };
    case SEARCHB.FAILURE:
      return {
        ...state,
      };

    case SEARCHH.REQUEST:
      return {
        ...state,
      };
    case SEARCHH.SUCCESS:
      return {
        ...state,
        Hash: [...action.payload.result],
        Block: [],
      };
    case SEARCHH.FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default searchReducers;
