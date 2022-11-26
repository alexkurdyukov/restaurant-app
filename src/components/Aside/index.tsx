import React, { useState } from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { hotelDataTypes } from "../../types/types";
import { Hotel } from "../Hotel";
export interface stateProps{
  name: string;
  age: number;
}

const Aside = ({ hotels }: { hotels: hotelDataTypes | null }) => {
  const [asideOpen, setAsideOpen] = useState(false);
  
  return (
    <div
      className={cn(styles.aside, {
        [styles.aside_opened]: asideOpen,
        [styles.aside_closed]: !asideOpen,
      })}
    >
      <div className={styles.aside__wrapper}>
        <div className={styles.aside__header}>
          <h3 className={styles.aside__found}>Found objects</h3>
          <h3 className={styles.aside__favourites}>Favourites</h3> 
        </div>
        <div className={styles.aside__objects}>
          {hotels?.data.map((object, index) => (
            <Hotel  key={index} hotel={object} />
          ))}
        </div>
      </div>
      <div
        className={styles.aside__button}
        onClick={() => {
          setAsideOpen(!asideOpen);
        }}
      ></div>
    </div>
  );
};

export { Aside };
