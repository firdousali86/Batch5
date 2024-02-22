import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
  movies: [],
  isFetching: false,
  failure: false,
  errorMessage: undefined,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.isFetching = false;
      state.movies = action.payload;
      state.failure = false;
      state.errorMessage = undefined;
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.failure = true;
      state.errorMessage = action.payload;
    },
  },
});

export const {request, success, failure} = movieSlice.actions;

export default movieSlice.reducer;
