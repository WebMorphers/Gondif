"use client"


import * as React from "react"


import { useEffect, useState } from "react"
import MapBoxMap from "./Map/MapBoxMap"
import { useSession } from "next-auth/react"
import { UserLocationWraper, useUserLocationContext } from "@/context/UserLocationContext"
import DropdownMenu from "@/components/dropDown/dropdownMenu"
import AutoCompleteAdress from "@/components/AutoCompleteAdress"
import { CoordinatesWraper, useCoordinatesContext } from "@/context/CoordinatesContext"
import AddPosition from "@/components/Drawers/AddPosition"
import VehiculeType from "@/components/Drawers/VehiculeType"
import ExtraDetails from "@/components/Drawers/ExtraDetails"
import Payement from "@/components/Drawers/Payement"
import { MapflytoWraper } from "@/context/Mapflytocontext"
import { VehiculeTypeWraper } from "@/context/VehiculeType"


export default function Home() {
  const [isAddPositionOpen, setIsAddPositionOpen] = useState(true);
  const [isVehiculeTypeOpen, setIsVehiculeTypeOpen] = useState(false);
  const [isExtraDetailsOpen, setIsExtraDetailsOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const handleConfirmPosition = () => {
    setIsAddPositionOpen(false);
    setIsVehiculeTypeOpen(true);
  };

  const handleConfirmVehicle = () => {
    setIsVehiculeTypeOpen(false);
    setIsExtraDetailsOpen(true);
  };

  const handleGoBackToAddPosition = () => {
    setIsVehiculeTypeOpen(false);
    setIsAddPositionOpen(true);
  };

  const handleReturnToVehiculeType = () => {
    setIsExtraDetailsOpen(false);
    setIsVehiculeTypeOpen(true);
  };

  const handleConfirmExtraDetails = () => {
    setIsPaymentOpen(true);
  };

  const handleClosePayment = () => {
    setIsPaymentOpen(false);
  };

  const { userLocation, setUserLocation } = useUserLocationContext();

  return (
      <>
      <VehiculeTypeWraper>
      <MapflytoWraper>
        <UserLocationWraper>
          <CoordinatesWraper>
            <div className="relative h-screen overflow-hidden ">
              <MapBoxMap />
              {userLocation ? (
                <div>
                  {isAddPositionOpen && <AddPosition onClose={handleConfirmPosition} />}
                  {isVehiculeTypeOpen && (
                    <VehiculeType onGoBack={handleGoBackToAddPosition} onNext={handleConfirmVehicle} />
                  )}
                  {isExtraDetailsOpen && (
                    <ExtraDetails onReturn={handleReturnToVehiculeType} onConfirm={handleConfirmExtraDetails} />
                  )}
                  {isPaymentOpen && <Payement onClose={handleClosePayment} />}
                </div>
              ) : null}
            </div>
          </CoordinatesWraper>
        </UserLocationWraper>
      </MapflytoWraper>
      </VehiculeTypeWraper>
        </>
  )
}
