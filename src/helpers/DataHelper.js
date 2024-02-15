import {increment, decrement} from '../features/counter/counterSlice';

class DataHelper {
  store = undefined;

  getStore = () => {
    return this.store;
  };

  setStore = storeRef => {
    this.store = storeRef;
  };

  incrementValue = () => {
    this.store.dispatch(increment());
  };

  decrementValue = () => {
    this.store.dispatch(decrement());
  };

  getIncrementValue = () => {
    console.log('============');
    console.log(this.store.getState().counter);
    console.log('============');
  };

  getAccessToken = () => {
    return this.store.getState().user?.data?.accessToken;
  };
}

export default new DataHelper();
