import React from "react";
import { hotelDataTypes } from "../App";

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
    return([latCenter,lonCenter]) 
}