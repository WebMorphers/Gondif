import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Small from '../../public/Small Vehicle.png';
import Medium from '../../public/Medium Vehicle.png';
import Large from '../../public/Large Vehicle.png';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Drawer,
  DrawerContent, 
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const VehiculeType = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

  const handleCardClick = () => {
    setIsClicked(true);
    setIsClicked2(false);
    setIsClicked3(false);
   };
   const handleCardClick2 = () => {
    setIsClicked(false);
    setIsClicked2(true);
    setIsClicked3(false);
   };
   const handleCardClick3 = () => {
    setIsClicked(false);
    setIsClicked2(false);
    setIsClicked3(true);
   };

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
              <div className="">
                <div className="flex items-center flex-col justify-center gap-3">
                  <Card onClick={handleCardClick} className={isClicked ? "scale-105" : ""}>
                    <div className="shadow-md rounded-md flex flex-row p-4 gap-7">
                      <img src={Small.src} className="w-20" alt="" />
                      <div className="flex flex-col flex-1 gap-1">
                        <h1 style={{ color: isClicked ? '#9FE870' : '#163300' }} className="font-bold">Small vehicle</h1>
                        <p className="text-[#8996A2] text-xs">Sudans and SUVs. <br />  vehicles regular people use.</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <h1 className="text-[#163300] text-[13px] font-bold">MAD 10 - 90</h1>
                        <p className="text-[#8996A2] text-[11px] ">25 mins</p>
                      </div>
                    </div> 
                  </Card>
                  <Card onClick={handleCardClick2} className={isClicked2 ? "scale-105" : ""}>
                    <div className="shadow-md rounded-md flex flex-row p-4 gap-7">
                      <img src={Medium.src} className="w-20" alt="" />
                      <div className="flex flex-col flex-1 gap-1">
                        <h1 style={{ color: isClicked2 ? '#9FE870' : '#163300' }} className="font-bold">Medium vehicle</h1>
                        <p className="text-[#8996A2] text-xs">Vans and Light trucks.<br />Family and business vehicles.</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <h1 className="text-[#163300] text-[13px] font-bold">MAD 30 - 110</h1>
                        <p className="text-[#8996A2] text-[11px] ">25 mins</p>
                      </div>
                    </div> 
                  </Card>
                  <Card onClick={handleCardClick3} className={isClicked3 ? "scale-105" : ""}>
                    <div className="shadow-md rounded-md flex flex-row p-4 gap-7">
                      <img src={Large.src} className="w-20" alt="" />
                      <div className="flex flex-col flex-1 gap-1">
                        <h1 style={{ color: isClicked3 ? '#9FE870' : '#163300' }} className="font-bold">Large vehicle</h1>
                        <p className="text-[#8996A2] text-xs">Trucks and Buses. <br />vehicles of big trasports.</p>
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <h1 className="text-[#163300] text-[13px] font-bold">MAD 60 - 190</h1>
                        <p className="text-[#8996A2] text-[11px] ">1h 20mins</p>
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
  );
};

export default VehiculeType;
