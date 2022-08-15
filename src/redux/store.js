import logger from "redux-logger";
import toOrderReducer from "./toOrder/toOrder-reducer";
import wellcomeReducer from "./wellcome/wellcome-reducer";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    wellcome: wellcomeReducer,
    toOrder: toOrderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === "development",
});

export default store;
