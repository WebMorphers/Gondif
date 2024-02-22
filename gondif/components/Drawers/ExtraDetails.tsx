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
import { useState } from "react"
 
interface ExtraDetailsProps {
  onReturn: () => void;
  onConfirm: () => void;  
}

const ExtraDetails: React.FC<ExtraDetailsProps> = ({ onReturn, onConfirm }) => {
   const [isOpen, setIsOpen] = useState(true);  
  const [selected, setSelected] = useState<any>(null)
  const [cardClick, setCardClick] = useState<number | null>(null)

  const handleCheckboxChange = (index:any) => {
    if (selected === index) {
      setSelected(null)
    } else {
      setSelected(index)
    }
  
  }
  const handleCardClick = (index: number) => {
    setCardClick(cardClick === index ? null : index);
  };

  return (
    <div>
      
        <Drawer open={isOpen} modal={true} onClose={() => setIsOpen(false)}>
          {!isOpen && <DrawerTrigger className="absolute h-screen w-screen opacity-0 top-0" onClick={() => setIsOpen(true)}></DrawerTrigger>}  
          <DrawerPortal>
            <DrawerOverlay className="fixed inset-0 bg-black/40" />
            <DrawerContent className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[96%] rounded-t-[10px]">
              <div className="max-w-md w-full mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px]">
                <DrawerHeader>
                  <DrawerTitle className="text-start font-extrabold text-2xl">Extra details</DrawerTitle>
                 </DrawerHeader>
                  <div className="flex flex-col gap-7">
                    <Card>
                      <CardContent>
                        <div className="flex flex-col gap-5 mt-5">
                          <div className="flex gap-5">
                            <div >
                              <input
                              type="checkbox"
                              className="size-5 mt-2 accent-[#9FE870] text-white "
                              checked={selected?selected === 0: true}
                              onChange={() => handleCheckboxChange(0)}
  
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
                              className="size-5 mt-2 accent-[#9FE870]"
                              checked={selected === 1}
                              onChange={() => handleCheckboxChange(1)}
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
                  <Card onClick={() => handleCardClick(0)}
                  className={` ${cardClick === 0 ? "scale-105 border-[#9FE870] border-2" : ""}`}>
                    <CardContent>
                      <div className="flex justify-between mt-5 alig">
                        <div className="">
                          <CardTitle className="font-bold">Water</CardTitle>
                          <CardDescription className="mt-1 leading-4">Sudans and SUVs. <br />vehicles regular people use.</CardDescription>
                        </div>
                        <div className="flex flex-col items-center"> 
                         <CardTitle>+ 10 MAD</CardTitle>
                         <CardDescription className="text-xs mt-1">+ 8 mins</CardDescription>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card onClick={() => handleCardClick(1)}
                  className={` ${cardClick === 1 ? "scale-105 border-2 border-[#9FE870]" : ""}`}>
                    <CardContent>
                      <div className="flex justify-between mt-5 alig">
                        <div className="">
                          <CardTitle className="font-bold">Without Water</CardTitle>
                          <CardDescription className=" mt-1 leading-4">Vans and Light trucks.<br />Family and business vehicles.</CardDescription>
                        </div>
                        <div className="flex flex-col items-center"> 
                         <CardTitle>+ 0 MAD</CardTitle>
                         <CardDescription className="text-xs mt-1"> 0 mins</CardDescription>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                    </div>
                  </div>


                <DrawerFooter className="flex flex-row justify-center items-center">
                <button onClick={onReturn}
 className="cursor-pointer duration-200 hover:scale-110 active:scale-100 w-f" title="Go Back">
  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-[#163300]">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
  </svg>
</button>
<Button onClick={onConfirm} className="bg-[#9FE870] text-[#163300] w-full">Confirm</Button> 
                </DrawerFooter>
              </div>
            </DrawerContent>
          </DrawerPortal>
        </Drawer>
        
    </div>
  )
}

export default ExtraDetails
