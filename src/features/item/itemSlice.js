import {createSlice} from '@reduxjs/toolkit';
import {addToCart} from '../cart/cartSlice';

const initialState = {
  data: [],
  items: [],
  isFetching: false,
  failure: false,
  errorMessage: undefined,
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.isFetching = false;
      state.items = action.payload;
      state.failure = false;
      state.errorMessage = undefined;
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.failure = true;
      state.errorMessage = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(addToCart, (state, action) => {
      if (!state.data) {
        state.data = [action.payload];
      } else {
        state.data.push(action.payload);
      }
    });
  },
});

export const {request, success, failure} = itemSlice.actions;

export default itemSlice.reducer;
