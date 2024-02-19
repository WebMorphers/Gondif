"use client"
import * as React from "react"
 
import { Button } from "@/components/ui/button"
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
                  <DrawerTitle className="text-start font-extrabold text-2xl">Extra details</DrawerTitle>
                 </DrawerHeader>
                  <div className="flex flex-col gap-5">
                    <Card>
                      <CardContent>
                        <div className="flex flex-col gap-5 mt-5">
                          <div className="flex gap-5">
                            <div >
                              <input
                              type="checkbox"
                              className="size-5 mt-2 text-[#9FE870] bg-white"
                                />
                            </div>
                            <div>
                            <CardTitle>Exterior</CardTitle>
                            <CardDescription className="text-xs mt-1">Sudans and SUVs. <br />vehicles regular people use.</CardDescription>
                            </div>
                          </div>
                          <div className="flex gap-5">
                            <div >
                              <input
                              type="checkbox"
                              className="size-5 mt-2 text-[#9FE870] bg-white"
                                />
                            </div>
                            <div>
                            <CardTitle>Interior</CardTitle>
                            <CardDescription className="text-xs mt-1">Sudans and SUVs. <br />vehicles regular people use.</CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <div className="flex flex-col gap-3">
                    <Card>
                    <CardContent>
                      <div className="flex justify-between mt-5">
                        <div className="">
                          <CardTitle>Water</CardTitle>
                          <CardDescription className="text-xs mt-1">Sudans and SUVs. <br />vehicles regular people use.</CardDescription>
                        </div>
                        <div> 
                         <CardTitle>Water</CardTitle>
                         <CardDescription className="text-xs mt-1">Sudans and SUVs. <br />vehicles regular people use.</CardDescription>
                        </div>
                      </div>
                    </CardContent>
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

export default ExtraDetails
