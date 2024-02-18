'use client';

import { signOut, useSession } from 'next-auth/react';
import MapboxMap from '@/app/Map/MapBoxMap';
import { useEffect, useState } from 'react';
import { UserLocationContext } from '@/context/UserLocationContext';
import DropdownMenu from '@/app/components/dropDown/dropdownMenu';
import AutoCompleteAdress from './components/AutoCompleteAdress';

export default function Home() {
  const session = useSession();

  
  const [UserLocation,setUserLocation] = useState<any>();

  const getUserLocation=()=> { navigator.geolocation.getCurrentPosition(function(props){
    console.log(props);
    setUserLocation({
      lat:props.coords.latitude,
      lng:props.coords.longitude
    })
  })}


  return (
    <div className="h-screen relative w-full z-40">
      <UserLocationContext.Provider value={{UserLocation,setUserLocation}}>

        <DropdownMenu />
      <MapboxMap />
      { UserLocation  ? <div className='absolute z-50 h-[25%] w-full bg-white bottom-0 rounded-t-2xl flex flex-col items-center justify-center'>
        <div className='mt-1 bg-[#C1C4C2] z-50 h-1 rounded-full w-[10%] text-center'></div>

        
        <div className='flex flex-col px-5 my-3 h-full w-full justify-between'>
          <h1 className='font-bold text-[##163300] text-xl'>Your Position</h1>
          <div className='mx-1 '>
            <div className='flex justify-between pr-1'>

            <AutoCompleteAdress />

            </div>
            <div className='mx-1'>
              <button>
                Confirm Position
              </button>
            </div>
          </div>
        </div>

      </div>

        : null}
      </UserLocationContext.Provider>
    </div>
  );
}