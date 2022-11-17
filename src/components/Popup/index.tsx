import React from "react";
import { Popup, useMapEvents } from "react-leaflet";

const MapPopup = ({hotel}: any) => {
  return ( 
    <Popup>
      <div className="popup__wrapper">
        <div className="popup__header">{hotel?.result_object?.name}</div>
        <div className="popup__image">
          <img src={hotel?.result_object?.photo?.images?.medium?.url} />
        </div>
        <span className="popup__rating">{hotel?.result_object?.rating}</span>
        <div className="popup__adress">
          <span className="popup__text">Adress:</span>{" "}
          {hotel?.result_object?.address}
        </div>
        <div className="popup__description">
          <span className="popup__text">Description:</span>{" "}
          {hotel?.review_snippet?.snippet}
        </div>
      </div>
    </Popup>
  ) 
};

export {MapPopup}