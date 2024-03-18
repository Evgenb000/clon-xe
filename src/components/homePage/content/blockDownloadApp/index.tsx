import React from 'react'
import Image from 'next/image';
import appIphone from '@/images/homePage/appiPhones.svg';
import scanMe from '@/images/homePage/scanMe.svg';
import downloadAppStore from '@/images/homePage/downloadAppStore.svg';
import downloadGooglePlay from '@/images/homePage/downloadGooglePlay.svg';
import appStore from '@/images/homePage/appStore.svg';
import googlePlay from '@/images/homePage/googlePlay.svg';
import trustPilot from '@/images/homePage/trustPilot.svg';
import bgImage from '@/images/homePage/bgBlockDownloadApp.svg';
import Link from 'next/link';

export default function BlockDownloadApp() {
  return (
    <div className='w-[1200px] mb-20 bg'>
      <Image src={bgImage} alt='background image' className='absolute left-0 -z-10' />
      <div className='flex justify-center gap-[220px]'>
        <div>
          <Image src={appIphone} alt='Xe App Iphone' width={350} />
        </div>

        <div className='w-[350px] flex flex-col gap-4'>
          <h3 className='font-bold t24a31'>
            Download the Xe App
          </h3>

          <div>
            <span className='t16a27'>
              Check live rates, send money securely, set rate alerts, receive notifications and more.
            </span>
          </div>

          <div className='flex gap-3 items-center'>
            <Image src={scanMe} alt='scan me!' width={100} />

            <span className='t12a18'>Scan Me!</span>
          </div>

          <div className='flex gap-3'>
            <Link href='#'><Image src={downloadAppStore} alt='download AppStore' width={135} /></Link>
            <Link href='#'><Image src={downloadGooglePlay} alt='download Google Play' width={135} /></Link>
          </div>

          <div>
            <span className='font-bold t16a27'>
              Over 70 million downloads worldwide
            </span>
          </div>
        </div>
      </div>

      <div className='flex gap-60 justify-center items-center text-center mt-20'>
        <div>
          <Link href='#'><Image src={appStore} alt='App Store' width={135} /></Link>
        </div>
        <div>
          <Link href='#'><Image src={googlePlay} alt='Google PLay' width={135} /></Link>
        </div>
        <div>
          <Link href='#'><Image src={trustPilot} alt='TrustPilot' width={135} /></Link>
        </div>
      </div>
    </div>
  )
}
