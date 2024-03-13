import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import imageFromTo from "@/images/fromTo.svg";
import iconInfo from "@/images/iconInfo.svg";
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

const inputClass = "w-80 h-14 shadow-sm outline-1 outline-blue-300 border rounded-md p-3";

export default function Converter() {
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
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchCurrencyData());
  }, [dispatch]);

  const handleFromCurrencyChange = (currency: string) => {
    console.log(currency);
    dispatch(setFromCurrency(currency));
    dispatch(setShowFromInput(false));
    handleConvertOpen && handleConvert();
  };
  
  const handleToCurrencyChange = (currency: string) => {
    console.log(currency);
    dispatch(setToCurrency(currency));
    dispatch(setShowToInput(false));
    handleConvertOpen && handleConvert();
  };
  
  const handleFromBlur = () => {
    setTimeout(() => {
      dispatch(setShowFromInput(false));
    }, 75)
  };
  
  const handleToBlur = () => {
    setTimeout(() => {
      dispatch(setShowToInput(false));
    }, 75)
  };

  const handleChangeAmount = (event: { target: { value: string; }; }) => {
    const inputValue =
      event.target.value.includes('$')
        ? event.target.value
        : '$' + event.target.value;

    dispatch(setAmount(inputValue));

    if (!isValidAmount(inputValue)) {
      dispatch(setWarning('Please enter a valid amount'));
    } else {
      dispatch(setWarning(''));
    }

    handleConvertOpen && handleConvert();

    console.log(amount);
  }

  const isValidAmount = (value: string) => {
    return /^\$?\d+(\.\d{0,2})?$/.test(value);
  }

  const handleBlur = (event: { target: { value: any; }; }) => {
    const inputValue = event.target.value;

    if (warning.length === 0) {
      if (inputValue.endsWith('.')) {
        dispatch(setAmount(inputValue + '00'));
      }

      if (!inputValue.includes('.')) {
        dispatch(setAmount(inputValue + '.00'));
      }

      if (inputValue.endsWith('.0')) {
        dispatch(setAmount(inputValue + '0'));
      }

      if (inputValue === '$') {
        dispatch(setWarning(''));
        dispatch(setAmount('$1.00'));
      }
    }
  }

  const onFocusHandler = () => {
    dispatch(setAmount('$'));
    dispatch(setWarning(''));
  }

  const handleConvert = () => {
    if (!fromCurrency || !toCurrency) {
      console.error('Please select both From and To currencies');
      return;
    }

    let fromRate: number = 0;
    let toRate: number = 0;

    if (dataApi) {
      fromRate = dataApi.data[fromCurrency];
      toRate = dataApi.data[toCurrency];
    }

    const amountValue = parseFloat(amount.replace('$', ''));
    dispatch(setQuotient(amountValue * toRate / fromRate));
    dispatch(setHandleConvertOpen(true));
  }

  return (
    <div className="min-h-64">
      <div className="grid grid-rows-2 grid-flow-col items-end justify-center text-left gap-4 mb-10">
        <div className="font-bold">Amount</div>

        <div>
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

        <div onBlur={handleFromBlur}>
          <input
            className={inputClass}
            value={fromCurrency}
            readOnly
            onClick={() => dispatch(setShowFromInput(true))}
          ></input>

          {showFromInput && (
            <div className="absolute bg-white border rounded-md shadow-md mt-1 overflow-y-auto max-h-40">
              {currencies.map((currency: string) => (
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

        <div onBlur={handleToBlur}>
          <input
            className={inputClass}
            value={toCurrency}
            readOnly
            onClick={() => dispatch(setShowToInput(true))}
          ></input>

          {showToInput && (
            <div className="absolute bg-white border rounded-md shadow-md mt-1 overflow-y-auto max-h-40">
              {currencies.map((currency: string) => (
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

      <div>
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
            className={`btn-blue
              ${warning !== '' ? 'btn-disabled hover:btn-disabled-hover' : ''}`}
              onClick={warning !== '' ? () => {} : handleConvert}
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}