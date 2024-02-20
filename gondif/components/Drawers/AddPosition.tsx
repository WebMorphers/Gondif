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
import AutoCompleteAdress from "../AutoCompleteAdress"
import { useState } from "react";
import Favorit from "../ui/favorit/favorit";
const AddPosition = () => {
    const [isOpen, setIsOpen] = useState(true);  





  return (
    <Drawer open={isOpen} modal={false} onClose={() => setIsOpen(false)}>
    {!isOpen && <DrawerTrigger className="absolute h-screen w-screen opacity-0 top-0" onClick={() => setIsOpen(true)}></DrawerTrigger>}  

<DrawerPortal>
<DrawerOverlay className="fixed inset-0 bg-black/40" />
<DrawerContent className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[96%] rounded-t-[10px]">
  <div className="max-w-md w-full mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px]">
  <DrawerHeader>
    <DrawerTitle>Your location </DrawerTitle>
    <DrawerDescription>Set your car&apos;s location to get washed</DrawerDescription>
  </DrawerHeader>
  <div className="p-4 pb-0">
    <div className="flex items-center justify-center gap-5">
      <div className="w-10 h-10 flex items-center justify-center bg-[#9FE870] bg-opacity-20 rounded-full">
      <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.42833 9.5C7.73262 9.5 8.03392 9.43534 8.31505 9.3097C8.59617 9.18406 8.85161 8.99991 9.06677 8.76777C9.28193 8.53562 9.45261 8.26002 9.56906 7.95671C9.6855 7.65339 9.74544 7.3283 9.74544 7C9.74544 6.33696 9.50131 5.70107 9.06677 5.23223C8.63223 4.76339 8.04286 4.5 7.42833 4.5C6.81379 4.5 6.22443 4.76339 5.78989 5.23223C5.35534 5.70107 5.11122 6.33696 5.11122 7C5.11122 7.3283 5.17116 7.65339 5.2876 7.95671C5.40405 8.26002 5.57472 8.53562 5.78989 8.76777C6.22443 9.23661 6.81379 9.5 7.42833 9.5ZM7.42833 0C11.0059 0 13.9162 3.13 13.9162 7C13.9162 12.25 7.42833 20 7.42833 20C7.42833 20 0.94043 12.25 0.94043 7C0.94043 5.14348 1.62397 3.36301 2.84069 2.05025C4.05741 0.737498 5.70763 0 7.42833 0Z" fill="#9FE870"/>
      </svg>

      </div>
      <AutoCompleteAdress />
      <div>
        <Favorit />
      </div>
      </div>
    
  </div>
  <DrawerFooter>
    <Button className="bg-[#9FE870] text-[#163300] ">Confirm Position</Button>
  </DrawerFooter>
</div>
</DrawerContent>
</DrawerPortal>
</Drawer>  )
}

export default AddPosition