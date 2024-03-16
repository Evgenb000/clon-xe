import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import {
  setToggle,
  setShowAddCurrencies,
  setShowedCurrencies,
  fetchCurrencyBYData,
  setEditCurrenciesOpen,
  setRemoveCurrencies 
} from '@/redux/slices/ExchangeRatesSlice';
import sendIcon from '@/images/iconSend.svg';
import chartUp from '@/images/chartUp.svg';
import chartDown from '@/images/chartDown.svg';

export default function ExchangeRates() {
  const {
    dataApi,
    currencies
  } = useSelector((state: RootState) => state.converter);
  const {
    dataApiBY,
    toggle,
    showedCurrencies,
    showAddCurrencies,
    editCurrenciesOpen
  } = useSelector((state: RootState) => state.exchange);
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchCurrencyBYData());
  }, [dispatch]);

  function round(number: number, precision: number): number {
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  return (
    <section className='mb-10 mt-28 justify-center text-center w-[1200px] h-max'>
      <h3 className='t24a31 font-bold mb-6 text-center'>
        Xe Live Exchange Rates
      </h3>

      <div className='flex mb-16 justify-start items-start flex-col'>
        <div className='flex justify-between text-center items-center w-[1152px] h-14'>
          <div className="flex gap-2 text-center justify-center items-center w-40">
            Inverse
          
            <div
              className={`flex h-6 w-[50px] items-center text-center cursor-pointer p-[4px] rounded-full transition-all duration-300 
              ${!toggle ? 'justify-start bg-gray-300' : 'justify-end bg-green-600 opacity-100'}`}
              onClick={() => dispatch(setToggle(!toggle))}
            >
              <motion.div className='h-4 w-4 rounded-full bg-white shadow-sm shadow-black' />
            </div>
          </div>
          <div className='w-40'>Amount</div>
          <div className='w-40'>Change (24h)</div>
          <div className='w-40'>Chart (24h)</div>
          <div className='w-40'>
            <button
              className='t14a21 border-[2px] text-blue-600 border-blue-600 bg-white w-14 h-9 rounded-md hover:bg-blue-200 transition-colors duration-300'
              onClick={() => dispatch(setEditCurrenciesOpen(!editCurrenciesOpen))}
            >
              {!editCurrenciesOpen ? 'Edit' : 'Done'}
            </button>
          </div>
        </div>
        <div className='flex justify-between text-center items-center w-[1152px] h-14 main-bg-blue text-white rounded-md'>
          <div className='w-40'>Dollar</div>
          <div className='w-40'>1</div>
          <div className='w-40'></div>
          <div className='w-40'></div>
          <div className='w-40'></div>
        </div>
          {
            currencies
              .filter(curr => showedCurrencies.includes(curr))
              .map((filteredCurr, id) => {
                const todaysAmount = round((dataApi?.data[filteredCurr]) as number, 4);
                const prevAmount = round((dataApiBY?.[filteredCurr]) as number, 4);
                const changes = toggle
                  ? (((prevAmount - todaysAmount) / todaysAmount) * 100).toFixed(2)
                  : (((todaysAmount - prevAmount) / prevAmount) * 100).toFixed(2);

                return (
                  <>
                    <div key={id} className='flex justify-between text-center items-center w-[1152px] h-14'>
                      <div key={filteredCurr} className='w-40'>
                        {filteredCurr}
                      </div>

                      <div className='w-40'>
                        {toggle
                          ? (1 / todaysAmount).toFixed(4) + ' USD'
                          : todaysAmount.toFixed(4)
                        }
                      </div>

                      {parseFloat(changes) >= 0
                        ? <div className='w-40 text-green-500'>
                            +{changes}%
                          </div> 
                        : <div className='w-40 text-red-500'>
                            {changes}%
                          </div>
                      }

                      <div className='w-40 flex justify-center'>
                      {parseFloat(changes) >= 0
                        ? <Image src={chartUp} alt='Chart`s up' /> 
                        : <Image src={chartDown} alt='Chart`s down' /> 
                      }
                      </div>

                      <div className='w-40 flex justify-center'>
                        <button className='btn-blue w-20 flex text-center items-center justify-center'>
                          <Image src={sendIcon} alt='send icon' width={24} height={24} />

                          Send
                        </button>
                      </div>

                      {editCurrenciesOpen
                        && <button
                          className='flex bg-red-700 rounded-full w-5 h-5 items-center justify-center text-center text-white'
                          onClick={() => dispatch(setRemoveCurrencies(filteredCurr))}
                        >
                          -
                        </button>
                        
                      }
                    </div>
                    <hr className='bg-black w-[1152px] my-1' />
                  </>
                );
              })
          }    
      </div>

      <div className='relative flex justify-center text-center'>
        <button
          className='btn-blue'
          onClick={() => dispatch(setShowAddCurrencies(!showAddCurrencies))}
          onBlur={() => {
            setTimeout(() => {
              dispatch(setShowAddCurrencies(!showAddCurrencies))
            }, 100);
          }}
        >
          Add currency
        </button>


        {showAddCurrencies
          && <div className='absolute bg-white border top-12 border-black'>
            {currencies
              .filter(curr => !showedCurrencies.includes(curr))
              .map(curr => (
                <div key={curr} onClick={() => dispatch(setShowedCurrencies(curr))}>
                  {curr}
                </div>
            ))}</div>
        }
      </div>
    </section>
  )
}

