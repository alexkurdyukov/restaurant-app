import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import cn from "classnames";
import { hotelDataTypes, hotelType } from "../../types/types";
import { Hotel } from "../Hotel";
import { LikedCard } from "../LikedCard";
import { AddIndicator } from "../AddIndicator";
import { Button } from "../../UI/Button";
import { CustomSelect } from "../../UI/CustomSelect";
export interface stateProps {
	name: string;
	age: number;
}
const Aside = ({ hotels }: { hotels: hotelDataTypes | null }) => {
	const [asideOpen, setAsideOpen] = useState(false);
	const [addIndicator, setAddIndicator] = useState(false);
	const likedHotels: Array<hotelType> = useSelector(
		(state: any) => state.filters.favourites
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
				{asidePage === "found" && (
					
					<div className={styles.filters}>
						<h4 className={styles.filters__header}>Choose rating</h4>
						<CustomSelect/>
						<Button type = "resetfilters">Reset Filters</Button>
					</div>
					
				)}
				<div className={styles.aside__objects}>
					{asidePage === "found" &&
						hotels?.data.map((object) => (
							<Hotel
								setAddIndicator={setAddIndicator}
								key={object.result_object.location_id}
								hotel={object}
							/>
						))}
					{asidePage === "found" && addIndicator && <AddIndicator />}
					{asidePage === "favourites" &&
						likedHotels.length > 0 &&
						likedHotels?.map((object) => (
							<LikedCard
								key={Number(object.result_object.location_id)}
								hotel={object}
							/>
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
