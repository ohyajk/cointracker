import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import CoinSlice from './Coins/CoinSlice';

const store = configureStore({
  reducer: {
    coins: CoinSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
