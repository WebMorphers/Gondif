import { Content } from 'next/font/google'
import React from 'react'
import { Map, Marker } from 'react-map-gl'

export default function MapBoxMap() {


return (
    <div>    
        <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOCKEN}
        initialViewState={{
                longitude: -122.4,
                latitude: 37.8,
                zoom: 14
        }}
        style={{width: 400, height: '100%'}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        />
        <Marker longitude={-100} latitude={40} anchor="bottom" >
        <img src="./pin.png" />
        </Marker>
    </div>
)
}
