import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers';

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer: {
      cart: cartReducer
    }
  });

export default store;