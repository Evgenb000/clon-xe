import React from 'react'
import Image from 'next/image';

const services = ['shopify', 'ClearBooks', 'XERO', 'vistaprint'
];

export default function BlockDataApi() {
  return (
    <div className='flex justify-center items-center text-center w-full main-bg-blue flex-col mb-8 text-white p-16 gap-10'>
      <h3 className='font-bold t24a31'>Xe Currency Data API</h3>
      <span className='t16a27'>Powering commercial grade rates at 300+ companies worldwide</span>
      <div className='flex gap-8'>
        {services.map(service => (
          <div key={service} className='font-bold t24a31'>{service}</div>
        ))}
      </div>
      <button className='btn-blue'>See our API plans</button>
    </div>
  )
}
