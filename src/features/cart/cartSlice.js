import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;

      const itemPresentAtIndex = state.cartItems.findIndex(thisElement => {
        return thisElement.item.id === itemToAdd.id;
      });

      if (itemPresentAtIndex !== -1) {
        //item found
        const itemFoundObject = state.cartItems[itemPresentAtIndex];
        itemFoundObject.quantity += 1;
      } else {
        //item not found
        state.cartItems.push({item: itemToAdd, quantity: 1});
      }
    },
    clearCart: state => {
      state.cartItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

// cartItems: [
//   {
//     item: {name: 'sdfsd', price: 44},
//     quantity: 2,
// lineTotal:1000
//   },
// totalPrice:0
// ];
