import styles from "./index.module.scss";
import { FC, useState } from "react";
import { Button } from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeCenter } from "../../store/actions-creators/setPosition.action-creators";
import { addCard } from "../../store/actions-creators/filter.actions-creators";
import { RootState } from "../../store";
import { hotelType } from "../../types/types";

interface hotelProps {
	hotel: hotelType;
	setAddIndicator: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hotel: FC<hotelProps> = ({ hotel, setAddIndicator }) => {
	const [hotelOpen, setHotelOpen] = useState(false);
	const dispatch = useDispatch();

	const showAddIndicator = () => {
		setAddIndicator(true);
		setTimeout(() => setAddIndicator(false), 2000);
	};

	const favouritesCards = useSelector(
		(state: RootState) => state.filters.favourites
	);

	const checkRecurringCard = () => {
		const id = Number(hotel.result_object.location_id);
		let flag = true;
		favouritesCards.forEach((card: hotelType) => {
			if (Number(card.result_object.location_id) === id) {
				flag = false;
			}
		});
		return flag;
	};

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
						<Button
							onClick={() => {
								if (checkRecurringCard()) {
									dispatch(addCard(hotel));
									showAddIndicator();
								} else {
									console.log("Карта уже добавлена");
								}
							}}
							type="addcard"
						>
							Add
						</Button>
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
