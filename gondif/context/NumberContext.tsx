"use client"

import { createContext, useContext, useState } from "react";

const NumberContext = createContext<any>(null);

export function PhonenumberWraper({ children }: Readonly<{
    children: React.ReactNode;
}>) {

  const [phoneNumber,setPhoneNumber] =useState<any>('');
  const [otp,setOtp] =useState<any>('');
  const [confirmationResult,setconfirmationResult] =useState<any>(null);
  const [otpSent,setOtpSent] =useState<any>(false);




    return (
        <NumberContext.Provider 
        value={{ phoneNumber, setPhoneNumber,otp,setOtp,confirmationResult,setconfirmationResult,otpSent,setOtpSent }}>
            {children}
        </NumberContext.Provider>
    )
}

export function useNumberContext(){
    return useContext(NumberContext)
}