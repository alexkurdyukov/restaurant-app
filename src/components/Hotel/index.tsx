import styles from "./index.module.scss";
import { FC, useEffect, useState } from "react";
import { Button } from "../../UI/Button";
import { useDispatch } from "react-redux";

import {
	addCard,
	changeCenter,
} from "../../store/actions-creators/setPosition.action-creators";

interface hotelProps {
	hotel: any;
  setAddIndicator: React.Dispatch<React.SetStateAction<boolean>>
}

const Hotel: FC<hotelProps> = ({ hotel,setAddIndicator }) => {
	const [hotelOpen, setHotelOpen] = useState(false);
	
	const showAddIndicator = () => {
		setAddIndicator(true);
		setTimeout(() => setAddIndicator(false), 2000);
	};
	const dispatch = useDispatch();

	const hotelPositon: number[] = [
		Number(hotel.result_object.latitude),
		Number(hotel.result_object.longitude),
	];
	return (
		<div
			className={`${styles.wrapper} ${hotelOpen ? styles.wrapper__active : ""}`}
		>
			<div
				className={styles.object}
				onClick={() => {
					setHotelOpen(!hotelOpen);
				}}
			>
				<h4 className={styles.object__header}>{hotel?.result_object?.name}</h4>
			</div>
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
						<button
							onClick={() => {
								setHotelOpen(!hotelOpen);
							}}
							className={styles.hotel__closebutton}
						>
							Х
						</button>
					</div>
					<div className={styles.hotel__bottom}>
						<p className={styles.hotel__description}>
							{hotel?.review_snippet?.snippet}
						</p>
					</div>
					<div className={styles.hotel__buttons}>
						<Button onClick={() => {
              dispatch(addCard(hotel))
              showAddIndicator()
            }} type="addcard">
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
							onClick={() => dispatch(changeCenter(hotelPositon))}
						>
							Go to map
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Hotel };
