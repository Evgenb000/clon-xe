import React from 'react';
import historicalImage from '@/images/homePage/historical.svg';
import calculatorImage from '@/images/homePage/calculator.svg';
import emailImage from '@/images/homePage/email.svg';
import Image from 'next/image';
import Link from 'next/link';

const currencyTools = [
  {text: 'Historical Currency Rates', image: historicalImage, link: '/currencytables'},
  {text: 'Travel Expenses Calculator', image: calculatorImage, link: '/'},
  {text: 'Currency Email Updates', image: emailImage, link: '/currencyemail'},
]

export default function CurrencyTools() {
  const [windowWidth, setWindowWidth] = React.useState<number>(0);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  return (
    <div className='flex flex-col justify-center items-center text-center w-[300px] md:w-[700px] lg:w-[1200px] mb-16 mt-16'>
      <h3 className='font-bold mb-10 t20a26'>Xe Currency Tools</h3>

      <div className='flex flex-col md:flex-row justify-center items-center text-center gap-4 lg:gap-44'>
        {currencyTools.map(tool => (
          windowWidth > 767
           ? <Link key={tool.text} href={tool.link}>
              <div className='w-[200px] h-[136px] flex justify-center items-center text-center flex-col shadow-md rounded-md p-3 hover:underline cursor-pointer'>
                <Image src={tool.image} alt={tool.text} />

                <span className='t16a24 mt-4'>{tool.text}</span>
              </div>
            </Link>
         : <Link key={tool.text} href={tool.link}>
            <div className='w-[300px] md:w-[200px] md:h-[136px] md:flex md:justify-center md:items-center md:text-center md:flex-col border rounded-md p-3 hover:underline cursor-pointer'>
              <span className='t16a24 mt-4'>{tool.text} &gt;</span>
            </div>
          </Link>
        ))}
      </div>

      <button className='btn-blue mt-12 w-[220px]'>
        <Link href='/MoreTools'>More Tools</Link>
      </button>
    </div>
  )
}
