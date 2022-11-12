import React from "react";
import LoaderCSS from "./loader.module.scss";

const Loader = () => {
	return (
		<div className={LoaderCSS.loader}>
			<div className={LoaderCSS.loader__wrapper}>
				<div className={LoaderCSS.loader__ring}>
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
