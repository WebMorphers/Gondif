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
import { useRef, useState } from "react";
import Favorit from "../ui/favorit/favorit";
import { UserLocationWraper, useUserLocationContext } from "@/context/UserLocationContext";

import axios from "axios";
import { MapflytoWraper, useMapFlyToContext } from "@/context/Mapflytocontext";



interface AddPositionProps {
  onClose: () => void;
}

const AddPosition: React.FC<AddPositionProps> = ({ onClose }) => {
  const handleConfirmPosition = () => {
    onClose();
  };


    const [isOpen, setIsOpen] = useState(true);  
    const mapRef=useRef<any>();

    const {userLocation, setUserLocation} = useUserLocationContext();

    const {userAddress, setUserAddress} = useUserLocationContext();
    
    const {mapTriggerFlyTo,setMapTriggerFlyTo} = useMapFlyToContext()

    const {currentLocation,setCurrentLocation} = useMapFlyToContext()


    const apiUrl = 'https://api.geoapify.com/v1/geocode/reverse';
    const apiKey = '7a5a446135ca4bf799b0005045503d28';
    const latitude = userLocation?.lat;
    const longitude = userLocation?.lng;
    const language = 'fr';
        


    function getuserlocalfromxy(){
      axios.get(apiUrl, {
        params: {
            lat: latitude,
            lon: longitude,
            lang: language,
            apiKey: apiKey
        }
    })
    .then( response => {
        
        setUserAddress(response.data);
        console.log(userAddress);
        
    })
    .catch(error => {
        console.error('Error:', error);
    })
  
    }
    
  return (
    <MapflytoWraper>
    <div>
    <Drawer open={isOpen} modal={false} onClose={() => setIsOpen(false)} >
      {!isOpen && <DrawerTrigger className=" absolute bottom-20 left-0 right-0 mx-auto w-12 h-12 rounded-full bg-opacity-750 border-white  bg-[#9FE870]" onClick={() => setIsOpen(true)}>
      <svg className=" rounded-full p-2 " viewBox="0 0 24 24" width={50} fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z" fill="#ffffff"></path> </g></svg>
              </DrawerTrigger>}  

  <DrawerPortal>
  <DrawerOverlay className="fixed inset-0 bg-black/40" />
  <DrawerContent className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[96%] rounded-t-[10px]">
    <div className="max-w-md w-full mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px]">
    <DrawerHeader>
      <DrawerTitle>Your location </DrawerTitle>
      <DrawerDescription>Set your car&apos;s location to get washed</DrawerDescription>
    </DrawerHeader>
    <div className="p-4 pb-0">
      <div className="flex items-center justify-between gap-5">
        <div className="w-10 h-10 flex items-center justify-center bg-[#9FE870] bg-opacity-20 rounded-full cursor-pointer" onClick={()=>{getuserlocalfromxy();setMapTriggerFlyTo(!mapTriggerFlyTo);setCurrentLocation("location")}}>
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
    <Button
          className="bg-[#9FE870] text-[#163300]"
          onClick={handleConfirmPosition}
        >
          Confirm Position
        </Button>    </DrawerFooter>
  </div>
  </DrawerContent>
  </DrawerPortal>
  </Drawer>
</div>
</MapflytoWraper>
  )
}

export default AddPosition