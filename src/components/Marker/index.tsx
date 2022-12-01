import { useEffect } from "react";
import { Marker } from "react-leaflet";
import { MapPopup } from "../Popup";
import styles from "./index.module.scss";
import { useMap } from "react-leaflet";
import { hotelType } from "../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface MapMarkerProps {
	hotel: hotelType;
	center: any;
}

const MapMarker = ({ hotel, center }: MapMarkerProps) => {
	let latitude = Number(hotel.result_object.latitude);
	let longitude = Number(hotel.result_object.longitude);
	const map = useMap();
	useEffect(() => {
		map.flyTo(center, 12);
		console.log('летим в ', center)
	}, [center]);
	const centerPosition = useSelector(
		(state: RootState) => state.setPosition.centerPosition
	);

	// useEffect(() => {
	// 	map.flyTo(centerPosition, 18);
	// 	console.log('летим в ', centerPosition)
	// }, [centerPosition]);

	return (
		<div className={styles.marker}>
			<Marker position={[latitude, longitude]}>
				<MapPopup hotel={hotel} />
			</Marker>
		</div>
	);
};

export { MapMarker };
