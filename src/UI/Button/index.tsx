import React from "react";
import styles from "./index.module.scss";
import markerIcon from "../../assets/images/markerIcon.png";
import removeIcon from "../../assets/images/removeIcon.png";

export interface ButtonPropsTypes {
  type?: string;
  children?: React.ReactNode;
  hotelPosition?: [number, number];
  addCard?: any;
}

const Button = ({
  type,
  children,
  addCard
}: ButtonPropsTypes) => {
  
  return (
    <div
      className={`{${styles.button} 
			${type === "addcard" ? styles.button__addcard : ""} 
			${type === "removecard" ? styles.button__removecard : ""} 
			${type === "flyto" ? styles.button__flyto : ""} }`}
    >
      <button className={styles.button__inner}>{children}</button>
      {type === "addcard" && <div onClick={()=>addCard()} className={styles.addcard__icon}>+</div>}
      {type === "removecard" && (
        <div className={styles.removecard__icon}>
          <img src={removeIcon} className={styles.removecard__image} />
        </div>
      )}
      {type === "flyto" && (
        <div className={styles.flyto__icon}>
          <img className={styles.flyto__image} src={markerIcon} />
        </div>
      )}
    </div>
  );
};

export { Button };
