"use client"

import { NumberWraper, useNumberContext, } from '@/context/NumberContext';
import React from 'react';

const OtpCode = () => {
    const { phoneNumber, setPhoneNumber} = useNumberContext() || {};
    const {otp,setOtp} = useNumberContext() || {};
    const {confirmationResult,setconfirmationResult} = useNumberContext() || {};
    const {otpSent,setOtpSent} = useNumberContext() || {};

    const maskPhoneNumber = (phoneNumber: string) => {
        const maskedPart = phoneNumber?.slice(0, -4).replace(/\d/g, '*');
        const lastFourDigits = phoneNumber?.slice(-4);
        return maskedPart + lastFourDigits; 
    };

    return (
        <NumberWraper>
            <div>
                <p>Enter the 4-digit code sent to you at {maskPhoneNumber(phoneNumber)}</p>
            </div>
        </NumberWraper>
    );
};

export default OtpCode;
