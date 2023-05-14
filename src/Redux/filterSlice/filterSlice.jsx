import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  sortBy: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export default filterSlice;
export const { setSearchValue, setSortBy } = filterSlice.actions;
