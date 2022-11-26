import { Popup } from "react-leaflet";
import styles from "./index.module.scss";

const MapPopup = ({ hotel }: any) => {
	return ( 
		<Popup>
			<div className={styles.popup__wrapper}>
				<div className={styles.popup__header}>{hotel?.result_object?.name}</div>
				<div className={styles.popup__imagecontainer}>
					<img
						className={styles.popup__image}
						src={hotel?.result_object?.photo?.images?.medium?.url}
					/>
				</div>
				<span className={styles.popup__rating}>
					{hotel?.result_object?.rating}
				</span>

				{hotel.result_object.address ? (
					<div className={styles.popup__adress}>
						<span className={styles.popup__text}>Adress:</span>{" "}
						{hotel?.result_object?.address}
					</div>
				) : (
					<div className={styles.popup__nocoordinates}>
						<div className={styles.popup__info}>
							We don't have adress. Only coordinates:
						</div>
						<div className={styles.popup__coordinates}>
							{hotel?.result_object?.latitude}, {hotel?.result_object?.longitude}{" "}
						</div>
					</div>
				)}
				<div className={styles.popup__description}>
					{hotel?.review_snippet?.snippet.length > 5 ? (
						<>
							<span className={styles.popup__text}>Description: </span>
							{hotel?.review_snippet?.snippet}
						</>
					) : (
						<div>There's no description👋</div>
					)}
				</div>
			</div>
		</Popup>
	);
};

export { MapPopup };
