import { createSlice } from '@reduxjs/toolkit';

const initAppState = {
  cartData: {},
  isCartNewThing: false,
};

const cartSlice = createSlice({
  name: 'slice/cart',
  initialState: initAppState,
  reducers: {
    setCartData(state, action) {
      return {
        ...state,
        cartData: action.payload,
      };
    },
    setCartNewThing(state, action) {
      return {
        ...state,
        isCartNewThing: action.payload,
      }
    }
  },
});

export default cartSlice.reducer;
export const {setCartData, setCartNewThing} = cartSlice.actions;
