import { combineReducers } from "redux";
import blockReducers from "./blockReducers";
import txReducers from "./txReducers";
import searchReducers from "./searchReducers";
import accountReducers from "./accountReducers";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persist = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  blockReducers,
  txReducers,
  searchReducers,
  accountReducers,
});

export default persistReducer(persist, rootReducer);
