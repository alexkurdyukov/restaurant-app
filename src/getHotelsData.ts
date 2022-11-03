const hotelDataOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5dac77ef2amsh8eb3f04c38b7ddep18ae4ejsn6efe878d52c6",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

const hotelDataURL =
  "https://travel-advisor.p.rapidapi.com/locations/search?query=pattaya&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US";

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
