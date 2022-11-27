import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { hotelDataTypes } from "../../types/types";
import { Hotel } from "../Hotel";
import { useSelector } from "react-redux";
export interface stateProps {
	name: string;
	age: number;
}

const Aside = ({ hotels }: { hotels: hotelDataTypes | null }) => {
	const [asideOpen, setAsideOpen] = useState(false);
	const [asidePage, setAsidePage] = useState("foundObject");
	let favouriteCards = useSelector<any>(state => state.cards)
	useEffect(() => {console.log(favouriteCards)}, [favouriteCards])
  	return (
		<div
			className={cn(styles.aside, {
				[styles.aside_opened]: asideOpen,
				[styles.aside_closed]: !asideOpen,
			})}
		>
			<div className={styles.aside__wrapper}>
				<div className={styles.aside__header}>
					<h3
						onClick={() => setAsidePage("foundObject")}
						className={styles.aside__found}
					>
						Found objects
					</h3>
					<h3
						onClick={() => setAsidePage("favourites")}
						className={styles.aside__favourites}
					>
						Favourites
					</h3>
				</div>
				{asidePage == "foundObject" && (
					<div className={styles.aside__objects}>
						{hotels?.data.map((object, index) => (
							<Hotel key={index} hotel={object} />
						))}
					</div>
				)}
				{asidePage == "favourites" && (
					<div className={styles.aside__objects}>
						
					</div>
				)}
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
