import BlockSendMoney from '@/components/sendMoney'
import React from 'react';
import imageTrustpilot from '@/images/sendMoney/buttonTrustpilot.svg';
import imageSecureTransfer from '@/images/sendMoney/buttonSecureTransfers.svg';
import Image from 'next/image';
import ChooseXe from '@/components/sendMoney/content/chooseXe';
import DownloadAppSendMoney from '@/components/sendMoney/content/downloadAppSendMoney/indes';
import CustomersRecommend from '@/components/sendMoney/content/customersRecommend';
import SendMoneySteps from '@/components/sendMoney/content/sendMoneySteps';
import GetStarted from '@/components/sendMoney/content/getStarted';
import SendAndRecieve from '@/components/sendMoney/content/sendAndReceive';

export default function SendMoney() {
  return (
    <div className='bg-gray-100 pb-40'>
      <div className='w-screen flex justify-center items-center text-center text-white main-bg-blue'>
        <div className='my-40 w-[320px] md:w-[700px] lg:w-[1200px] flex flex-col lg:flex-row lg:justify-center lg:items-center text-left gap-20'>
          <div className='w-[300px] md:w-[500px] flex flex-col gap-8'>
            <h2 className=' t30a39 md:t64a76'>The fast and trusted way to send money</h2>

            <p className='t18a32'>Millions of people check our international rates and send money online to 200 countries in 100 currencies.</p>

            <div className='flex gap-4'>
              <div>
                <Image src={imageTrustpilot} alt='Trustpilot' />
              </div>

              <div>
                <Image src={imageSecureTransfer} alt='Secure Transfer' />
              </div>
            </div>
          </div>

          <div>
            <BlockSendMoney />
          </div>
        </div>
      </div>
      
      <ChooseXe />
      <DownloadAppSendMoney />
      <CustomersRecommend />
      <SendMoneySteps />
      <GetStarted />
      <SendAndRecieve />
    </div>
  )
}
