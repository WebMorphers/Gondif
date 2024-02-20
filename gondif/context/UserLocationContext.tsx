"use client"
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserLocationContext=createContext<any>(null);

export function UserLocationWraper({children}: Readonly<{
    children: React.ReactNode;
  }>) {

    const [userLocation,setUserLocation] = useState<any>(null)

    const [userAddress, setUserAddress] = useState<any>(null);

    const apiUrl = 'https://api.geoapify.com/v1/geocode/reverse';
    const apiKey = '7a5a446135ca4bf799b0005045503d28';
    const latitude = userLocation?.lat;
    const longitude = userLocation?.lng;
    const language = 'fr';
    function getuserlocalfromxy(){
            
        axios.get(apiUrl, {
          params: {
              lat: latitude,
              lon: longitude,
              lang: language,
              apiKey: apiKey
          }
      })
      .then( response => {
          
          setUserAddress(response.data);
          console.log(userAddress);
          
      })
      .catch(error => {
          console.error('Error:', error);
      })
    
      }
    const getUserLocation=()=> { 
        navigator.geolocation.getCurrentPosition(function(props){
            setUserLocation({
            lat:props.coords.latitude,
            lng:props.coords.longitude
            })
        })}   
        
        

    useEffect(() => {
        getUserLocation();
      },[])

      useEffect(()=>{
        getuserlocalfromxy();
      },[userLocation])
 
      
      


    return (
        <UserLocationContext.Provider value={{userLocation,setUserLocation,userAddress,setUserAddress}}>
            {children}
        </UserLocationContext.Provider>
    )
}

export function useUserLocationContext(){
    return useContext(UserLocationContext)
}
