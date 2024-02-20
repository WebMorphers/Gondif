"use client"

import { CoordinatesWraper, useCoordinatesContext } from '@/context/CoordinatesContext';
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserLocationWraper, useUserLocationContext } from '@/context/UserLocationContext';

const MAPBOX_RETRIEVE_URL="https://api.mapbox.com/search/searchbox/v1/retrieve/"
const MAPBOX_SESSION_TOKEN='b6844ea0-751a-478e-ac07-b155204cb99e'

const OPENWEATHER_URL="https://api.openweathermap.org/data/3.0/onecall?"
const OPENWEATHER_API_KEY='b4211427f497337b17b79bfe593ab1ca'


function AutoCompleteAdress() {
  
  const [source,setSource] = useState<any>(null);

  const { Coordinates, setCoordinates }= useCoordinatesContext();

  const [AdressList,setAdressList] = useState<any>(null);

  const {userLocation,setUserLocation} = useUserLocationContext();

  const [userAddress, setUserAddress] = useState<any>(null);




  const apiUrl = 'https://api.geoapify.com/v1/geocode/reverse';
  const apiKey = '7a5a446135ca4bf799b0005045503d28';
  const latitude = userLocation.lat;
  const longitude = userLocation.lng;
  const language = 'fr';
  
  axios.get(apiUrl, {
      params: {
          lat: latitude,
          lon: longitude,
          lang: language,
          apiKey: apiKey
      }
  })
  .then( response => {
      console.log(response.data);
      setUserAddress(response.data);
  })
  .catch(error => {
      console.error('Error:', error);
  })

  useEffect(()=> {
    if (source) {
      const DelayedRequest = setTimeout(()=>{
      getAdressList()
    },1000)
    return ()=> clearTimeout(DelayedRequest)  
  }
  },[source])

  



  const getAdressList = async () => {
    const res = await fetch(`/api/search-adress?q=`+source,{
      headers: { 'Content-Type': 'application/json',}
    })
    const data = await res.json()
    setAdressList(data);
    console.log(data);


  }

  const onSourceClick= async(item:any)=> {
    setSource(item.name);
    setAdressList([]);
    const res = await fetch(MAPBOX_RETRIEVE_URL+item.mapbox_id+'?session_token=[GENERATED-UUIDv4]&access_token=pk.eyJ1Ijoic2VhcmNoLW1hY2hpbmUtdXNlci0xIiwiYSI6ImNrNnJ6bDdzdzA5cnAza3F4aTVwcWxqdWEifQ.RFF7CVFKrUsZVrJsFzhRvQ' )
    const data = await res.json() 
    console.log(data)
      // Access the first feature's geometry.coordinates
      setCoordinates( {
        lng: data.features[0].geometry.coordinates[0],
        lat: data.features[0].geometry.coordinates[1],
      })
    
      // Set the coordinates using setCoordinates
      console.log(Coordinates)

    
  }

  return (
    
    <div>
        <label>The Car&apos;s Address</label>
        <input type='text' name='address'
         className='bg-white p-1 border w-full rounded-md outline-none '
         value={userAddress? userAddress.features[0].properties.plus_code +' | '+ userAddress.features[0].properties.formatted :source}
         onChange={(e)=>setSource(e.target.value)}></input>

        {AdressList?.data?.suggestions? 
        <div className=' h-full text-black z-10 shadow-lg w-full rounded-xl'>
        {AdressList?.data?.suggestions.map((item:any,index:number)=>(
          <div           
          key={index}
          className='bg-gray-100 hover:bg-gray-200 p-1 px-2 cursor-pointer'
          onClick={()=>{
            onSourceClick(item)
          }}          >
          <h2>{item.name}</h2>
            <span className='font-light text-xs'>{item.full_address}</span>
            </div>
        
          ))}
        </div>:null}
    </div>
  )
}

export default AutoCompleteAdress