import React from 'react'
 import Image from 'next/image'
import cash from '@/public/cash.png'
import discount from '@/public/discount.png'
 import { Tooltip } from 'react-tooltip';
import  {Button} from '@/components/ui/button'
import { Input } from "@/components/ui/input"
 

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
 import { useState } from "react";
 
 interface PayementProps {
  onClose: () => void;
}

const Payement: React.FC<PayementProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);  
     
    
  return (
    <div> <Drawer open={true} onClose={() => { setIsOpen(false); onClose(); }}>

    {!isOpen && <DrawerTrigger className="absolute h-screen w-screen opacity-0 top-0" onClick={() => setIsOpen(true)}></DrawerTrigger>}  

<DrawerPortal>
<DrawerOverlay className="fixed inset-0 bg-black/40" />
<DrawerContent className="bg-white fl ex flex-col fixed bottom-0 left-0 right-0 max-h-[96%] rounded-t-[10px]">
  <div className="max-w-md w-full mx-auto flex flex-row justify-around overflow-auto p-9 rounded-t-[10px]">
    <div className='flex items-center flex-row gap-3  justify-center '>
     <div>
    <Tooltip 
    content= "©  Add a card for hassle-free payment."  
    place="bottom-start"
    anchorSelect="#my-tooltip-anchor"
     
     
     style={{ backgroundColor: "#163300", color: "#fff" ,borderRadius:"7px",fontWeight:"500"}}
        

  />      <Image
  id="my-tooltip-anchor"
      src={cash}
      width={20}
      height={20}
      alt="cash"
    />
     </div>
      
      

    </div>
    <div className='flex items-center flex-row gap-3  justify-center '>
     
           <Image
        src={discount}
       width={20}
       height={20}
       alt="cash"
     />
          <Input type="text" className='text-xs w-24' placeholder="DISCOUNTS" />

     </div>
  
</div>
<DrawerFooter>
                  <Button className="bg-[#9FE870] text-[#163300] ">Find Cleaner</Button>
                </DrawerFooter>
</DrawerContent>
</DrawerPortal>
</Drawer>  </div>
  )
}

export default Payement