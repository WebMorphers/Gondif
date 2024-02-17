'use client';

import { signOut, useSession } from 'next-auth/react';
import MapboxMap from '@/app/Map/MapBoxMap';
import { useEffect, useState } from 'react';
import { UserLocationContext } from '@/context/UserLocationContext';
import DropdownMenu from '@/components/dropdownMenu';

export default function Home() {
  const session = useSession();

  
  const [UserLocation,setUserLocation] = useState<any>();

  useEffect(()=> {
    getUserLocation()
  },[])


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
      { UserLocation ? <div className='absolute z-50 h-[25%] w-full bg-white bottom-0 rounded-t-2xl flex justify-center'>
        <div className='mt-1 bg-[#C1C4C2] h-1 rounded-full w-[10%] text-center'></div>

        
        <div>

        </div>

      </div>

        : null}
      </UserLocationContext.Provider>
    </div>
  );
}