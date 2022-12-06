import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { filterCards } from "../../store/actions-creators/filter.actions-creators";

const selectList = [
	{ value: 1, text: "1" },
	{ value: 2, text: "2" },
	{ value: 3, text: "3" },
	{ value: 4, text: "4" },
	{ value: 5, text: "5" },
];

export const CustomSelect = () => {
	const [isSelectOpen, setSelectOpen] = useState(false);
	const [selectText, setSelectText] = useState("rating");
	const dispatch = useDispatch();
	useEffect(() => {
		console.log(isSelectOpen);
	}, [isSelectOpen]);
	return (
		<div className={styles.select}>
			<div
				onClick={() => setSelectOpen(!isSelectOpen)}
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
									setSelectOpen(!isSelectOpen);
									setSelectText(select.text);
									dispatch(filterCards(parseInt(selectText)));
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
