'use client'

import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import dynamic from 'next/dynamic';
const PhoneInput = dynamic(() => import('react-phone-number-input'), { ssr: false });

const Page = () => {
  const [value, setValue] = useState<string | undefined>(undefined); 

  return (
    <div className='flex flex-col p-9 gap-5'>
      <h1 className='' >Enter your mobile number</h1>
      <div className='flex flex-col gap-5'> 
        <PhoneInput 
        international
        countryCallingCodeEditable={false}
          defaultCountry="MA"
          value={value}
          onChange={(newValue: string | undefined) => setValue(newValue)}  
        />
        <div><button
  className="max-sm:w-full relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#9FE870] to-[#9FE870] active:scale-95"
>
  <span
    className="text-center justify-center text-xl font-bold w-full h-full flex items-center gap-2 px-8 py-3 bg-[#9FE870] text-[#163300] rounded-[14px] bg-gradient-to-t from-[#9FE870] to-[#9FE870]"
  >
    Next</span>
</button>
</div>
<div><button
  className="max-sm:w-full relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#163300] to-[#163300] active:scale-95"
>
  <span
    className="text-center justify-center text-lg   w-full h-full flex items-center gap-2 px-8 py-3 bg-[#163300] text-[#FFFFFF] rounded-[14px] bg-gradient-to-t from-[#163300] to-[#163300]"
  >
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1328_30771)">
<rect x="0.654297" y="0.662109" width="21" height="21" rx="10.5" fill="#1877F2"/>
<path d="M15.2415 14.1973L15.707 11.1621H12.7949V9.19336C12.7949 8.36279 13.201 7.55273 14.5053 7.55273H15.8301V4.96875C15.8301 4.96875 14.6283 4.76367 13.4799 4.76367C11.0805 4.76367 9.51367 6.21768 9.51367 8.84883V11.1621H6.84766V14.1973H9.51367V21.535C10.0489 21.619 10.5965 21.6621 11.1543 21.6621C11.7121 21.6621 12.2597 21.619 12.7949 21.535V14.1973H15.2415Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1328_30771">
<rect x="0.654297" y="0.662109" width="21" height="21" rx="10.5" fill="white"/>
</clipPath>
</defs>
</svg>
 Continue with Facebook</span>
</button>
</div>
<div><button
  className="max-sm:w-full relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#163300] to-[#163300] active:scale-95"
>
  <span
    className="text-center justify-center text-lg    w-full h-full flex items-center gap-2 px-8 py-3 bg-[#163300] text-[#FFFFFF] rounded-[14px] bg-gradient-to-t from-[#163300] to-[#163300]"
  >
    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1328_30687)">
<path d="M20.3469 11.2281C20.3469 10.3659 20.2782 9.73671 20.1294 9.08423H10.457V12.9759H16.1345C16.0201 13.943 15.402 15.3994 14.0283 16.3781L14.0091 16.5084L17.0673 18.92L17.2792 18.9416C19.2251 17.1122 20.3469 14.4207 20.3469 11.2281Z" fill="#4285F4"/>
<path d="M10.457 21.4816C13.2385 21.4816 15.5736 20.5494 17.2792 18.9416L14.0283 16.3781C13.1584 16.9957 11.9908 17.4268 10.457 17.4268C7.73274 17.4268 5.42054 15.5975 4.5963 13.0691L4.47549 13.0795L1.29549 15.5847L1.25391 15.7023C2.94799 19.1279 6.42777 21.4816 10.457 21.4816Z" fill="#34A853"/>
<path d="M4.59652 13.0692C4.37903 12.4167 4.25317 11.7175 4.25317 10.9952C4.25317 10.2727 4.37903 9.57363 4.58507 8.92114L4.57931 8.78218L1.35947 6.23682L1.25412 6.28782C0.555909 7.70935 0.155273 9.30566 0.155273 10.9952C0.155273 12.6846 0.555909 14.2809 1.25412 15.7024L4.59652 13.0692Z" fill="#FBBC05"/>
<path d="M10.457 4.56331C12.3915 4.56331 13.6963 5.41388 14.4404 6.12468L17.3478 3.23504C15.5622 1.54555 13.2385 0.508545 10.457 0.508545C6.42777 0.508545 2.94799 2.86217 1.25391 6.28774L4.58486 8.92106C5.42054 6.39265 7.73273 4.56331 10.457 4.56331Z" fill="#EB4335"/>
</g>
<defs>
<clipPath id="clip0_1328_30687">
<rect width="20.2035" height="21.0454" fill="white" transform="translate(0.154297 0.508545)"/>
</clipPath>
</defs>
</svg>
Continue with Google</span>
</button>
</div>
<div><button
  className="max-sm:w-full relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#163300] to-[#163300] active:scale-95"
