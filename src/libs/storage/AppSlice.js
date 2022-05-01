import { createSlice } from "@reduxjs/toolkit";
const initAppState = {
  appConfig: {
    appName: "FashionDream",
  },
  isFirstRunning: true,
  appNotification: [],
  safeAreaInsets: { top: 0, bottom: 0, left: 0, right: 0 },
};
const appSlice = createSlice({
  name: "slice/app",
  initialState: initAppState,
  reducers: {
    setAppConfig(state, action) {
      return {
        ...state,
        appConfig: Object.assign({}, state.appConfig, action.payload),
      };
    },
    setFirstRunning(state, action) {
      return {
        ...state,
        isFirstRunning: action.payload,
      };
    },
    setAppNotification(state, action) {
      return {
        ...state,
        appNotification: action.payload,
      };
    },
    setSafeAreaInsets(state, action) {
      return {
        ...state,
        safeAreaInsets: action.payload,
      };
    },
  },
});
export default appSlice.reducer;
export const {
  setAppConfig,
  setAppNotification,
  setFirstRunning,
  setSafeAreaInsets,
} = appSlice.actions;
