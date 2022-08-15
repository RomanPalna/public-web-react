import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { getWellcome } from "./wellcome-action";

const wellcome = createReducer(false, {
  [getWellcome]: (_, action) => action.payload,
});

export default combineReducers({
  wellcome,
});
