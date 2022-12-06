const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "5dac77ef2amsh8eb3f04c38b7ddep18ae4ejsn6efe878d52c6",

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
