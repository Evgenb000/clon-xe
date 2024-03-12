import Image from "next/image";
import imageFromTo from "@/images/fromTo.svg";
import React from "react";
import iconInfo from "@/images/iconInfo.svg";

const inputClass = "w-80 h-14 shadow-sm outline-1 outline-blue-300 border rounded-md p-3";

export default function Converter() {
  const [amount, setAmount] = React.useState('$1.00');
  const [warning, setWarning] = React.useState('');

  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
  
    setAmount(inputValue);
  
    if (!isValidAmount(inputValue)) {
      setWarning('Please enter a valid amount');
    } else {
      setWarning('');
    }
  }

  const isValidAmount = (value: string) => {
    return /^\$?\d+(\.\d{0,2})?$/.test(value);
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
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

  return (
    <div className=" h-64">
      <div className="grid grid-rows-2 grid-flow-col items-end justify-center text-left gap-4 mb-10">
        <div className="font-bold">Amount</div>
        <div className="relative">
          <input
            className={inputClass}
            value={amount}
            onChange={(event) => handleChangeAmount(event)}
            onFocus={() => onFocusHandler()}
            onBlur={(event) => handleBlur(event)}
          ></input>
          {warning && <div className="text-xs text-red-500 absolute top-16 left-5 mt-1">{warning}</div>}
        </div>
        <div className="font-bold">From</div>

        <input className={inputClass}></input>

        <div></div>

        <div className="flex justify-center items-center w-14 h-14 border rounded-full cursor-pointer">
          <Image src={imageFromTo} alt="From To" width={20} height={20} />
        </div>

        <div className="font-bold">To</div>

        <input className={inputClass}></input>
      </div>

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
            ${warning !== '' ? 'bg-gray-300' : ''}`}
        >
          Convert
        </button>
      </div>
    </div>
  );
}
