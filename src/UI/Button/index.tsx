import React from "react";
import styles from "./index.module.scss";
import markerIcon from "../../assets/images/markerIcon.png";
import removeIcon from "../../assets/images/removeIcon.png";
import cn from "classnames";

export interface ButtonPropsTypes {
	type?: string;
	children?: React.ReactNode;
	hotelPosition?: [number, number];
	onClick?: any;
}

const Button = ({ type, children, onClick }: ButtonPropsTypes) => {
	if (type) {
		return (
			<button
				onClick={onClick}
				className={cn(styles.button, {
					[styles.button__addcard]: type === "addcard",
					[styles.button__removecard]: type === "removecard",
					[styles.button__flyto]: type === "flyto",
					[styles.button__resetfilters]: type === "resetfilters",
				})}
			>
				{type === "resetfilters" ? (
					<div className={styles.resetfilters__inner}>{children}</div>
				) : (
					<div className={styles.button__inner}>{children}</div>
				)}
				{type === "addcard" && <span className={styles.addcard__icon}>+</span>}
				{type === "removecard" && (
					<img src={removeIcon} className={styles.removecard__image} />
				)}
				{type === "flyto" && (
					<img className={styles.flyto__image} src={markerIcon} />
				)}
			</button>
		);
	}
	return (
		<button className={styles.button__default}>
			<div className={styles.button__inner}>{children}</div>
		</button>
	);
};

export { Button };
