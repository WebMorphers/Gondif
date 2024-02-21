"use client"

import { UserLocationWraper, useUserLocationContext } from '@/context/UserLocationContext'
import { Content } from 'next/font/google'
import React, { useContext,useEffect, useRef, useState } from 'react'
import { AttributionControl, Map, Marker, NavigationControl, Popup } from 'react-map-gl'
import markerIcon from '@/public/marker-icon.png'
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image'
import LocalisationIcon from '@/public/location-icon.png'
import {  CoordinatesWraper, useCoordinatesContext } from '@/context/CoordinatesContext'



export default function MapBoxMap() {

    const mapRef=useRef<any>();

    const { Coordinates, setCoordinates } = useCoordinatesContext();
    const { userLocation,setUserLocation } = useUserLocationContext();

    function flytocordinants(lng: any,lat: any){
        mapRef.current?.flyTo({
            center: [lng,lat],
            zoom: 14,
            duration:2500
        })
    }
    useEffect(()=> {
        if(Coordinates)
        flytocordinants(Coordinates.lng,Coordinates.lat)
    },[Coordinates])

return (
    <UserLocationWraper>
<CoordinatesWraper>
<div className='h-screen w-screen flex justify-center items-center'> 
        {userLocation?
            
            <Map 
        ref={mapRef}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOCKEN}

        initialViewState={{
                longitude: userLocation?.lng, 
                latitude: userLocation?.lat,
                zoom: 14
        }}
        style={{width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0))'}}
        mapStyle="mapbox://styles/mapbox/standard"        >

            
            <NavigationControl position='top-left' />

            <AttributionControl customAttribution="Gondif" />

            {Coordinates?
            <Marker 
            longitude={Coordinates?.lng}
            latitude={Coordinates?.lat}
            anchor="bottom" 
            >
                <Image src={markerIcon} width={40} alt='marker' />
            </Marker>
            :
            <Marker 
            longitude={userLocation?.lng}
            latitude={userLocation?.lat}
            anchor="bottom" 
            >
                <Image src={markerIcon} width={40} alt='marker' />
            </Marker>}   
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
    </CoordinatesWraper>
    </UserLocationWraper>
    )
}
