import { useState, useEffect } from "react";
import ".//assets/scss/index.scss";
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	ZoomControl,
} from "react-leaflet";
import { Aside } from ".//components/Aside/index";
import { Header } from "./components/Header";
import { getHotelData } from "./getHotelsData";

import { getHotels } from "./utils/getHotels";
import useDebounce from "./utils/useDebounce";

interface hotelDataTypes {
	data: {
		is_top_result: boolean;
		result_object: {
			address: string;
			ancestors: object[];
			awards: [];
			category: any;
			category_counts: any;
			descriptions: string;
			doubleclick_zone: string;
			geo_description: string;
			geo_type: string;
			has_attraction_coverpage: boolean;
			has_curated_shopping_list: boolean;
			has_restaurant_coverpage: boolean;
			is_jfy_enabled: boolean;
			latitude: string;
			location_id: string;
			location_string: string;
			longitude: string;
			name: string;
			nearby_attractions: [];
			nearby_metro_station: [];
			num_reviews: string;
			rating: string;
			photo: {
				caption: string;
				helpful_votes: string;
				id: string;
				images: {
					large: {
						height: string;
						width: string;
						url: string;
					};
					medium: {
						height: string;
						width: string;
						url: string;
					};
					original: {
						height: string;
						width: string;
						url: string;
					};
					small: {
						height: string;
						width: string;
						url: string;
					};
					thumbnail: {
						height: string;
						width: string;
						url: string;
					};
				};
				is_blessed: boolean;
				published_date: string;
				uploaded_date: string;
				user: null;
			};
		};
		review_snippet: {
			snippet: string;
			spans: [];
			review_id: string;
		};
		result_type: string;
		scope: string;
	}[];
	metadata: { scope: string };
	paging: {
		results: string;
		total_results: string;
	};
	partial_content: boolean;
	sort: any;
	tracking: { search_id: string };
}

const App = () => {
	const [center, setCenter] = useState<number[]>([51.505, -0.09]);
	const [hotels, setHotels] = useState<hotelDataTypes | null>(null);
	const [search, setSearch] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const debouncedSearch = useDebounce(search, 1000);
	
	const calculateCenter = () => {
		let latArray:number[] = [];
		let lonArray:number[] = [];
		hotels?.data.forEach(hotel => {
			latArray.push(Number(hotel.result_object.latitude));
			lonArray.push(Number(hotel.result_object.longitude));
		})
		latArray.sort();
		lonArray.sort();
		let latCenter = latArray[latArray.length/2];
		let lonCenter = lonArray[latArray.length/2];
		return([latCenter,lonCenter])
	}
	
	useEffect(() => {
		if (debouncedSearch) {
			setLoading(true);
			getHotels(debouncedSearch).then((res: any) => {
				setHotels(res);
				setLoading(false);
				console.log(res.data);
				setCenter(calculateCenter)
				console.log(`центр: ` + center)
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
				center={[51.505, -0.09]}
				zoom={3}
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
				{hotels?.data.map((hotel, index): any => {
					console.log(
						hotel.result_object.latitude,
						hotel.result_object.longitude
					);
				})}
				<ZoomControl position="bottomright" />
			</MapContainer>
			<Header setSearch={setSearch} center={center} />
		</div>
	);
};

export default App;
