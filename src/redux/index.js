import { createSlice } from '@reduxjs/toolkit';

export const AppReducers = createSlice({
  name: 'logisource_app',
  initialState: {
    value: 0,
    userData: {
      userLogged: false,
      userName: "Demo User",
      accessToken: null,
      refreshToken: null,
    },
    loading: false, 
    sidebarToggle: false,
    currentSidebarTab: ""
  },
  reducers: {
    setUserState : (state, action) => {
      state.user = action.payload;
    },
    updateLoading : (state, action) => {
      state.loading = action.payload;
    },
    updateSidebarToggle : (state, action) => {
      state.sidebarToggle = action.payload;
    },
    updateCurrentSidebarTab : (state, action) => {
      state.currentSidebarTab = action.payload;
    }
  },
});

export const {
  setUserState,
  updateLoading,
  updateSidebarToggle,
  updateCurrentSidebarTab
} = AppReducers.actions;

export default AppReducers.reducer;
