import { UserLocationContext } from '@/context/UserLocationContext'
import { Content } from 'next/font/google'
import React, { useContext } from 'react'
import { Map, Marker } from 'react-map-gl'
import markerIcon from '@/public/marker-icon.png'
import 'mapbox-gl/dist/mapbox-gl.css';



export default function MapBoxMap() {

    const { UserLocation } = useContext(UserLocationContext)

return (
    <div className='h-screen w-screen'> 
        {UserLocation?<Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOCKEN}
        initialViewState={{
                longitude: UserLocation?.lng, 
                latitude: UserLocation?.lat,
                zoom: 14
        }}
        style={{width: '100%', height: '100%'}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            <Marker 
            longitude={UserLocation?.lng}
            latitude={UserLocation?.lat}
            anchor="bottom" >
                <img src="marker-icon.png" width={30}  />
            </Marker>
        </Map>:null}
        
    </div>
)
}
