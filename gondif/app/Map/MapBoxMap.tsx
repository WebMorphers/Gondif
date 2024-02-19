import { UserLocationContext } from '@/context/UserLocationContext'
import { Content } from 'next/font/google'
import React, { useContext,useEffect } from 'react'
import { Map, Marker } from 'react-map-gl'
import markerIcon from '@/public/marker-icon.png'
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image'
import LocalisationIcon from '@/public/location-icon.png'
import { CoordinatesContext } from '@/context/CoordinatesContext'



export default function MapBoxMap() {

    const { UserLocation,setUserLocation } = useContext(UserLocationContext)
    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(function(props){
            console.log(props);
            setUserLocation({
              lat:props.coords.latitude,
              lng:props.coords.longitude
            })
          })
    },[])
    
    
    const contextValue = useContext(CoordinatesContext);
    const { Coordinates, setCoordinates } = contextValue || {};
    useEffect(() => {console.log(Coordinates);},[Coordinates])
    

return (
    <CoordinatesContext.Provider value={{Coordinates,setCoordinates}}>
    <div className='h-screen w-screen flex justify-center items-center'> 
        {UserLocation?
            
            <Map 
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOCKEN}
        initialViewState={{
                longitude: UserLocation?.lng, 
                latitude: UserLocation?.lat,
                zoom: 14
        }}
        style={{width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0))'}}
        mapStyle="mapbox://styles/mapbox/navigation-night-v1"
        >
            {Coordinates?<Marker 
            longitude={Coordinates?.lng}
            latitude={Coordinates?.lat}
            anchor="bottom" 
            draggable>
                <img src="marker-icon.png" width={30}  />
            </Marker>
            :
            null}   
        </Map>
        : 
        <div className='py-12 flex justify-center items-center flex-col gap-3'>
            <h1 className='text-center text-2xl font-semibold '>
                Allow Position access
            </h1>
            <span className='font-extralight text-sm text-center'>You must allow access to continue.</span>
            <Image src={LocalisationIcon} width={100} alt='position'/>
        </div>}
        
    </div>
    </CoordinatesContext.Provider>
)
}
