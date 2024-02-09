import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: {},
  },
  reducers: {
    login: (state, action) => {
      state.data = action.payload;
    },
    logout: state => {
      state.data = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout} = userSlice.actions;

export default userSlice.reducer;
