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



export default function Home() {
const session = useSession();


const [openDrawer,setopenDrawer] = useState(true);

  useEffect(() => {
    getUserLocation()
  },[])

  const [UserLocation,setUserLocation] = useState<any>();

  const getUserLocation=()=> { navigator.geolocation.getCurrentPosition(function(props){
    console.log(props);
    setUserLocation({
      lat:props.coords.latitude,
      lng:props.coords.longitude
    })
  })}
  
  return (
      <>
    <UserLocationContext.Provider value={{UserLocation,setUserLocation}}>
      <CoordinatesWraper>
          <div className="relative h-screen overflow-hidden ">

            <VehiculeType />
      <MapBoxMap />
      { UserLocation ?

        <ExtraDetails />
    : null}
        </div>
        </CoordinatesWraper>
                </UserLocationContext.Provider>
        </>
  )
}
