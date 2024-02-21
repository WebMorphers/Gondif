"use client"
import { createContext, useContext, useState } from "react";

const MapFlyToContext=createContext<any>(null);

export function MapflytoWraper({children}: Readonly<{
    children: React.ReactNode;
  }>) {

    const [mapTriggerFlyTo,setMapTriggerFlyTo] = useState<any>(true)

    return (
        <MapFlyToContext.Provider value={{mapTriggerFlyTo,setMapTriggerFlyTo}}>
            {children}
        </MapFlyToContext.Provider>
    )
}

export function useMapFlyToContext(){
    return useContext(MapFlyToContext)
}
