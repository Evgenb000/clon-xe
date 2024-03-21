import React from 'react'
import imageFast from '@/images/sendMoney/fastTransfer.svg';
import imageFees from '@/images/sendMoney/fees.svg';
import imageSecury from '@/images/sendMoney/securyTransfer.svg';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    title: 'Fast transfers',
    icon: imageFast,
    description: 'Send money in seconds to your loved ones across the world.',
    linkName: 'Track your transfers',
    link: '#'
  },

  {
    title: 'Transparent Fees',
    icon: imageFees,
    description: 'We always strive to give you the best rate with simple fees.',
    linkName: 'See our fees',
    link: '#'
  },

  {
    title: 'Security',
    icon: imageSecury,
    description: 'We protect your money and data with legal compliance and policy.',
    linkName: 'About Xe Security',
    link: '#'
  }
]

export default function ChooseXe() {
  return (
    <div className='w-[1200px] flex justify-center items-center text-center flex-col mx-auto my-40 gap-10'>
      <h3 className='text-blue-500 t30a39'>
        Why choose Xe
      </h3>

      <span className='t56a72'>
        30+ Years of Excellence
      </span>

      <div className='flex justify-center items-center text-center gap-32'>
        {items.map((item, id) => (
          <div key={id} className='flex flex-col justify-center items-center text-center gap-4 w-[250px]'>
            <div className='w-20 h-20 rounded-full bg-blue-100 flex justify-center items-center'>
              <Image src={item.icon} alt={item.title} height={33.33} />
            </div>

            <div className='font-bold'>{item.title}</div>

            <div className=' opacity-60'>{item.description}</div>

            <div className='text-blue-500'>
              <Link href={item.link}>
                {item.linkName}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
