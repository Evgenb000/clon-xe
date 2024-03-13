'use client'

import Image from "next/image";
import React, { useState, useEffect } from "react";
import imageFromTo from "@/images/fromTo.svg";
import iconInfo from "@/images/iconInfo.svg";

const inputClass = "w-80 h-14 shadow-sm outline-1 outline-blue-300 border rounded-md p-3";

export default function Converter() {
  const [amount, setAmount] = useState('$1.00');
  const [warning, setWarning] = useState('');
  const [dataApi, setDataApi] = useState<{ data: any } | null>(null);
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [showFromInput, setShowFromInput] = useState(false);
  const [showToInput, setShowToInput] = useState(false);
  const [quotient, setQuotient] = useState(0);
  const [handleConvertOn, setHandleConvertOn] = useState(false);

  const handleFromCurrencyChange = (currency: string) => {
    console.log(currency);
    setFromCurrency(currency);
    setShowFromInput(false);
    handleConvertOn && handleConvert();
  };
  
  const handleToCurrencyChange = (currency: string) => {
    console.log(currency);
    setToCurrency(currency);
    setShowToInput(false);
    handleConvertOn && handleConvert();
  };
  
  const handleFromBlur = () => {
    setTimeout(() => {
      setShowFromInput(false);
    }, 75)
  };
  
  const handleToBlur = () => {
    setTimeout(() => {
      setShowToInput(false);
    }, 75)
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_EXYn5P9w8k5BCiu4SZyFqUABKANMPufl6lCj7AQg');
        const data = await response.json();
        setDataApi(data);
        setCurrencies(Object.keys(data?.data || {}));
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    };

    fetchData();
  }, []);

  const handleChangeAmount = (event: { target: { value: string; }; }) => {
    const inputValue =
      event.target.value.includes('$')
        ? event.target.value
        : '$' + event.target.value;

    setAmount(inputValue);

    if (!isValidAmount(inputValue)) {
      setWarning('Please enter a valid amount');
    } else {
      setWarning('');
    }

    handleConvertOn && handleConvert();
  }

  const isValidAmount = (value: string) => {
    return /^\$?\d+(\.\d{0,2})?$/.test(value);
  }

  const handleBlur = (event: { target: { value: any; }; }) => {
    const inputValue = event.target.value;

    if (warning.length === 0) {
      if (inputValue.endsWith('.')) {
        setAmount(inputValue + '00');
      }

      if (!inputValue.includes('.')) {
        setAmount(inputValue + '.00');
      }

      if (inputValue === '$') {
        setWarning('');
        setAmount('$1.00');
      }
    }
  }

  const onFocusHandler = () => {
    setAmount('$');
    setWarning('');
  }

  const handleConvert = () => {
    if (!fromCurrency || !toCurrency) {
      console.error('Please select both From and To currencies');
      return;
    }

    let fromRate: number = 0;
    let toRate: number = 0  

    if (dataApi) {
      fromRate = dataApi.data[fromCurrency];
      toRate = dataApi.data[toCurrency];
    }

    const amountValue = parseFloat(amount.replace('$', ''));
    setQuotient(amountValue * toRate / fromRate);
    setHandleConvertOn(true);
  }

  return (
    <div className=" min-h-64">
      <div className="grid grid-rows-2 grid-flow-col items-end justify-center text-left gap-4 mb-10">
        <div className="font-bold">Amount</div>

        <div className="relative">
          <input
            className={inputClass}
            value={amount}
            onChange={handleChangeAmount}
            onFocus={onFocusHandler}
            onBlur={handleBlur}
          ></input>
          {warning && <div className="text-xs text-red-500 absolute top-16 left-5 mt-1">{warning}</div>}
        </div>

        <div className="font-bold">From</div>

        <div className="relative" onBlur={handleFromBlur}>
          <input
            className={inputClass}
            value={fromCurrency}
            readOnly
            onClick={() => setShowFromInput(true)}
          ></input>

          {showFromInput && (
            <div className="absolute bg-white border rounded-md shadow-md mt-1 overflow-y-auto max-h-40">
              {currencies.map(currency => (
                <button key={currency} className="p-2 cursor-pointer" onClick={() => handleFromCurrencyChange(currency)}>{currency}</button>
              ))}
            </div>
          )}
        </div>

        <div></div>

        <div className="flex justify-center items-center w-14 h-14 border rounded-full cursor-pointer">
          <Image src={imageFromTo} alt="From To" width={20} height={20} />
        </div>
        
        <div className="font-bold">To</div>

        <div className="relative" onBlur={handleToBlur}>
          <input
            className={inputClass}
            value={toCurrency}
            readOnly
            onClick={() => setShowToInput(true)}
          ></input>

          {showToInput && (
            <div className="absolute bg-white border rounded-md shadow-md mt-1 overflow-y-auto max-h-40">
              {currencies.map(currency => (
                <button key={currency} className="p-2 cursor-pointer" onClick={() => handleToCurrencyChange(currency)}>{currency}</button>
              ))}
            </div>
          )}
        </div>
      </div>

      {quotient > 0 &&
        <div className=" text-left pl-11">
          <div className="t16a27">
            {amount} {fromCurrency} = 
          </div>
          
          <div className="t30a39 font-bold">
            {quotient} {toCurrency}
          </div>
        </div>
      }

      <div className="">
        <div className="flex justify-between m-16 mt-10">
          <div className="flex items-center gap-3 text-left bg-blue-50 t11a16 p-3 rounded-md">
            <Image src={iconInfo} alt="Info icon" width={16} height={16} />
            <div>
              We use the mid-market rate for our Converter. This is for informational purposes only.
              <br />
              You won’t receive this rate when sending money.&nbsp;
              <p className="underline text-blue-500 inline hover:no-underline cursor-pointer">
                Login to view send rates
              </p>
            </div>
          </div>

          <button
            className={`t16a24 font-bold text-white h-12 px-6 rounded-md bg-blue-600 hover:bg-blue-500 transition-colors duration-300
              ${warning !== '' ? 'bg-gray-300 hover:bg-gray-300 hover:cursor-default' : ''}`}
              onClick={warning !== '' ? () => {} : handleConvert}
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}