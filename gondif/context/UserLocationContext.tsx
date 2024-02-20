"use client"
import { createContext, useContext, useEffect, useState } from "react";

const UserLocationContext=createContext<any>(null);

export function UserLocationWraper({children}: Readonly<{
    children: React.ReactNode;
  }>) {

    const [userLocation,setUserLocation] = useState<any>(null)

    const getUserLocation=()=> { 
        navigator.geolocation.getCurrentPosition(function(props){
            setUserLocation({
            lat:props.coords.latitude,
            lng:props.coords.longitude
            })
        })}   

    useEffect(() => {
        getUserLocation()
      },[])
 

    return (
        <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
            {children}
        </UserLocationContext.Provider>
    )
}

export function useUserLocationContext(){
    return useContext(UserLocationContext)
}
