import { createSlice } from '@reduxjs/toolkit';

const initAppState = {
  isColorFocus: false,
  isSizeFocus: false,
  colorIdFocus: 0,
  sizeIdFocus: 0,
};

const productSlice = createSlice({
  name: 'slice/cart',
  initialState: initAppState,
  reducers: {
    setColorFocus(state, action) {
      return {
        ...state,
        isColorFocus: action.payload,
      };
    },
    setSizeFocus(state, action) {
      return {
        ...state,
        isSizeFocus: action.payload,
      };
    },
    setColorIdFocus(state, action) {
      return {
        ...state,
        colorIdFocus: action.payload,
      };
    },
    setSizeIdFocus(state, action) {
      return {
        ...state,
        sizeIdFocus: action.payload,
      };
    },
  },
});

export default productSlice.reducer;
export const {setColorFocus, setSizeFocus, setColorIdFocus, setSizeIdFocus} = productSlice.actions;
