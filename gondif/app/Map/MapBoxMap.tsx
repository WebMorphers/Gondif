import React from 'react'
import { Map } from 'react-map-gl'

export default function MapBoxMap() {
  return (
    <div>    
        <h1>Map</h1>
        <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOCKEN}
        initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14
        }}
        style={{width: 600, height: 400}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        />
    </div>
  )
}
