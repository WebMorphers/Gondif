import React from 'react';
import { PhonenumberWraper, useNumberContext } from '@/context/NumberContext';  

const Page = () => {
    const { phoneNumber, setPhoneNumber, otp, setOtp, confirmationResult, setConfirmationResult, otpSent, setOtpSent } = useNumberContext();

    const maskPhoneNumber = (phoneNumber: string) => {
        const maskedPart = phoneNumber.slice(0, -4).replace(/\d/g, '*');
        const lastFourDigits = phoneNumber.slice(-4);
        return maskedPart + lastFourDigits;
    };

    return (
        <PhonenumberWraper>
            <div>
                <p>Enter the 4-digit code sent to you at {maskPhoneNumber(phoneNumber)}</p>
            </div>
        </PhonenumberWraper>
    );
};

export default Page;
