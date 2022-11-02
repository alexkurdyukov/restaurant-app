import React, { useState, useEffect } from "react";
import ".//assets/scss/index.scss";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import { Aside } from ".//components/Aside/index";
import { Button } from "./UI/Button/index";
import { Header } from "./components/Header";
import { getHotelData } from "./getHotelsData";

const url = 'http://engine.hotellook.com/api/v2/lookup.json?query=london&lang=en&lookFor=both&limit=10';
const resoult = fetch(url);

function App() {
  const [center, setCenter] = useState([51.505, -0.09]);
  // const [hotels, setHotels] = useState({});
  // useEffect(() => {
  //   getHotelData().then((res) => {
  //     setHotels(res);
  //   });
  //   console.log(hotels);
  // }, []);
  return (
    <div className="App">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        zoomControl={false}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url="https://api.mapbox.com/styles/v1/larinkirv/ckyllcuwg75jp15pwgjud5ldf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGFyaW5raXJ2IiwiYSI6ImNreWxsOXE1YTM3ZTMyd284czZ3N3hnOWcifQ.-IMprWO32bAuJjJQn_uawA"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ZoomControl position="bottomright" />
      </MapContainer>
      <Header center={center} />
      <Aside />
      {}
    </div>
  );
}

export default App;
