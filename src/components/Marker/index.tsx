import React from "react";
import { Marker} from "react-leaflet";
import { MapPopup } from "../Popup";
import styles from './index.module.scss'
import { useMap } from "react-leaflet";

interface MapMarkerProps {
  hotel: any;
  center: number[]
}

const MapMarker = ({ hotel,center }: any) => {
  let latitude = Number(hotel.result_object.latitude);
  let longitude = Number(hotel.result_object.longitude);
  const map = useMap()
  map.flyTo(center,12)
  return (
    <div className={styles.marker}>
      <Marker position={[latitude, longitude]}>
        <MapPopup hotel={hotel}/>
      </Marker>
    </div>
  );
};

export { MapMarker };
