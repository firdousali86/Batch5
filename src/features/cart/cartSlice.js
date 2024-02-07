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
  },
});

// Action creators are generated for each case reducer function
export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;

// cartItems: [
//   {
//     item: {name: 'sdfsd', price: 44},
//     quantity: 2,
//   },
// ];
