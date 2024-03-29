import Link from 'next/link'
import React from 'react'

export default function Subscription() {
  return (
    <div className='flex flex-col gap-16 justify-center text-center items-center bg-slate-100 w-screen py-14'>
      <h3 className='font-bold t24a31 px-5 md:p-0'>Daily market updates straight to your inbox</h3>

      <Link href='/signUp' className='btn-blue w-[320px] md:w-[220px]'>Sign up</Link>
    </div>
  )
}
