import { createSlice } from '@reduxjs/toolkit';

const initAppState = {
  cardData: [],
};

const cartSlice = createSlice({
  name: 'slice/cart',
  initialState: initAppState,
  reducers: {
    setCardData(state, action) {
      return {
        ...state,
        cardData: action.payload,
      };
    },
  },
});

export default cartSlice.reducer;
export const {setCardData} = cartSlice.actions;
