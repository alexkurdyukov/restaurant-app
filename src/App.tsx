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

interface hotelDataTypes {
	data: {
		is_top_result: boolean;
		result_object: { latitude: string; longitude: string; location_id: string };
		result_type: string;
		scope: string;
	}[];
	metadata: { scope: string };
	paging: { results: string; total_results: string };
	partial_content: boolean;
	sort: any;
	tracking: { search_id: string };
}

const App = () => {
	const [center, setCenter] = useState<number[]>([51.505, -0.09]);
	const [hotels, setHotels] = useState<hotelDataTypes | null>(null);
	useEffect(() => {
		getHotelData().then((res) => {
			setHotels(res);
			console.log(res);
		});
	}, []);
	return (
		<div className="App">
			<MapContainer
				center={[51.505, -0.09]}
				zoom={3}
				zoomControl={false}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
					url="https://api.mapbox.com/styles/v1/larinkirv/ckyllcuwg75jp15pwgjud5ldf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGFyaW5raXJ2IiwiYSI6ImNreWxsOXE1YTM3ZTMyd284czZ3N3hnOWcifQ.-IMprWO32bAuJjJQn_uawA"
				/>
				{hotels?.data.map((hotel, index): any => {
					<Marker
						key={hotel.result_object.location_id}
						position={[
							Number(hotel.result_object.latitude),
							Number(hotel.result_object.longitude),
						]}
					>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>;
				})}
				<ZoomControl position="bottomright" />
			</MapContainer>
			<Header center={center} />
			<Aside />
		</div>
	);
};

export default App;
