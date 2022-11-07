const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9cfc598f59msh4462c3011d063acp1ad9d0jsn61471c208572',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

export const getHotels = async (city: string) => {
	let hotelDataURL = `https://travel-advisor.p.rapidapi.com/locations/search?query=${city}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`
	const data = await fetch(hotelDataURL, options);
	const response = await data.json();
	return( response )
};
