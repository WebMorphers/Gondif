"use client"

import { CoordinatesWraper, useCoordinatesContext } from '@/context/CoordinatesContext';
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserLocationWraper, useUserLocationContext } from '@/context/UserLocationContext';

const MAPBOX_RETRIEVE_URL="https://api.mapbox.com/search/searchbox/v1/retrieve/"
const MAPBOX_SESSION_TOKEN='b6844ea0-751a-478e-ac07-b155204cb99e'



function AutoCompleteAdress() {
  
  const [source,setSource] = useState<any>(null);

  const { Coordinates, setCoordinates }= useCoordinatesContext();

  const [AdressList,setAdressList] = useState<any>(null);

  const {userLocation,setUserLocation} = useUserLocationContext();

  const {userAddress, setUserAddress} = useUserLocationContext();


  
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
       setCoordinates( {
        lng: data.features[0].geometry.coordinates[0],
        lat: data.features[0].geometry.coordinates[1],
      })
    
       console.log(Coordinates)

    
  }

  return (
    
    <div>
        {userAddress? 
        <p className='cursor-pointer text-sm leading-5 max-w-64' onClick={()=>setUserAddress(null)}>        
          {userAddress.features[0].properties.plus_code_short  }
        </p>
        : 
        <input type='text' name='address'
         className='bg-white p-1 border w-full rounded-md outline-none '
         value={source}
         onChange={(e)=>setSource(e.target.value)} /> 
  }
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