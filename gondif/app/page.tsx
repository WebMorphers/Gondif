"use client"


import * as React from "react"


import { useEffect, useState } from "react"
import MapBoxMap from "./Map/MapBoxMap"
import { useSession } from "next-auth/react"
import { UserLocationContext } from "@/context/UserLocationContext"
import DropdownMenu from "@/components/dropDown/dropdownMenu"
import AutoCompleteAdress from "@/components/AutoCompleteAdress"
import { CoordinatesWraper, useCoordinatesContext } from "@/context/CoordinatesContext"
import AddPosition from "@/components/Drawers/AddPosition"
import VehiculeType from "@/components/Drawers/VehiculeType"
import ExtraDetails from "@/components/Drawers/ExtraDetails"
import Payement from "@/components/Drawers/Payement"
import {
  fromLatLng,
} from "react-geocode";


export default function Home() {
const session = useSession();


const [openDrawer,setopenDrawer] = useState(true);

  useEffect(() => {
    getUserLocation()
  },[])

  const [UserLocation,setUserLocation] = useState<any>();

  const getUserLocation=()=> { navigator.geolocation.getCurrentPosition(function(props){
    setUserLocation({
      lat:props.coords.latitude,
      lng:props.coords.longitude
    })
  })}

  const adress=fromLatLng(UserLocation?.lat, UserLocation?.lng)
  .then(({ results }) => {
    const { lat, lng } = results[0].geometry.location;
    console.log(lat, lng);
  })
  .catch(console.error);

  useEffect(() =>{
    console.log(adress);
  
},[adress]);
  
  return (
      <>
    <UserLocationContext.Provider value={{UserLocation,setUserLocation}}>
      <CoordinatesWraper>
          <div className="relative h-screen overflow-hidden ">

      <MapBoxMap />
      { UserLocation ?
        <AddPosition />
 : null}
        </div>
        </CoordinatesWraper>
                </UserLocationContext.Provider>
        </>
  )
}
