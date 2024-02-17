'use client';

import { signOut, useSession } from 'next-auth/react';
import MapboxMap from '@/app/Map/MapBoxMap';
import { useEffect, useState } from 'react';
import { UserLocationContext } from '@/context/UserLocationContext';

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
    <div className="h-screen">
      <UserLocationContext.Provider value={{UserLocation,setUserLocation}}>
      <a href="/login">login</a>
      <div >{session?.data?.user?.name } </div>
      <button onClick={() => signOut()}>Logout</button>
      <MapboxMap />
      </UserLocationContext.Provider>
    </div>
  );
}