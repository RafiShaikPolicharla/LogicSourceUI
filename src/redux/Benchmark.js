import { createSlice } from '@reduxjs/toolkit';
const FILTERS_DATA = {
  skulineItem: '',
  pricingSourceType: '',
  date:'',
  supplier: [],
  client: '',
  clientSpend: [1,4],
  clientIndustry: "",
  contractDuration: ''
}
export const BenchmarkReducers = createSlice({
  name: 'benchmark_pricing',
  initialState: {
    fileUploadBtn: false,
    bookmarkBtn: false,
    filterBtn: false,
    showScenarioPrice: false,
    fileUploaded: false,
    createScenarioPrice: false,
    scenarioNameSelected: "",
    loading: false,
    data: {summaryData: {}, tableData: {data: [], file_name: ""}},
    filtersData: {
      skulineItem: '',
      pricingSourceType: '',
      date:'',
      supplier: [],
      client: '',
      clientSpend: [1,4],
      clientIndustry: "",
      contractDuration: ''
    }
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
    updateCreateScenarioPrice: (state, action) => {
      state.createScenarioPrice = action.payload;
    },
    updateFileUploaded: (state, action) => {
      state.fileUploaded = action.payload;
    },
    updateScenarioNameSelected: (state, action) => {
      state.scenarioNameSelected = action.payload;
    },
    updateTableData: (state, action) => {
      state.data = action.payload;
    },
    updateLoading: (state, action) => {
      state.loading = action.payload;
    },
    updateFiltersData: (state, action) => {
      state.filtersData = action.payload;
    },
    resetFilterData: (state, ) => {
      state.filtersData = FILTERS_DATA;
    }
  },
});

export const {
    updateFileUploadBtn, 
    updateBookmarkBtn,
    updateFilterBtn,
    updateShowScenarioPrice,
    updateFileUploaded,
    updateTableData,
    updateCreateScenarioPrice,
    updateScenarioNameSelected,
    updateLoading,
    updateFiltersData,
    resetFilterData
} = BenchmarkReducers.actions;

export default BenchmarkReducers.reducer;
