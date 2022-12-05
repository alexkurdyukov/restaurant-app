import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import cn from "classnames";

const selectList = [
	{ value: 1, text: ">1" },
	{ value: 2, text: ">2" },
	{ value: 3, text: ">3" },
	{ value: 4, text: ">4" },
	{ value: 5, text: "5" },
];

export const CustomSelect = () => {
	const [isSelectOpen, setSelectOpen] = useState(false);
	const [selectText, setSelectText] = useState(false);
	useEffect(() => {
		console.log(isSelectOpen);
	}, [isSelectOpen]);

	return (
		<div className={styles.select}>
			<div
				className={cn(
					styles.select__wrapper,
					{ [styles.select__opened]: isSelectOpen },
					{ [styles.select__closed]: !isSelectOpen }
				)}
			>
				<div
					className={styles.select__content}
					onClick={() => setSelectOpen(!isSelectOpen)}
				>
					<span className={styles.select__text}>Rating</span>
					<div className={styles.select__icon}>
						<div className={styles.select__triangle}></div>
					</div>
				</div>

				<div className={styles.select__list}>
					<span className={styles.select__element}>&ge; 1</span>
					<span className={styles.select__element}>&ge; 2</span>
					<span className={styles.select__element}>&ge; 3</span>
					<span className={styles.select__element}>&ge; 4</span>
					<span className={styles.select__element}>5</span>
				</div>
			</div>
		</div>
	);
};
