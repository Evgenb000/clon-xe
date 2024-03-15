import React from 'react'
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import {
  setAmount,
  setWarning,
  setFromCurrency,
  setToCurrency,
  setShowFromInput,
  setShowToInput,
  setHandleConvertOpen,
  setQuotient,
  fetchCurrencyData,
} from "@/redux/slices/converterSlice";
import { RootState } from '@/redux/store';

export default function ExchangeRates() {
  const {
    amount,
    warning,
    dataApi,
    fromCurrency,
    toCurrency,
    showFromInput,
    showToInput,
    handleConvertOpen,
    quotient,
    currencies
  } = useSelector((state: RootState) => state.converter);
  const [toogle, setToogle] = React.useState(true);

  const neededCurr = ['USD', 'AUD']

  // console.log(dataApi.data.filter(curr => neededCurr.includes(curr)));
  if (dataApi) {
    let dat = dataApi.data;
    console.log(neededCurr in dat)
    console.log(dat)
  }

  return (
    <section className='mb-10 mt-28 justify-center text-center w-[1200px]'>
      <h3 className='t24a31 font-bold mb-6 text-center'>
        Xe Live Exchange Rates
      </h3>

      <div className='flex gap-1 mb-16 justify-start items-start flex-col'>
        <div className='flex justify-between gap-40 text-center items-center w-[1152px] h-14'>
          <div className="flex gap-2 text-center items-center">
            Inverse
          
            <div
              className={`flex h-6 w-[50px] items-center text-center cursor-pointer p-[4px] rounded-full transition-all duration-300 
              ${toogle ? 'justify-start bg-gray-300' : 'justify-end bg-green-600 opacity-100'}`}
              onClick={() => setToogle(!toogle)}
            >
              <motion.div className='h-4 w-4 rounded-full bg-white shadow-sm shadow-black' />
            </div>
          </div>
          <div>Amount</div>
          <div>Change (24h)</div>
          <div>Chart (24h)</div>
          <button className='t14a21 border-[2px] text-blue-600 border-blue-600 bg-white w-14 h-9 rounded-md hover:bg-blue-200 transition-colors duration-300'>Edit</button>
        </div>
        <div className='flex justify-between gap-40 text-center items-center w-[1152px] h-14'>
          <div>Dollar</div>
          <div>1</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='flex justify-between gap-40 text-center items-center w-[1152px] h-14'>
          {/* {console.log(currencies.filter(curr => {
            neededCurr.includes(curr);
          }))} */}
        </div>
      </div>
    </section>
  )
}

