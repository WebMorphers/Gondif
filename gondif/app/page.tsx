"use client"


import * as React from "react"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useEffect, useState } from "react"
import MapBoxMap from "./Map/MapBoxMap"
import { useSession } from "next-auth/react"
import { UserLocationContext } from "@/context/UserLocationContext"
import DropdownMenu from "@/components/dropDown/dropdownMenu"



export default function Home() {
  const [isOpen, setIsOpen] = useState(true);  
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
    <div className="relative">
      
    <UserLocationContext.Provider value={{UserLocation,setUserLocation}}>
            <DropdownMenu />
      <MapBoxMap />
      { UserLocation ?

    <Drawer open={isOpen} modal={false} onClose={() => setIsOpen(false)}>
            {!isOpen && <DrawerTrigger onClick={() => setIsOpen(true)}><button className="absolute h-full w-full opacity-0 top-0"></button></DrawerTrigger>}  

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
            <h1>Test</h1>
              </div>
            
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild >
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
    : null}
        </UserLocationContext.Provider>

    </div>
  )
}
