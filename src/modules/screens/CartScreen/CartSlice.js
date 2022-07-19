import {createSlice} from '@reduxjs/toolkit';

const initAppState = {
  cartData: {},
  isCartNewThing: false,
  totalAmount: 0,
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
      };
    },
    setTotalAmount(state, action) {
      return {
        ...state,
        totalAmout: action.payload,
      };
    },
  },
});

export default cartSlice.reducer;
export const {setCartData, setCartNewThing, setTotalAmount} = cartSlice.actions;
