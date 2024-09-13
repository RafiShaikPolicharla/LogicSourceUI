import { createSlice } from '@reduxjs/toolkit';

export const CostDrivers = createSlice({
    name: 'benchmark_pricing',
    initialState: {
        selectedLevels: {
            l3: "",
            l4: "",
            l5: "",
        },
        data: {barChartData: [], lineChartData: {}}
    },
    reducers: {
        updateSelectedLevels: (state, action) => {
            state.selectedLevels = action.payload;
        },
        updateData: (state, action) => {
            state.data = action.payload;
        }
        
    },
});

export const {
    updateSelectedLevels,
    updateData,
} = CostDrivers.actions;

export default CostDrivers.reducer;
