const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9cfc598f59msh4462c3011d063acp1ad9d0jsn61471c208572',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

export const getHotels = async (city: string) => {
	let hotelDataURL = `https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${city}&lang=en_US&units=km`,
		options;
	const data = await fetch(hotelDataURL);
	const response = await data.json();
};
