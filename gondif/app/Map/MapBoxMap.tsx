import { UserLocationContext } from '@/context/UserLocationContext'
import { Content } from 'next/font/google'
import React, { useContext } from 'react'
import { Map, Marker } from 'react-map-gl'
import markerIcon from '@/public/marker-icon.png'
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image'
import LocalisationIcon from '@/public/location-icon.png'



export default function MapBoxMap() {

    const { UserLocation } = useContext(UserLocationContext)

return (
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
        mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            <Marker 
            longitude={UserLocation?.lng}
            latitude={UserLocation?.lat}
            anchor="bottom" >
                <img src="marker-icon.png" width={30}  />
            </Marker>
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
)
}
