import { useState, useEffect } from "react";
import ".//assets/scss/index.scss";
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	ZoomControl,
	useMap,
	useMapEvents,
} from "react-leaflet";
import { Aside } from ".//components/Aside/index";
import { Header } from "./components/Header";
import { getHotels } from "./utils/getHotels";
import useDebounce from "./utils/useDebounce";
import { Loader } from "./UI/Loader";
import { calculateCenter } from "./utils/centerCalculator";
import { hotelDataTypes } from "./types/types";


const App = () => {
	const [center, setCenter] = useState<any>([51.505, -0.09]);
	const [zoom, setZoom]  = useState<number>(3);
	const [hotels, setHotels] = useState<hotelDataTypes | null>(null);
	const [search, setSearch] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const debouncedSearch = useDebounce(search, 1000);	
	useEffect(() => {
		if (debouncedSearch) {
			setLoading(true);
			getHotels(debouncedSearch).then((res: any) => {
				setHotels(res);
				setLoading(false);
				console.log(res.data);
				setCenter(calculateCenter(res))
				setZoom(15)
			});
		} 
	}, [debouncedSearch]);
	
	const centerCoordinates = hotels?.data.reduce(
		(acc: any, currentHotel: any): any => {
			acc = {
				lat: acc.lat + Number(currentHotel.result_object.latitude),
				lon: acc.lon + Number(currentHotel.result_object.longitude),
			};
			return (acc = {
				lat: acc.lat / hotels.data.length,
				lon: acc.lon / hotels.data.length,
			});
		},
		{ lat: 0, lon: 0 }
	);
	
	return (
		<div className="App">
			<MapContainer
				center={center}
				zoom={zoom}
				zoomControl={false}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{hotels?.data.map((hotel, index): any => {
					let latitude = Number(hotel.result_object.latitude);
					let longitude = Number(hotel.result_object.longitude);
					return (
						!isNaN(latitude) &&
						!isNaN(longitude) && (
							<Marker key={index} position={[latitude, longitude]}>
								<Popup>
									<div className="popup__wrapper">
										<div className="popup__header">
											{hotel.result_object.name}
										</div>
										<div className="popup__image">
											<img src={hotel.result_object.photo.images.medium.url} />
										</div>
										<span className="popup__rating">
											{hotel.result_object.rating}
										</span>
										<div className="popup__adress">
											<span className="popup__text">Adress:</span>{" "}
											{hotel.result_object.address}
										</div>
										<div className="popup__description">
											<span className="popup__text">Description:</span>{" "}
											{hotel?.review_snippet?.snippet}
										</div>
									</div>
								</Popup>
							</Marker>
						)
					);
				})}
				<ZoomControl position="bottomright" />
			</MapContainer>
			<Header setSearch={setSearch} center={center} />
			<Aside hotels = {hotels}/>
			{loading && <Loader/>}
		</div>
	);
};

export default App;
