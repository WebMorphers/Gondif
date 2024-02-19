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
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useEffect, useState, useContext } from "react"
 import { useSession } from "next-auth/react"
 import DropdownMenu from "@/components/dropDown/dropdownMenu"
import AutoCompleteAdress from "@/components/AutoCompleteAdress"
import { CoordinatesWraper, useCoordinatesContext } from "@/context/CoordinatesContext"
const [isOpen, setIsOpen] = useState(true);  

const [UserLocation,setUserLocation] = useState<any>();

const VehiculeType = () => {
  return (
    <div>{ UserLocation ?

        <Drawer open={isOpen} modal={false} onClose={() => setIsOpen(false)}>
                {!isOpen && <DrawerTrigger className="absolute h-screen w-screen opacity-0 top-0" onClick={() => setIsOpen(true)}></DrawerTrigger>}  
    
          <DrawerPortal>
            <DrawerOverlay className="fixed inset-0 bg-black/40" />
            <DrawerContent className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[96%] rounded-t-[10px]">
              <div className="max-w-md w-full mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px]">
              <DrawerHeader>
                <DrawerTitle>Your location </DrawerTitle>
                <DrawerDescription>Set your car's location to get washed</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-x-2">
                  <AutoCompleteAdress />
                  </div>
                
              </div>
              <DrawerFooter>
                <Button className="bg-[#9FE870] text-[#163300] ">Confirm Position</Button>
              </DrawerFooter>
            </div>
            </DrawerContent>
          </DrawerPortal>
        </Drawer>
        : null} </div>
  )
}

export default VehiculeType