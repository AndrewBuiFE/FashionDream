import { createSlice } from '@reduxjs/toolkit';

const initAppState = {
  shipData: {},
  cardData: {},
};

const checkoutSlice = createSlice({
  name: 'slice/checkout',
  initialState: initAppState,
  reducers: {
    setShipData(state, action) {
        return {
            ...state,
            shipData: action.payload,
        }
    },
    setCardData(state, action) {
      return {
        ...state,
        cardData: action.payload,
      };
    },
  },
});

export default checkoutSlice.reducer;
export const {setCardData, setShipData} = checkoutSlice.actions;
