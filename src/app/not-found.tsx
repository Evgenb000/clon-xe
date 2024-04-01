import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div>
      <div className='flex justify-center items-center bg-gray-50 w-screen h-screen'>
        <div className='text-center w-[660px] p-6 -translate-y-40 bg-white rounded-2xl shadow-xl'>
          <h2 className='t30a39 font-bold'>Page not Found</h2>

          <span>
            This page is not developed due to lack of necessity.
            There is nothing interesting for development on this original page, just the layout design.
          </span>

          <div className='font-bold mt-4 t20a26'>You can visit these pages:</div>

          <div className='p-2 text-blue-400'>
            <Link href='/'>Home</Link>
          </div>
          <div className='p-2 text-blue-400'>
            <Link href='/SendMoney'>Send money</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
