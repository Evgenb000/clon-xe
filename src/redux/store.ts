import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import converterSlice from './slices/converterSlice';

export const store = configureStore({
  reducer: {
    converter: converterSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;