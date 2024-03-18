import React from 'react';
import historicalImage from '@/images/historical.svg';
import calculatorImage from '@/images/calculator.svg';
import emailImage from '@/images/email.svg';
import Image from 'next/image';

const currencyTools = [
  {text: 'Historical Currency Rates', image: historicalImage},
  {text: 'Travel Expenses Calculator', image: calculatorImage},
  {text: 'Currency Email Updates', image: emailImage},
]

export default function CurrencyTools() {
  return (
    <div className='flex flex-col justify-center items-center text-center w-[1200px] mb-16 mt-16'>
      <h3 className='font-bold mb-10 t20a26'>Xe Currency Tools</h3>

      <div className='flex justify-center items-center text-center gap-44'>
        {currencyTools.map(tool => (
          <div key={tool.text} className='w-[200px] h-[136px] flex justify-center items-center text-center flex-col shadow-md rounded-md p-3 hover:underline cursor-pointer'>
            <Image src={tool.image} alt={tool.text} />

            <span className='t16a24 mt-4'>{tool.text}</span>
          </div>
        ))}
      </div>

      <button className='btn-blue mt-12 w-[220px]'>More Tools</button>
    </div>
  )
}
