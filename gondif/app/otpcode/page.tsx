"use client"

import { NumberWraper, useNumberContext, } from '@/context/NumberContext';
import React from 'react';
import { OtpInput } from 'reactjs-otp-input';

 
const OtpCode = () => {
    const { phoneNumber, setPhoneNumber} = useNumberContext() || {};
    const {otp,setOtp} = useNumberContext() || {};
    const {confirmationResult,setconfirmationResult} = useNumberContext() || {};
    const {otpSent,setOtpSent} = useNumberContext() || {};
    const lastFourDigits = phoneNumber ? phoneNumber.slice(-4).padStart(phoneNumber.length, '*') : '';
    const [otptext, setOtptext] = React.useState('');
     
    const handleChange = (otp: any) => setOtptext(otp);

      return (
        <NumberWraper>
            <div className='m-3  gap-7 flex flex-col items-start justify-center'>
            <p>Enter the 4-digit code sent to you at <br /> {lastFourDigits}</p>

                 <OtpInput value={otp} onChange={handleChange} 
                  numInputs={6}
                    separator={<span style={{ width: "5px" }}></span>}
                    isInputNum={true}
                    shouldAutoFocus={true}
         inputStyle={{
          border: "1px solid transparent",
          borderRadius: "8px",
          width: "45px",
          backgroundColor:"#EEEEEE",
          height: "45px",
          fontSize: "15px",
          color: "#000",
          fontWeight: "400",
          caretColor: "blue"
        }}
        focusStyle={{
          border: "1px solid #2D2E2E",
          outline: "none"
        }} />

<p className='text-[#2D2E2E] bg-[#EEEEEE] rounded-full p-2 text-sm'>I haven’t received a code</p>


                        </div>
        </NumberWraper>
    );
};

export default OtpCode;