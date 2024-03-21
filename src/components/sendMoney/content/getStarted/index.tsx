import React from 'react'

export default function GetStarted() {
  return (
    <div className='flex flex-col gap-8 justify-center items-center text-center w-screen main-bg-blue mt-40 text-white h-[535px]'>
      <h3 className='font-bold t30a39'>
        Ready to get started?
      </h3>

      <span className='font-bold t56a72 mb-4'>
        Sign up and save on your next transfer!
      </span>

      <button className='btn-blue'>
        Sign in and send
      </button>
    </div>
  )
}
