import React, { useState } from 'react';
import firebase from '../firebase';
import 'react-phone-number-input/style.css';

const PhoneAuth = () => {
    const PhoneInput = dynamic(() => import('react-phone-number-input'), { ssr: false });

  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState('');

  const handleSendCode = () => {
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('send-code-button', {
      size: 'invisible',
    });

    firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
      .then((verificationId) => {
        setVerificationId(verificationId);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleVerifyCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);

    firebase.auth().signInWithCredential(credential)
      .then((userCredential) => {
       })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
     <PhoneInput 
        international
        countryCallingCodeEditable={false}
          defaultCountry="MA"
          value={value}
          onChange={setValue(newValue)}  
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
      <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <button id="send-code-button" onClick={handleSendCode}>Send Code</button>
      <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
      <button onClick={handleVerifyCode}>Verify Code</button>
    </>
  );
};

export default PhoneAuth;
