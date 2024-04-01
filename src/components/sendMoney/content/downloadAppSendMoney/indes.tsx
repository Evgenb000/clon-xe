import React from 'react';
import downloadAppImage from '@/images/sendMoney/downloadAppSendMoney.svg';
import Image from 'next/image';

export default function DownloadAppSendMoney() {
  return (
    <div className='w-screen main-bg-blue md:h-[700px] py-10 md:py-0 px-4 lg:px-0'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-[130px] text-white md:h-[700px]'>
        <div className='flex flex-col w-[320px] lg:w-[580px] gap-8 text-center md:text-start'>
          <h3 className='font-bold t40a52'>
            Send money online, at home or on the go
          </h3>

          <span className='t18a32'>
            The Xe app has everything you need for international money transfers. It&apos;s easy, secure, and has no hidden fees.
          </span>

          <button className='btn-blue w-48'>Download the app</button>
        </div>

        <div className='md:relative w-[356px]'>
          <Image
              src={downloadAppImage}
              alt='Preview app'
              width={356}
              className='md:absolute md:-top-80'
            ></Image>
        </div>
      </div>
    </div>
  )
}
