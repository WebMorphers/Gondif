"use client"


import * as React from "react"


import { useEffect, useState } from "react"
import MapBoxMap from "./Map/MapBoxMap"
import { useSession } from "next-auth/react"
import { UserLocationWraper, useUserLocationContext } from "@/context/UserLocationContext"
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
import { MapflytoWraper } from "@/context/Mapflytocontext"


export default function Home() {
const session = useSession();




  const {userLocation,setUserLocation} =useUserLocationContext();

  
  return (
      <>
      <MapflytoWraper>
    <UserLocationWraper>
      <CoordinatesWraper>
          <div className="relative h-screen overflow-hidden ">
        <MapBoxMap />
      { userLocation ?
        <div>
      <AddPosition />
        </div>
 : null}
        </div>
        </CoordinatesWraper>
      </UserLocationWraper>
      </MapflytoWraper>
        </>
  )
}
