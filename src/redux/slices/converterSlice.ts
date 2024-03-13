'use client'

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCurrencyData = createAsyncThunk(
  'converter/fetchCurrencyData',
  async (_, { dispatch }) => {
    try {
      const response = await axios.get('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_EXYn5P9w8k5BCiu4SZyFqUABKANMPufl6lCj7AQg');
    const data = response.data;
      dispatch(setDataApi(data));
      dispatch(setCurrencies(Object.keys(data?.data || {})));
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      throw error;
    }
  }
);

interface ConverterState {
  amount: string;
  warning: string;
  dataApi: { data: {[currency: string]: number }} | null;
  currencies: string[];
  fromCurrency: string;
  toCurrency: string;
  showFromInput: boolean;
  showToInput: boolean;
  handleConvertOpen: boolean;
  quotient: number;
}

const initialState: ConverterState = {
  amount: '$1.00',
  warning: '',
  dataApi: null,
  currencies: [],
  fromCurrency: 'USD',
  toCurrency: 'EUR',
  showFromInput: false,
  showToInput: false,
  handleConvertOpen: false,
  quotient: 0,
};

const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    setAmount(state, action: PayloadAction<string>) {
      console.log(action.payload + ' setAmount')
      state.amount = action.payload;
    },
    setWarning(state, action: PayloadAction<string>) {
      state.warning = action.payload;
    },
    setDataApi(state, action: PayloadAction<{ data: any } | null>) {
      state.dataApi = action.payload;
    },
    setCurrencies(state, action: PayloadAction<string[]>) {
      state.currencies = action.payload;
    },
    setFromCurrency(state, action: PayloadAction<string>) {
      state.fromCurrency = action.payload;
    },
    setToCurrency(state, action: PayloadAction<string>) {
      state.toCurrency = action.payload;
    },
    setShowFromInput(state, action: PayloadAction<boolean>) {
      state.showFromInput = action.payload;
    },
    setShowToInput(state, action: PayloadAction<boolean>) {
      state.showToInput = action.payload;
    },
    setHandleConvertOpen(state, action: PayloadAction<boolean>) {
      state.handleConvertOpen = action.payload;
    },
    setQuotient(state, action: PayloadAction<number>) {
      state.quotient = action.payload;
    },
  },
});

export const {
  setAmount,
  setWarning,
  setDataApi,
  setCurrencies,
  setFromCurrency,
  setToCurrency,
  setShowFromInput,
  setShowToInput,
  setHandleConvertOpen,
  setQuotient,
} = converterSlice.actions;

export default converterSlice.reducer;
