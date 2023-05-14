import { configureStore } from "@reduxjs/toolkit";

//  reducers
import apiSlice from "./feature/apiSlice/apiSlice";
import filterSlice from "./filterSlice/filterSlice";

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(apiSlice.middleware),
});

export default store;
