import imgStepOne from '@/images/homePage/stepOne.svg';
import imgStepTwo from '@/images/homePage/stepTwo.svg';
import imgStepThree from '@/images/homePage/stepThree.svg';
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

export default function TransferSteps() {
  return (
    <section className='mb-10 mt-28 justify-center text-center px-4'>
      <h3 className='t24a31 font-bold mb-6 text-center'>
        How to transfer money in 3 easy steps
      </h3>

      <div className='flex gap-10 lg:gap-20 mb-16'>
        {steps.map(item => 
          <div key={item.step} className='w-48 lg:w-80 lg:h-80 border shadow-md p-6 rounded-lg flex flex-col items-center text-center gap-5'>
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

      <button className='btn-blue w-56'>
        Get Started
      </button>
    </section>
  )
}

