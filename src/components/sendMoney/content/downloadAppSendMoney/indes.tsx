import React from 'react';
import downloadAppImage from '@/images/sendMoney/downloadAppSendMoney.svg';
import Image from 'next/image';

export default function DownloadAppSendMoney() {
  return (
    <div className='w-screen main-bg-blue h-[700px]'>
      <div className='flex justify-center items-center gap-[130px] text-white h-[700px]'>
        <div className='flex flex-col w-[580px] gap-8'>
          <h3 className='font-bold t56a72'>
            Send money online, at home or on the go
          </h3>

          <span className='t18a32'>
            The Xe app has everything you need for international money transfers. It&apos;s easy, secure, and has no hidden fees.
          </span>

          <button className='btn-blue w-48'>Download the app</button>
        </div>

        <div className='relative w-[356px]'>
          <Image
              src={downloadAppImage}
              alt='Preview app'
              width={356}
              className='absolute -top-80'
            ></Image>
        </div>
      </div>
    </div>
  )
}
