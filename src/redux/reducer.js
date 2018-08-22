//combine reducer
import { combineReducers } from "redux";
import equityUse from "./EquityUse";
import employmentStatus from "./Employment";
import income from "./Income";
import address from "./Address";

export const reducer = combineReducers({
  equityUse,
  employmentStatus,
  income,
  address
});

export default reducer;
