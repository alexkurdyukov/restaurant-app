import { createUnparsedSourceFile } from "typescript";

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "3c2a94143amshe8df28fbd7bf5efp1999a4jsn610312e6d0e4",
		"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
	},
};

export const getHotels = async (city: string) => {
	let hotelDataURL = `https://travel-advisor.p.rapidapi.com/locations/search?query=${city}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`;
	const data = await fetch(hotelDataURL, options);
	console.log(data);
	const response = await data.json();
	return response;
};
