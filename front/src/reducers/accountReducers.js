import { createAction } from "redux-actions";

const initialState = {
  account: [],
  newAccount: [],
  balance: [],
};

const ACCOUNT = {
  REQUEST: "ACCOUNT_REQUEST",
  SUCCESS: "ACCOUNT_SUCCESS",
  FAILURE: "ACCOUNT_FAILURE",
};

const NEW_ACCOUNT = {
  REQUEST: "NEW_ACCOUNT_REQUEST",
  SUCCESS: "NEW_ACCOUNT_SUCCESS",
  FAILURE: "NEW_ACCOUNT_FAILURE",
};

export const account_request = createAction(ACCOUNT.REQUEST);
export const account_success = createAction(ACCOUNT.SUCCESS);
export const account_failure = createAction(ACCOUNT.FAILURE);

export const new_account_request = createAction(NEW_ACCOUNT.REQUEST);
export const new_account_success = createAction(NEW_ACCOUNT.SUCCESS);
export const new_account_failure = createAction(NEW_ACCOUNT.FAILURE);

const accountReducers = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT.REQUEST:
      return {
        ...state,
      };
    case ACCOUNT.SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        account: [...action.payload.result],
        balance: action.payload.realBalance,
      };
    case ACCOUNT.FAILURE:
      return {
        ...state,
      };

    case NEW_ACCOUNT.REQUEST:
      return {
        ...state,
      };
    case NEW_ACCOUNT.SUCCESS:
      return {
        ...state,
        newAccount: [...action.payload.result],
      };
    case NEW_ACCOUNT.FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default accountReducers;
