const hotelDataOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9cfc598f59msh4462c3011d063acp1ad9d0jsn61471c208572',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

const hotelDataURL =
'https://travel-advisor.p.rapidapi.com/locations/search?query=pattaya&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US'

export const getHotelData = async () => {
  try {
    const res = await fetch(`${hotelDataURL}`, hotelDataOptions); 
    return await res.json()
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Couldn't fetch location.`, error.message);
    }
  }
};
 