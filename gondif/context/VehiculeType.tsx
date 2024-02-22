"use client"
import { createContext, useContext, useState } from "react";

const VehiculeContext=createContext<any>(null);

export function VehiculeTypeWraper({children}: Readonly<{
    children: React.ReactNode;
  }>) {

    const [vehiculeType,setVehiculeType] = useState<any>(null)
    const [selectedVehiculeType,setSelectedVehiculeType] = useState<any>(null)

    return (
        <VehiculeContext.Provider value={{vehiculeType,setVehiculeType,selectedVehiculeType,setSelectedVehiculeType}}>
            {children}
        </VehiculeContext.Provider>
    )
}

export function useVehiculeContext(){
    return useContext(VehiculeContext)
}
