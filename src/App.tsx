import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { changeCenter } from "./store/actions-creators/setPosition.action-creators";
import {
	fetchData,
	resetFilters,
} from "./store/actions-creators/filter.actions-creators";
import { RootState } from "./store";

import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import { Aside } from ".//components/Aside/index";
import { Header } from "./components/Header";
import { MapMarker } from "./components/Marker";

import { getHotels } from "./utils/getHotels";
import useDebounce from "./utils/useDebounce";
import { calculateCenter } from "./utils/centerCalculator";
import { Loader } from "./UI/Loader";

import { hotelDataTypes, hotelType } from "./types/types";
import ".//assets/scss/index.scss";

const App = () => {
	// const [hotels, setHotels] = useState<hotelDataTypes | null>(null);
	const [search, setSearch] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [center, setCenter] = useState<[number, number]>([51.505, -0.09]);

	const debouncedSearch = useDebounce(search, 1000);

	const dispatch = useDispatch();
	const store = useSelector((state: RootState) => state.filters);
	useEffect(() => {
		console.log(store);
	}, [store]);

	useEffect(() => {
		if (debouncedSearch) {
			setLoading(true);
			getHotels(debouncedSearch).then((res: any) => {
				dispatch(resetFilters());
				setLoading(false);
				console.log(res.data);
				dispatch(fetchData(res.data));
				setCenter(calculateCenter(res));
				dispatch(changeCenter(calculateCenter(res)));
			});
		}
	}, [debouncedSearch]);
	return (
		<>
			<div className="App">
				<MapContainer
					center={center}
					zoom={3}
					zoomControl={false}
					scrollWheelZoom={true}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{store?.filtredCards.map((hotel: hotelType, index: number): any => {
						let latitude = Number(hotel.result_object.latitude);
						let longitude = Number(hotel.result_object.longitude);
						return (
							!isNaN(latitude) &&
							!isNaN(longitude) && (
								<MapMarker key={index} center={center} hotel={hotel} />
							)
						);
					})}
					<ZoomControl position="bottomright" />
				</MapContainer>
				<Header setSearch={setSearch} center={center} />
				<Aside hotels={store.filtredCards} />
			</div>
			{loading && <Loader />}
		</>
	);
};

export default App;
