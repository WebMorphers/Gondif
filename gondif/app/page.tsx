'use client';

import { signOut, useSession } from 'next-auth/react';
import MapboxMap from '@/app/Map/MapBoxMap';
import { useEffect, useState } from 'react';

export default function Home() {
  const session = useSession();

  
  const [UserLocation,setUserLocation] = useState<GeolocationPosition | null>(null);

  useEffect(()=> {
    getUserLocation()
  },[])


  const getUserLocation=()=> { navigator.geolocation.getCurrentPosition(function(props){
    console.log(props);
  })}


  return (
    <div className="h-screen">
      <a href="/login">login</a>
      <div >{session?.data?.user?.name }</div>
      <button onClick={() => signOut()}>Logout</button>
      <MapboxMap />
    </div>
  );
}