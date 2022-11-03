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

const hotelDataOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5dac77ef2amsh8eb3f04c38b7ddep18ae4ejsn6efe878d52c6",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

function App() {
  const [center, setCenter] = useState([51.505, -0.09]);
  const [hotels, setHotels] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     `https://travel-advisor.p.rapidapi.com/locations/search?query=pattaya&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`,
  //     hotelDataOptions
  //   ).then(res => {
  //     return res.json()
  //   }).then(data => {
  //     setHotels(data)
  //     console.log(hotels)
  //   })
  // },[]);
  useEffect(() => {
    getHotelData().then((res) => {
      setHotels(res.data);
      console.log(res);
    });
  }, []);
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
      <div className="massive">{}</div>
    </div>
  );
}

export default App;
