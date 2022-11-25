import React from "react";
import { hotelDataTypes } from "../types/types";

export const calculateCenter = (hotels:hotelDataTypes) => {
    let latArray:number[] = [];
    let lonArray:number[] = [];
    hotels.data.forEach(hotel => {
        latArray.push(Number(hotel.result_object.latitude));
        lonArray.push(Number(hotel.result_object.longitude));
    })
    latArray.sort();
    lonArray.sort();
    let latCenter = latArray[latArray.length/2];
    let lonCenter = lonArray[latArray.length/2];
    console.log(latCenter, lonCenter)
    let centerCoordinates: [number,number] = [latCenter, lonCenter]
    return(centerCoordinates)
}
