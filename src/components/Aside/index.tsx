import React from "react";
import { Button } from "../../UI/Button/index";

const Aside = () => {
  return (
    <div className="aside">
      <div className="aside__container ">
        <div className="aside__wrapper">
          <div className="aside__buttons">
            <Button type={"filter"}>Hotels</Button>
            <Button type={""}>My favorite hotels</Button>
          </div>
        </div>
        <div className="aside__tool">
          <div className="triangle"></div>
        </div>
      </div>
    </div>
  );
};

export { Aside };
