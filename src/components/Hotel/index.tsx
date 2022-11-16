import styles from "./index.module.scss";
import { hotelDataTypes } from "../../types/types";
import { FC, useState } from "react";
import classNames from "classnames";
import { stateProps } from "../Aside";
import { Button } from "../../UI/Button";
interface hotelProps {
  hotel: any;
  setState: React.Dispatch<React.SetStateAction<stateProps>>;
  state: stateProps;
}

const Hotel: FC<hotelProps> = ({ hotel, setState, state }) => {
  const [hotelOpen, setHotelOpen] = useState(false);
  if (!hotelOpen) {
    return (
      <div
        onClick={() => {
          setHotelOpen(!hotelOpen);
        }}
        className={styles.object}
      >
        <h4 className={styles.object__header}>{hotel?.result_object?.name}</h4>
        <p className={styles.object__description}></p>
        <span className={styles.object__description}></span>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          setHotelOpen(!hotelOpen);
        }}
        className={styles.hotel}
      >
        <div className={styles.hotel__wrapper}>
          <div className={styles.hotel__top}>
            <div className={styles.hotel__imagecontainer}>
              <img
                src={hotel?.result_object?.photo?.images?.medium?.url}
                className={styles.hotel__image}
              />
            </div>
            <div className={styles.hotel__info}>
              <h4 className={styles.hotel__name}>{hotel.result_object.name}</h4>
              <span className={styles.hotel__country}>
                {hotel?.result_object?.address_obj?.country}
              </span>
              <span className={styles.hotel__city}>
                {hotel?.result_object?.address_obj?.city}
              </span>
              <div className={styles.hotel__rating}>
                {hotel.result_object.rating}
              </div>
            </div>
          </div>

          <div className={styles.hotel__bottom}>
            <p className={styles.hotel__description}>
              {hotel?.review_snippet?.snippet}
            </p>
          </div>

          <div className={styles.hotel__buttons}>
            <Button>Add to favorite cards</Button>
            <Button>Go to map</Button>
          </div>
        </div>
      </div>
    );
  }
};

export { Hotel };
