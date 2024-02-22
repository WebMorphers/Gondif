import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Small from '../../public/Small Vehicle.png';
import Medium from '../../public/Medium Vehicle.png';
import Large from '../../public/Large Vehicle.png';
import { QuerySnapshot, collection, getDocs,query,onSnapshot } from "firebase/firestore"; 
import {DB} from '@/app/firebase'



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
import Image from "next/image";

interface VehiculeTypeProps {
  onGoBack: () => void;
  onNext: () => void;  
}

const VehiculeType: React.FC<VehiculeTypeProps> = ({ onGoBack, onNext }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isClicked, setIsClicked] = useState<number | null>(null)
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [vehiculeType,setVehiculeType] =useState<any>([
    {
      id:1,
      name:"small vehicule",
      short_description:"Sudans and SUVs.",
      description_plus:"vehicles regular people use.",
      min_price:10,
      max_price:90,
      average_time:"25 mins"
    },
    {
      id:2,
      name:"Medium vehicle",
      short_description:"Large cars like sedans or vans.",
      description_plus:"Family and business vehicles.",
      min_price:30,
      max_price:110,
      image:'',
      average_time:"45 mins"

    },
    {
      id:3,
      name:"Large vehicle",
      short_description:"Trucks and Buses.",
      description_plus:"vehicles of big trasports.",
      min_price:60,
      max_price:190,
      image:'',
      average_time:"1h 20 mins"

    }
  ])

  useEffect(()=>{
    const q= query(collection(DB,'Vehicules'))
    const unsubscribe = onSnapshot(q,(QuerySnapshot)=>{
      let VehiculesArr: { id: string; }[] = []

      QuerySnapshot.forEach((doc)=>{
        VehiculesArr.push({...doc.data(), id: doc.id})
      });
      setVehiculeType(VehiculesArr)
    }) 
  },[])


  const handleCardClick = (index: number) => {
    setIsClicked(isClicked === index ? null : index);
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
                <DrawerTitle>Vehicle type</DrawerTitle>
              </DrawerHeader>
              <div className="">
                <div className="flex items-center flex-col justify-between gap-3 w-full">
                {vehiculeType.map((vehicule:any,id:number)=>(
  <Card key={vehicule.id} onClick={()=>handleCardClick(vehicule.id)} className={` ${isClicked === vehicule.id ? "scale-105 border-[#9FE870] border-2 w-full" : "w-full"}`}>
    <div className="shadow-md rounded-md flex flex-row p-4  gap-3 items-center w-full">
      <Image src={vehicule.image} width={80} height={80} alt="Vehicle Image" />
      <div className="flex flex-col flex-1 gap-1">
        <h1 style={{ color: isClicked === vehicule.id ? '#9FE870' : '#163300' }} className="font-bold">{vehicule.name}</h1>
        <p className="text-[#8996A2] text-xs">{vehicule.short_description} <br />  {vehicule.description_plus}</p>
      </div>
      <div className="flex flex-col  gap-1 items-center">
        <h1 className="text-[#163300] text-[13px] font-bold">MAD {vehicule.min_price} - {vehicule.max_price}</h1>
        <p className="text-[#8996A2] text-[11px] ">{vehicule.average_time}</p>
      </div>
    </div> 
  </Card>
))}

                </div>
              </div>
              <DrawerFooter className="flex flex-row justify-center items-center">
                <button         onClick={onGoBack}
 className="cursor-pointer duration-200 hover:scale-110 active:scale-100" title="Go Back">
  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-[#163300]">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
  </svg>
</button>
<Button className="bg-[#9FE870] text-[#163300] w-full" onClick={onNext}>Confirm Vehicle</Button>

              </DrawerFooter>
            </div>
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    </div>
  );
};

export default VehiculeType;
