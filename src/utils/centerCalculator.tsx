import { hotelDataTypes } from "../types/types";

export const calculateCenter = (hotels: hotelDataTypes) => {
	let sortedHotels = hotels.data.sort(function (a, b) {
		return (
			parseFloat(a.result_object.latitude) -
			parseFloat(b.result_object.latitude)
		);
	});
    let hotelsLength = hotels.data.length
    let centerCoordinates: [number, number] = [Number(sortedHotels[hotelsLength/2].result_object.latitude),Number(sortedHotels[hotelsLength/2].result_object.longitude)]
    return centerCoordinates
};
