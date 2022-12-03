import { useState } from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { hotelDataTypes, hotelType } from "../../types/types";
import { Hotel } from "../Hotel";
import { useDispatch, useSelector } from "react-redux";
import { LikedCard } from "../LikedCard";
import { AddIndicator } from "../AddIndicator";
export interface stateProps {
  name: string;
  age: number;
}

const Aside = ({ hotels }: { hotels: hotelDataTypes | null }) => {
  const [asideOpen, setAsideOpen] = useState(false);
  const likedHotels: Array<hotelType> = useSelector(
    (state: any) => state.setPosition.cards
  );
  const [asidePage, setAsidePage] = useState<"found" | "favourites">("found");
  return (
    <div
      className={cn(styles.aside, {
        [styles.aside_opened]: asideOpen,
        [styles.aside_closed]: !asideOpen,
      })}
    >
      <div className={styles.aside__wrapper}>
        <div className={styles.aside__headers}>
          <h3
            onClick={() => setAsidePage("found")}
            className={cn(styles.aside__header, styles.aside__found, {
              [styles.aside__active]: asidePage === "found",
            })}
          >
            Found objects
          </h3>
          <h3
            onClick={() => setAsidePage("favourites")}
            className={cn(styles.aside__header, styles.aside__favourites, {
              [styles.aside__active]: asidePage === "favourites",
            })}
          >
            Favourites
          </h3>
        </div>
        <div className={styles.aside__objects}>
          {asidePage === "found" &&
            hotels?.data.map((object) => (
              <Hotel key={object.result_object.location_id} hotel={object} />
            ))}
          {asidePage === "favourites" &&
            likedHotels.length > 0 &&
            likedHotels?.map((object) => (
              <LikedCard
                key={Number(object.result_object.location_id)}
                hotel={object}
              />
            ))}
            
        </div>
        {hotels && <AddIndicator/>}
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
