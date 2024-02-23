"use client"
import { createContext, useContext, useState } from "react";

export const NumberContext=createContext<any>(null);

export function NumberWraper({children}: Readonly<{
    children: React.ReactNode;
  }>) {

    const [phoneNumber,setPhoneNumber] =useState<any>('');
    const [otp,setOtp] =useState<any>('');
    const [confirmationResult,setconfirmationResult] =useState<any>(null);
    const [otpSent,setOtpSent] =useState<any>(false);
  
  
  
    return (
        <NumberContext.Provider value={{phoneNumber,setPhoneNumber,otp,setOtp}}>
            {children}
        </NumberContext.Provider>
    )
}

export function useNumberContext(){
    return useContext(NumberContext)
}
