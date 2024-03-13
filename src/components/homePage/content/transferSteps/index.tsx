import React, { Component } from 'react';
import imgStepOne from '@/images/stepOne.svg';
import imgStepTwo from '@/images/stepTwo.svg';
import imgStepThree from '@/images/stepThree.svg';
import Image from 'next/image';

const steps = [
  {
    step: '1',
    title: 'Create account',
    description: 'It takes just a few minutes, and all you need is an email address.',
    imgUrl: imgStepOne
  },
  {
    step: '2',
    title: 'Enter details',
    description: 'Add recipient (you\'ll need their address, bank account/IBAN, swift/BIC) and payment information.',
    imgUrl: imgStepTwo
  },
  {
    step: '3',
    title: 'Confirm and send',
    description: 'Check the currencies and amount are correct, get the expected delivery date, and send your money transfer.',
    imgUrl: imgStepThree
  }
];
export default class TransferSteps extends Component {
  render() {
    return (
      <section className='mb-10'>
        <h3 className='t24a31 font-bold mb-6 text-center'>
          How to transfer money in 3 easy steps
        </h3>

        <div className='flex gap-20'>
          {steps.map(item => 
            <div key={item.step} className='w-80 h-80 border shadow-md p-6 rounded-lg flex flex-col items-center text-center gap-5'>
              <Image src={item.imgUrl} alt={item.title + ' image'} width={80} height={80}></Image>

              <h4 className='t20a26 font-bold'>  
                {item.step}. {item.title}
              </h4>

              <p className='t16a27'>
                {item.description}
              </p>
            </div>
          )}
        </div>

        <button className=''>
          Get Started
        </button>
      </section>
    )
  }
}