>
  <span
    className="text-center justify-center text-lg   w-full h-full flex items-center gap-2 px-8 py-3 bg-[#163300] text-[#FFFFFF] rounded-[14px] bg-gradient-to-t from-[#163300] to-[#163300]"
  >
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1328_30747)">
<path d="M14.7076 0.0105319C14.6629 -0.0394508 13.0516 0.030262 11.6495 1.5521C10.2473 3.07263 10.463 4.81676 10.4946 4.86149C10.5262 4.90621 12.4939 4.97592 13.7501 3.20679C15.0062 1.43767 14.7524 0.06183 14.7076 0.0105319ZM19.0667 15.4434C19.0035 15.3171 16.0085 13.8202 16.2873 10.9423C16.5662 8.06301 18.4905 7.27381 18.5208 7.18831C18.551 7.10282 17.7355 6.1492 16.8714 5.66647C16.2369 5.32613 15.5346 5.13114 14.8155 5.09562C14.6734 5.09167 14.1802 4.97066 13.1661 5.24819C12.4979 5.43103 10.9918 6.02293 10.5775 6.0466C10.1618 6.07028 8.92542 5.36 7.59562 5.17191C6.74459 5.00749 5.84227 5.34421 5.19644 5.60334C4.55193 5.86114 3.32604 6.5951 2.46844 8.54574C1.61084 10.4951 2.05937 13.5835 2.38031 14.5437C2.70125 15.5025 3.2024 17.0744 4.05473 18.2213C4.81237 19.5156 5.81728 20.414 6.23687 20.7192C6.65647 21.0243 7.84027 21.2269 8.66104 20.8073C9.32133 20.4022 10.513 20.1694 10.9839 20.1865C11.4535 20.2036 12.3795 20.389 13.3278 20.8954C14.0789 21.1545 14.7892 21.0467 15.5008 20.7573C16.2124 20.4666 17.2423 19.3644 18.4445 17.1296C18.9009 16.0905 19.1087 15.5289 19.0667 15.4434Z" fill="white"/>
<path d="M14.7076 0.0105319C14.6629 -0.0394508 13.0516 0.030262 11.6495 1.5521C10.2473 3.07263 10.463 4.81676 10.4946 4.86149C10.5262 4.90621 12.4939 4.97592 13.7501 3.20679C15.0062 1.43767 14.7524 0.06183 14.7076 0.0105319ZM19.0667 15.4434C19.0035 15.3171 16.0085 13.8202 16.2873 10.9423C16.5662 8.06301 18.4905 7.27381 18.5208 7.18831C18.551 7.10282 17.7355 6.1492 16.8714 5.66647C16.2369 5.32613 15.5346 5.13114 14.8155 5.09562C14.6734 5.09167 14.1802 4.97066 13.1661 5.24819C12.4979 5.43103 10.9918 6.02293 10.5775 6.0466C10.1618 6.07028 8.92542 5.36 7.59562 5.17191C6.74459 5.00749 5.84227 5.34421 5.19644 5.60334C4.55193 5.86114 3.32604 6.5951 2.46844 8.54574C1.61084 10.4951 2.05937 13.5835 2.38031 14.5437C2.70125 15.5025 3.2024 17.0744 4.05473 18.2213C4.81237 19.5156 5.81728 20.414 6.23687 20.7192C6.65647 21.0243 7.84027 21.2269 8.66104 20.8073C9.32133 20.4022 10.513 20.1694 10.9839 20.1865C11.4535 20.2036 12.3795 20.389 13.3278 20.8954C14.0789 21.1545 14.7892 21.0467 15.5008 20.7573C16.2124 20.4666 17.2423 19.3644 18.4445 17.1296C18.9009 16.0905 19.1087 15.5289 19.0667 15.4434Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1328_30747">
<rect width="21.0454" height="21.0454" fill="white"/>
</clipPath>
</defs>
</svg>
Continue with Apple</span>
</button>
</div>

      </div>
    </div>
  );
};

export default Page;
