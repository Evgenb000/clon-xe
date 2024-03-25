import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import imgStepOne from '@/images/homePage/stepOne.svg';
import imgStepTwo from '@/images/homePage/stepTwo.svg';
import imgStepThree from '@/images/homePage/stepThree.svg';
import Image from 'next/image';
import 'swiper/swiper-bundle.css';

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
  const [windowWidth, setWindowWidth] = React.useState<number>(0);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileSwiper = windowWidth < 768 ? true : false

  return (
    <section className='mb-10 mt-[500px] md:mt-28 justify-center text-center px-4'>
      <h3 className='t24a31 font-bold mb-6 text-center'>
        How to transfer money in 3 easy steps
      </h3>

      {!mobileSwiper
        ? <div
            className='flex gap-10 lg:gap-20 mb-16'
          >
            {steps.map(item => 
              <div
                key={item.step}
                className='w-48 lg:w-80 lg:h-80 border shadow-md p-6 rounded-lg flex flex-col items-center text-center gap-5'
              >
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

          : <Swiper
              slidesPerView={1}
              spaceBetween={50}
              className='w-[300px] h-[360px] justify-center items-center mb-16'
            >
              {steps.map(item => 
                <SwiperSlide
                  key={item.step}
                >
                  <div className='h-[360px] border shadow-md p-6 rounded-lg flex flex-col justify-center items-center text-center gap-5'>
                    <Image src={item.imgUrl} alt={item.title + ' image'} width={80} height={80}></Image>

                    <h4 className='t20a26 font-bold'>  
                      {item.step}. {item.title}
                    </h4>

                    <p className='t16a27'>
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
        }

      <button className='btn-blue w-56'>
        Get Started
      </button>
    </section>
  )
}

