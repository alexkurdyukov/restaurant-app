import styles from "./index.module.scss";
import { FC, useEffect, useState } from "react";
import { Button } from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";

import {
  addCard,
  changeCenter,
} from "../../store/actions-creators/setPosition.action-creators";
import { RootState } from "../../store";

interface hotelProps {
  hotel: any;
}

const Hotel: FC<hotelProps> = ({ hotel }) => {
  const [hotelOpen, setHotelOpen] = useState(false);
  const dispatch = useDispatch();
  const hotelPositon: number[] = [
    Number(hotel.result_object.latitude),
    Number(hotel.result_object.longitude),
  ];
  if (!hotelOpen) {
    return (
      <div
        onClick={() => {
          setHotelOpen(!hotelOpen);
        }}
        className={styles.object}
      >
        <h4 className={styles.object__header}>{hotel?.result_object?.name}</h4>
      </div>
    );
  }
  return (
    <div className={styles.hotel}>
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
              {hotel?.result_object?.rating}
            </div>
          </div>
          <button onClick={() => setHotelOpen} className={styles.hotel__closebutton}>Х</button>
        </div>
        <div className={styles.hotel__bottom}>
          <p className={styles.hotel__description}>
            {hotel?.review_snippet?.snippet}
          </p>
        </div>
        <div className={styles.hotel__buttons}>
          <Button onClick={() => dispatch(addCard(hotel))} type="addcard">
            Add
          </Button>
          {/* <Button
            onClick={() =>
              dispatch(removeCard((hotel.result_object.location_id)))
            }
            type="removecard"
          >
            Remove
          </Button> */}
          <Button
            type="flyto"
            onClick={() =>
              dispatch(changeCenter(hotelPositon))
            }
          >
            Go to map
          </Button>
        </div>
      </div>
    </div> 
  );
};

export { Hotel };
