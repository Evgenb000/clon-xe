import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import converterSlice from './slices/converterSlice';
import ExchangeRatesSlice from './slices/ExchangeRatesSlice';

export const store = configureStore({
  reducer: {
    converter: converterSlice,
    exchange: ExchangeRatesSlice
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;