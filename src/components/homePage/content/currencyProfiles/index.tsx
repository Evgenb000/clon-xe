import React from 'react'

const currencies = [
  'USD - US Dollar',
  'EUR - Euro',
  'GBP - British Pound',
  'CAD - Canadian Dollar',
  'AUD - Australian Dollar',
  'JPY - Japanese Yen',
  'INR - Indian Rupee',
  'NZD - New Zealand Dollar',
  'CHF - Swiss Franc',
  'ZAR - South African Rand',
  'RUB - Russian Ruble',
  'BGN - Bulgarian Lev'
]


export default function CurrencyProfiles() {
  return (
    <div className='w-screen text-center main-bg-blue text-white p-4 pt-10 md:p-10 lg:p-20 flex flex-col justify-center items-center gap-10'>
      <h3 className='font-bold t24a31'>
        Currency Profiles
      </h3>

      <div className='grid grid-flow-col grid-rows-12 md:grid-rows-6 lg:grid-rows-3 text-left w-[320px] md:w-[700px] lg:w-[900px] xl:w-[1200px] text-blue-500 gap-4'>
        {currencies.map((currency, id) => (
          <div key={id}>
            {currency}
          </div>
        ))}
      </div>
    </div>
  )
}
