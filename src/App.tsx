import React, { useState } from "react";
import ".//assets/scss/index.scss";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";


interface CenterProps {
	center: any;
	setCenter?: Function;
}

const Header = ({center}:CenterProps) => {
  return (
    <header className="header">
      <div className="header__wrapper wrapper">
        <span className="header__title">Interactive Resraraunt Map</span>
        <label className="header__search">
          <input placeholder="Enter your location" className="header__input" />
          <div className="header__search-icon">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
            </svg>
          </div>
        </label>
      </div>
    </header>
  );
};


function App() {
	const [center,setCenter] = useState([51.505, -0.09]);
	return (
    <div className="App">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <Header center={center}/>
    </div>
  );
}

export default App;
