const hotelDataOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "9cfc598f59msh4462c3011d063acp1ad9d0jsn61471c208572",
		"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
	},
};

// удали нижнюю дату и разблокируй эту + добавь опшнс в фетч запрос, данная дата для теста
// const hotelDataURL =
// 'https://travel-advisor.p.rapidapi.com/locations/search?query=pattaya&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US'

const hotelDataURL = "https://jsonplaceholder.typicode.com/todos";

export const getHotelData = async () => {
	try {
		const res = await fetch(`${hotelDataURL}`);
		return await res.json();
	} catch (error) {
		if (error instanceof Error) {
			console.error(`Couldn't fetch location.`, error.message);
		}
	}
};

