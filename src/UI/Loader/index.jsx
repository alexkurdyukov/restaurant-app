import styles from "./loader.module.scss";

const Loader = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.loader__wrapper}>
				<div className={styles.loader__ring}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export { Loader };
