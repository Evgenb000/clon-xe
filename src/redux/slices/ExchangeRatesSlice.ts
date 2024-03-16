'use client'

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchCurrencyBYData = createAsyncThunk(
  'converter/fetchCurrencyData',
  async (_, { dispatch }) => {
    try {
      const today = new Date();
      today.setDate(today.getDate() - 2);
      const beforeYesterday = today.toISOString().split('T')[0];

      const response = await axios.get(`https://api.freecurrencyapi.com/v1/historical?apikey=fca_live_EXYn5P9w8k5BCiu4SZyFqUABKANMPufl6lCj7AQg&date=${beforeYesterday}`);
      const data = response.data;
      const currencyData = data.data[beforeYesterday];
      
      if (currencyData) {
        dispatch(setDataApiBY(currencyData));
        dispatch(setCurrenciesBY(Object.values(currencyData)));
      } else {
        console.error('No currency data found for the specified date:', beforeYesterday);
      }
    } catch (error) {
      console.error('Error executing request:', error);
      throw error;
    }
  }
);


interface ExchangeRatesState {
  dataApiBY: { [currency: string]: number } | null;
  currenciesBY: string[];
  fromCurrencyBY: string;
  toCurrencyBY: string;
  quotientBY: number;
  toggle: boolean;
  showedCurrencies: string[]
  showAddCurrencies: boolean;
  removeCurrencies: string;
  editCurrenciesOpen: boolean;
}

const initialState: ExchangeRatesState = {
  dataApiBY: null,
  currenciesBY: [],
  fromCurrencyBY: 'USD',
  toCurrencyBY: 'EUR',
  quotientBY: 0,
  toggle: false,
  showedCurrencies: ["EUR", "GBP", "JPY", "CAD", "HUF"],
  showAddCurrencies: false,
  removeCurrencies: '',
  editCurrenciesOpen: false,
};

const exchangeRatesSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    setDataApiBY(state, action: PayloadAction<{ data: any } | null>) {
      state.dataApiBY = action.payload;
    },
    setCurrenciesBY(state, action: PayloadAction<string[]>) {
      state.currenciesBY = action.payload;
    },
    setFromCurrencyBY(state, action: PayloadAction<string>) {
      state.fromCurrencyBY = action.payload;
    },
    setToCurrencyBY(state, action: PayloadAction<string>) {
      state.toCurrencyBY = action.payload;
    },
    setQuotientBY(state, action: PayloadAction<number>) {
      state.quotientBY = action.payload;
    },
    setToggle(state, action: PayloadAction<boolean>) {
      state.toggle = action.payload;
    },
    setShowedCurrencies(state, action: PayloadAction<string>) {
      state.showedCurrencies.push(action.payload);
    },
    setShowAddCurrencies(state, action: PayloadAction<boolean>) {
      state.showAddCurrencies = action.payload;
    },
    setRemoveCurrencies(state, action: PayloadAction<string>) {
      state.showedCurrencies = state.showedCurrencies.filter((currency: string) => currency !== action.payload);
    },
    setEditCurrenciesOpen(state, action: PayloadAction<boolean>) {
      state.editCurrenciesOpen = action.payload;
    }
  },
});

export const {
  setDataApiBY,
  setCurrenciesBY,
  setFromCurrencyBY,
  setToCurrencyBY,
  setQuotientBY,
  setToggle,
  setShowedCurrencies,
  setShowAddCurrencies,
  setRemoveCurrencies,
  setEditCurrenciesOpen,
} = exchangeRatesSlice.actions;

export default exchangeRatesSlice.reducer;
