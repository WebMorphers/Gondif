"use client"
import * as React from "react"
 import { Button } from "@/components/ui/button"
import Small from '../../public/Small Vehicle.png'
import Medium from '../../public/Medium Vehicle.png'
import Large from '../../public/Large Vehicle.png'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Drawer,
  DrawerContent, 
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
 
const VehiculeType = () => {
  const [isOpen, setIsOpen] = React.useState(true);  
 
  return (
    <div>
      
        <Drawer open={isOpen} modal={false} onClose={() => setIsOpen(false)}>
          {!isOpen && <DrawerTrigger className="absolute h-screen w-screen opacity-0 top-0" onClick={() => setIsOpen(true)}></DrawerTrigger>}  
          <DrawerPortal>
            <DrawerOverlay className="fixed inset-0 bg-black/40" />
            <DrawerContent className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[96%] rounded-t-[10px]">
              <div className="max-w-md w-full mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px]">
                <DrawerHeader>
                  <DrawerTitle>Vehicle type</DrawerTitle>
                 </DrawerHeader>
                <div className="p-4 pb-0">
                  <div className="flex items-center flex-col justify-center gap-3">
                    <Card >
                  <div className="shadow-md rounded-md flex flex-row p-4 gap-7">
                    <img src={Small.src} className="w-20 h-20" alt="" />
                    <div>
                      <h1 className="hover:text-[#9FE870] text-[#163300] font-bold">Small vehicle</h1>
                      <p className="text-[#8996A2] text-xs">Sudans and SUVs. <br />  vehicles regular people use.</p>
                    </div>
                    <div>
                      <h1 className="text-[#163300] text-[13px]"> MAD 10 - 90</h1>
                      <p className="text-[#8996A2] text-[11px] "> 25 mins</p>
                    </div>
                   </div> 
</Card>
                
                   </div>
                </div>
                <DrawerFooter>
                  <Button className="bg-[#9FE870] text-[#163300] ">Confirm Vehicle</Button>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </DrawerPortal>
        </Drawer>
        
    </div>
  )
}

export default VehiculeType
