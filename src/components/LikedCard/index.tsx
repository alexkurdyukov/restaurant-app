import styles from "./index.module.scss";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../UI/Button";
import { removeCard } from "../../store/actions-creators/setPosition.action-creators";

interface hotelProps {
	hotel: any;
}

const LikedCard: FC<hotelProps> = ({ hotel }) => {
	const [likedHotelOpen, setLikedHotelOpen] = useState(false);
	const dispatch = useDispatch();
	if (!likedHotelOpen) {
		return (
			<div
				onClick={() => {
					setLikedHotelOpen(!likedHotelOpen);
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
				</div>
				<div className={styles.hotel__bottom}>
					<p className={styles.hotel__description}>
						{hotel?.review_snippet?.snippet}
					</p>
				</div>
				<Button
					onClick={() => dispatch(removeCard(hotel.result_object.location_id))}
					type="removecard"
				>
					Remove
				</Button>
			</div>
		</div>
	);
};

export { LikedCard };
