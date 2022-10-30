import React, { useState } from "react";

import ".//assets/scss/index.scss";
import { MapContainer, TileLayer, useMap, Marker, Popup, ZoomControl } from "react-leaflet";
import { Aside } from ".//components/Aside/index";
import { Button } from "./UI/Button/index";

export interface CenterProps {
  center: number[];
  setCenter?: React.Dispatch<React.SetStateAction<number[]>>;
}

// const getCoordinatesData = () => {
// 	const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '5dac77ef2amsh8eb3f04c38b7ddep18ae4ejsn6efe878d52c6',
//       'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
//     }
//   };
//   fetch('https://booking-com.p.rapidapi.com/v1/hotels/data?hotel_id=1377073&locale=en-gb', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// };
// getCoordinatesData();

const getCitiesData = async () => {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '5dac77ef2amsh8eb3f04c38b7ddep18ae4ejsn6efe878d52c6',
			'X-RapidAPI-Host': 'spott.p.rapidapi.com'
		}
	};
	
	fetch('https://spott.p.rapidapi.com/places?type=CITY&q=New%20York', options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
}
getCitiesData()

const Header = ({ center }: CenterProps) => {
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
  const [center, setCenter] = useState([51.505, -0.09]);
  return (
    <div className="App">
      <MapContainer center={[51.505, -0.09]} zoom={13} zoomControl={false} scrollWheelZoom={true}>
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          url="https://api.mapbox.com/styles/v1/larinkirv/ckyllcuwg75jp15pwgjud5ldf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGFyaW5raXJ2IiwiYSI6ImNreWxsOXE1YTM3ZTMyd284czZ3N3hnOWcifQ.-IMprWO32bAuJjJQn_uawA"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
		<ZoomControl position="bottomright"/>
      </MapContainer> 
	  <Header center={center} />
      <Aside />
    </div>
  );
}

export default App;
