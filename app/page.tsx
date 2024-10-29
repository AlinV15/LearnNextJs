import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/fonts';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';
import { rubik } from './ui/fonts';
import clsx from 'clsx';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
        <div className={styles.shape} />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal `}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <div
             className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
           />
          <Link
            href="/login"
            className={`flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors ${lusitana.className} hover:bg-blue-400 md:text-base`}
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src={"/hero-desktop.png"}
            width={1000}
            height={760}
            className='hidden lg:block'
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src={"/hero-mobile.png"}
            width={670}
            height={320}
            className='hidden sm:block lg:hidden'
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
        
      </div>
      <Image
         src={"/eu_nou.jpg"}
         width={200}
         height={300}
         className='border-1 border-black'
         alt='A photo with me'
         />
      <p className={`${rubik.className} antialiased`}>Aici este poza creatorului asta</p>
      {/* <div className={clsx(
       'border-2 border-orange-500 w-[200px] h-[60px]'
       {
        'bg-red-600': conditie = 'x',
        'bg-green-600': conditie = 'x',
       }
      )}></div> */}
          </main>
  );
}
