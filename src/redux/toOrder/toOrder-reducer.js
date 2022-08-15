import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { getFromOrder, getToOrder } from "./toOrder-action";

const toOrder = createReducer([], {
  [getToOrder]: (state, action) => [...state, action.payload],
  [getFromOrder]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});

export default combineReducers({
  toOrder,
});
