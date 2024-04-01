'use client'

import Image from 'next/image';
import React from 'react';
import imageBankAccount from '@/images/sendMoney/bankAccount.svg'
import imageCard from '@/images/sendMoney/card.svg'
import imageCashPickup from '@/images/sendMoney/cashPickup.svg'
import imageMobileWallet from '@/images/sendMoney/mobileWallet.svg'
import imageWireTransfer from '@/images/sendMoney/wireTransfer.svg'

const send = [
  {image: imageBankAccount, title: 'Direct Debit ACH', description: 'Direct Debit, or Automated Clearing House (ACH) payments take funds directly from your bank account.'},
  {image: imageWireTransfer, title: 'Wire Transfer', description: 'Wire transfers will move money by transferring from your bank to ours. We usually receive money in 24 hours.'},
  {image: imageCard, title: 'Debit or Credit Card', description: 'Card payments typically take less than 24 hours. However, card payments come with a small additional fee.'}
]

const recieve = [
  {image: imageBankAccount, title: 'Bank Account', description: 'Transfer directly to your recipients bank account, this typically takes up to 3 days and has no additional fees.'},
  {image: imageMobileWallet, title: 'Mobile Wallet', description: 'Send to your loved one’s mobile wallet using trusted providers. Your money will be deposited in minutes.'},
  {image: imageCashPickup, title: 'Cash Pickup', description: 'Your recipient can receive their cash in person, at over 500,000 Xe cash pickup locations worldwide.'}
]

export default function SendAndRecieve() {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className='flex flex-col justify-center items-center mt-40 gap-10'>
      <div className='flex'>
          <div
            onClick={() => setToggle(false)}
            className={`p-2 border cursor-pointer rounded-l-xl w-[180px] md:w-[200px] text-center ${toggle ? 'bg-white' : 'bg-green-400'}`}
          >
            Way to send
          </div>
          <div
            onClick={() => setToggle(true)}
            className={`p-2 border cursor-pointer rounded-r-xl w-[180px] md:w-[200px] text-center ${!toggle ? 'bg-white' : 'bg-green-400'}`}
          >
            Way to recieve
          </div>
      </div>

      <h3 className='font-bold t40a52 text-center'>
        Send money to over 200 countries in 100+ currencies
      </h3>

      <div className='flex flex-col lg:flex-row gap-10'>
        {!toggle
         ? send.map((item, id) => (
            <div key={id} className='flex flex-col justify-center items-center text-center gap-4 w-[355px] h-[380px] bg-white rounded-xl p-4'>
              <div><Image src={item.image} alt={item.title}></Image></div>
              <div className='font-bold t24a31'>{item.title}</div>
              <div>{item.description}</div>
            </div>
         ))
         : recieve.map((item, id) => (
            <div key={id} className='flex flex-col justify-center items-center text-center gap-4 w-[355px] h-[380px] bg-white rounded-xl p-4'>
              <div><Image src={item.image} alt={item.title}></Image></div>
              <div className='font-bold t24a31'>{item.title}</div>
              <div>{item.description}</div>
            </div>
         ))
        }
      </div>
    </div>
  )
}
