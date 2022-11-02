export const hotelDataOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5dac77ef2amsh8eb3f04c38b7ddep18ae4ejsn6efe878d52c6",
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  },
};

const hotelDataURL =
  "https://booking-com.p.rapidapi.com/v1/hotels/data?hotel_id=1377073&locale=en-gb";

export const getHotelData = async () => {
  try {
    const res = await fetch(`${hotelDataURL}`, hotelDataOptions);
    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Couldn't fetch location.`, error.message);
    }
  }
};
