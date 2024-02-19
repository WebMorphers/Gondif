"use client"
import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
 
const ExtraDetails = () => {
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
                  <DrawerTitle className="text-start">Extra details</DrawerTitle>
                 </DrawerHeader>
                <div className="p-4 pb-0">
                  <div className="flex items-center flex-col justify-center space-x-2">
           
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

export default ExtraDetails
