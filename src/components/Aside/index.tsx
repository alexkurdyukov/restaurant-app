import React, { useState } from "react";
import styles from "./index.module.scss";
import { Button } from "../../UI/Button/index";
import cn from "classnames";
import { hotelDataTypes } from "../../types/types";
import { Hotel } from "../Hotel";
import { JsxElement, StringLiteral } from "typescript";
export interface stateProps{
  name: string;
  age: number;
}

const Aside = ({ hotels }: { hotels: hotelDataTypes | null }) => {
  const [asideOpen, setAsideOpen] = useState(true);
  const [state, setState] = useState<stateProps>({ name: "", age: 12 });
  const [hotelOpen, setHotelOpen] = useState(false);
  return (
    <div
      className={cn(styles.aside, {
        [styles.aside_opened]: asideOpen,
        [styles.aside_closed]: !asideOpen,
      })}
    >
      <div className={styles.aside__wrapper}>
        <h3 className={styles.aside__header}>Found objects:</h3>
        <div className={styles.aside__objects}>
          {hotels?.data.map((object, index) => (
            <Hotel setState={setState} state={state} key={index} hotel={object} />
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
