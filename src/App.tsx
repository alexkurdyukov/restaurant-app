import React, { useState, useEffect } from "react";
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

interface hotelDataTypes{
  result_object: {
    latitude: string;
    longitude: string;
    location_string: string;
    name: string;
    geo_description: string;
    photo: {
      images:{
        medium:{
          width: string;
          height: string;
          url: string;
        }
      }
    }
  }
}

const App = () => {
  const [center, setCenter] = useState([51.505, -0.09]);
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    getHotelData().then((res) => {
      setHotels(res.data);
      console.log(res.data);
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
      <div className="massive">
        {/* {hotels?.data.map((hotel: any, index: number) => {
            <Marker key={index}
              position={[
                hotel.result_object.latitude,
                hotel.result_object.longitude,
              ]}
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>;
          })} */}
      </div>
    </div>
  );
}

export default App;
