import React from "react";
import sliderIcon from "../../assets/images/sliderIcon.svg";
export interface ButtonTypes {
  type? : string;
  children? : React.ReactNode;
}

const Button = ({ type, children }: ButtonTypes) => {
  if (type === "filter") {
    return (
      <div className="button-container">
        <button className="button">{children}</button>
        <div className="button__image-container">
          <img className='button__image' src={sliderIcon} />
        </div>
      </div>
    );
  }
  return (
    <div className="button-container">
      <button className="button">{children}</button>
    </div>
  );
};

export { Button }; 
