import { createSlice } from '@reduxjs/toolkit';

const initAppState = {
  cartData: [{id: 1, name: 'card data'}],
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
  },
});

export default cartSlice.reducer;
export const {setCartData} = cartSlice.actions;
