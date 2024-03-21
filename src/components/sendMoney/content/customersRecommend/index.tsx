import React from 'react';
import iconStarActive from '@/images/homePage/starActive.svg';
import Image from 'next/image';

const items = [
  {rating: 5, title: 'Quick and easy transaction', description: 'Quick and easy transaction', name: 'Chris'},
  {rating: 5, title: 'Easy to use', description: 'Easy to use. Toby was very helpful.', name: 'Rajiv'},
  {rating: 5, title: 'The app is so easy to use', description: 'The app is so easy to use, fast and good rates', name: 'Carole Quinn'}
]

const activeStar = (
  <Image src={iconStarActive} alt='rating star' width={28} />
);

const blockRating5 = (
  <div className='flex'>
    {activeStar}
    {activeStar}
    {activeStar}
    {activeStar}
    {activeStar}
  </div>
);

export default function CustomersRecommend() {
  return (
    <div className='flex flex-col justify-center items-center mt-32 gap-10'>
      <h3 className='t30a39 text-blue-500'>What people are saying</h3>

      <span className='t56a72 font-bold'>
        67,777 customers recommend Xe
      </span>

      <div className='flex gap-10 justify-center'> 
        {items.map((item, id) => (
          <div key={id} className='flex flex-col gap-8 rounded-3xl shadow-md px-6 py-12 w-[350px] h-[300px] bg-white'>
            <div>{item.rating === 5 && blockRating5}</div>
            <p className='font-bold t18a32'>{item.title}</p>
            <p className='t14a23'>{item.description}</p>
            <p className='t14a21'>{item.name}</p>
          </div>
        ))}
      </div>  
    </div>
  )
}
