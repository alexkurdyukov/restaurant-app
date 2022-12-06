import { useState } from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { useDispatch } from "react-redux";
import {
	changeRating,
	filterCards,
} from "../../store/actions-creators/filter.actions-creators";

const selectList = [
	{ value: 1 },
	{ value: 2 },
	{ value: 3 },
	{ value: 4 },
	{ value: 5 },
];

export const CustomSelect = () => {
	const [isSelectOpen, setSelectOpen] = useState(true);
	const [selectText, setSelectText] = useState(5);
	const dispatch = useDispatch();
	return (
		<div className={styles.select} onClick={() => setSelectOpen(!isSelectOpen)}>
			<div
				className={cn(
					styles.select__wrapper,
					{ [styles.select__opened]: isSelectOpen },
					{ [styles.select__closed]: !isSelectOpen }
				)}
			>
				<div className={styles.select__content}>
					<span className={styles.select__text}>{selectText}</span>
					<div className={styles.select__icon}>
						<div className={styles.select__triangle}></div>
					</div>
				</div>
				{isSelectOpen && (
					<div className={styles.select__list}>
						{selectList.map((select) => (
							<span
								key={select.value}
								onClick={() => {
									setSelectText(select.value);
									dispatch(changeRating(select.value));
									dispatch(filterCards());
								}}
								className={styles.select__element}
							>
								&ge; {select.value}
							</span>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
