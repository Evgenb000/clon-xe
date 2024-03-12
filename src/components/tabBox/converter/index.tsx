import Image from "next/image";
import imageFromTo from "@/images/fromTo.svg";
import React from "react";

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
    <div>
      <div className="grid grid-rows-2 grid-flow-col items-end justify-center text-left gap-4 mb-10">
        <div className="font-bold">Amount</div>
        <div className="relative">
          <input
            className="w-80 h-16 border rounded-md p-3"
            value={amount}
            onChange={(event) => handleChangeAmount(event)}
            onFocus={() => onFocusHandler()}
            onBlur={(event) => handleBlur(event)}
          ></input>
          {warning && <div className="text-xs text-red-500 absolute top-16 left-5 mt-1">{warning}</div>}
        </div>
        <div className="font-bold">From</div>
        <input className="w-80 h-16 border rounded-md"></input>
        <div></div>
        <div className="flex justify-center items-center"><Image src={imageFromTo} alt="From To" width={20} height={20} /></div>
        <div className="font-bold">To</div>
        <input className="w-80 h-16 border rounded-md"></input>
      </div>

      <div className="flex justify-between m-16 mt-10">
        <div className="text-left bg-blue-50 t11a16">
          We use the mid-market rate for our Converter. This is for informational purposes only.
          <br />
          You won’t receive this rate when sending money. Login to view send rates
        </div>

        <button className="t16a24 font-bold text-white h-12 px-6 rounded-md bg-blue-500">
          Convert
        </button>
      </div>
    </div>
  );
}
