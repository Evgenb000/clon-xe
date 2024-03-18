import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import iconStarActive from '@/images/starActive.svg';
import iconStarDisabled from '@/images/starDisabled.svg';
import comments from '@/static/comments.json';

const activeStar = (
  <Image src={iconStarActive} alt='rating star' width={28} />
);

const disabledStart = (
  <Image src={iconStarDisabled} alt='rating star' width={28} />
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

const blockRating4 = (
  <div className='flex'>
    {activeStar}
    {activeStar}
    {activeStar}
    {activeStar}
    {disabledStart}
  </div>
);

export default function Recommendations() {
  return (
    <div className='flex flex-col justify-center items-center text-center gap-8 my-16 main-bg-blue text-white w-screen py-20'>
      <h3 className='font-bold t24a31'>
        Recommended by 65,000+ verified customers
      </h3>

      <div className='w-[1050px]'>
        <Swiper
        modules={[Pagination]}
        spaceBetween={80}
        slidesPerView={3}
        pagination={{ clickable: true }}
        className='h-[250px] p-2'
      >
        {comments.map((item) => (
          <SwiperSlide
            key={item.id}
            className='flex flex-col items-center text-left py-2 px-5 rounded-md relative bg-white text-black'
          >
            <div>
              {item.rating === 5
                ? blockRating5
                : blockRating4
              }
            </div>
            <div className='t18a21 font-bold mt-2'>{item.title}</div>
            <br />
            <div className='t14a21'>{item.comment}</div>
            <br />
            <div className='t12a18 absolute bottom-6'>{item.name}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  )
}
