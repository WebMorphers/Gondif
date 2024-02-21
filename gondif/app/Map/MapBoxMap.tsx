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
import { MapflytoWraper, useMapFlyToContext } from '@/context/Mapflytocontext'



export default function MapBoxMap() {
    const mapRef = useRef<any>();
    const [markerCoordinates, setMarkerCoordinates] = useState<any>(null);
    
    const { Coordinates, setCoordinates } = useCoordinatesContext();
    const { userLocation, setUserLocation } = useUserLocationContext();
    const { mapTriggerFlyTo, setMapTriggerFlyTo } = useMapFlyToContext();

    function flytocordinants(lng: any, lat: any) {
         if (!isNaN(lng) && !isNaN(lat)) {
            mapRef.current?.flyTo({
                center: [lng, lat],
                zoom: 14,
                duration: 2500
            });
             setMarkerCoordinates({ lng, lat });
        }
    }
    useEffect(() => {
        if (userLocation && !isNaN(userLocation.lng) && !isNaN(userLocation.lat)) {
            flytocordinants(userLocation.lng, userLocation.lat);
        }
    }, [mapTriggerFlyTo, userLocation]);
    
    useEffect(() => {
        if (Coordinates && !isNaN(Coordinates.lng) && !isNaN(Coordinates.lat)) {
            flytocordinants(Coordinates.lng, Coordinates.lat);
        }
    }, [Coordinates]);

    return (
        <MapflytoWraper>
            <UserLocationWraper>
                <CoordinatesWraper>
                    <div className='h-screen w-screen flex justify-center items-center'>
                        {userLocation ?
                            <Map
                                ref={mapRef}
                                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOCKEN}
                                initialViewState={{
                                    longitude: userLocation?.lng,
                                    latitude: userLocation?.lat,
                                    zoom: 14
                                }}
                                style={{ width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0))' }}
                                mapStyle="mapbox://styles/mapbox/standard">

                                <NavigationControl position='top-left' />

                                {markerCoordinates ? // Check if marker coordinates are available
                                    <Marker
                                        longitude={markerCoordinates.lng}
                                        latitude={markerCoordinates.lat}
                                        anchor="bottom">
                                        <Image src={markerIcon} width={40} alt='marker' />
                                    </Marker>
                                    : null
                                }
                            </Map>
                            :
                            <div className='py-12 flex justify-center items-center flex-col gap-3'>
                                <h1 className='text-center text-2xl font-semibold '>
                                    Allow Position access
                                </h1>
                                <span className='font-extralight text-sm text-center'>You must allow access to continue.</span>
                                <Image src={LocalisationIcon} width={100} alt='position' />
                            </div>}
                    </div>
                </CoordinatesWraper>
            </UserLocationWraper>
        </MapflytoWraper>
    )
}