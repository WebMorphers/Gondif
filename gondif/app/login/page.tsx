'use client'

import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import dynamic from 'next/dynamic';
const PhoneInput = dynamic(() => import('react-phone-number-input'), { ssr: false });

const Page = () => {
  const [value, setValue] = useState<string | undefined>(undefined); 

  return (
    <div className='flex flex-col p-9'>
      <h1 className='' >Enter your mobile number</h1>
      <div className='flex flex-col'> 
        <PhoneInput 
          defaultCountry="MA"
          value={value}
          onChange={(newValue: string | undefined) => setValue(newValue)}  
        />
        <div><button
  className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#9FE870] to-[#9FE870] active:scale-95"
>
  <span
    className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#9FE870] text-[#f1d5fe] rounded-[14px] bg-gradient-to-t from-[#9FE870] to-[#9FE870]"
  >
    Next</span>
</button>
</div>
      </div>
    </div>
  );
};

export default Page;
