import { createSlice } from '@reduxjs/toolkit';

export const BenchmarkReducers = createSlice({
  name: 'benchmark_pricing',
  initialState: {
    fileUploadBtn: false,
    bookmarkBtn: false,
    filterBtn: false,
    showScenarioPrice: false,
  },
  reducers: {
    updateFileUploadBtn : (state, action) => {
      state.fileUploadBtn = action.payload;
    },
    updateBookmarkBtn : (state, action) => {
      state.bookmarkBtn = action.payload;
    },
    updateFilterBtn : (state, action) => {
      state.filterBtn = action.payload;
    },
    updateShowScenarioPrice : (state, action) => {
      state.showScenarioPrice = action.payload;
    },
  },
});

export const {
    updateFileUploadBtn, 
    updateBookmarkBtn,
    updateFilterBtn,
    updateShowScenarioPrice
} = BenchmarkReducers.actions;

export default BenchmarkReducers.reducer;
