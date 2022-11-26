import React from "react";
import styles from "./index.module.scss";

export interface ButtonPropsTypes {
	type?: string;
	children?: React.ReactNode;
	hotelPosition?: [number,number];
	onClick?: void;
}

const Button = ({ type, children, onClick,hotelPosition }: ButtonPropsTypes) => {
	return (
		<div
			className={`{${styles.button} 
			${type === "addcard" ? styles.button__addcard : ""} 
			${type === "removecard" ? styles.button__removecard : ""} 
			${type === "removecard" ? styles.button__flyto : ""} }`}
		>
			<button>{children}</button>
		</div>
	);
};

export { Button };
