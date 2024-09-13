import { createSlice } from '@reduxjs/toolkit';

export const DataSteward = createSlice({
    name: 'benchmark_pricing',
    initialState: {
        fileUploaded: false,
        data: { fileName: "", summaryData: [], tableData: [] }
    },
    reducers: {
        updateFileUploaded: (state, action) => {
            state.fileUploaded = action.payload;
        },
        updateTableData: (state, action) => {
            state.data = action.payload;
        }
    },
});

export const {
    updateFileUploaded,
    updateTableData,
} = DataSteward.actions;

export default DataSteward.reducer;
