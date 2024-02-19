"use client"
import { createContext, useContext, useState } from "react";

const CoordinatesContext=createContext<any>(null);

export function CoordinatesWraper({children}: Readonly<{
    children: React.ReactNode;
  }>) {

    const [Coordinates,setCoordinates] = useState<any>(null)

    return (
        <CoordinatesContext.Provider value={{Coordinates,setCoordinates}}>
            {children}
        </CoordinatesContext.Provider>
    )
}

export function useCoordinatesContext(){
    return useContext(CoordinatesContext)
}
