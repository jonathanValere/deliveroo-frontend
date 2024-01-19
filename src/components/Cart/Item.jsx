// import { useState } from "react";
import styles from "./Item.module.css";

//Composant du repas dans le panier (Cart) ----------------

export default function Item({ ...props }) {
  const totalItem = props.meal.price * props.meal.quantity;

  return (
    <div className={styles.item}>
      <div className={styles["item-infos"]}>
        <div className={styles["item-quantity"]}>
          <span
            className="icon-minus"
            onClick={() => props.onClick(props.meal.id, "-")}
          ></span>
          {props.meal.quantity}{" "}
          <span
            className="icon-plus"
            onClick={() => props.onClick(props.meal.id, "+")}
          ></span>
        </div>
        {/* name du meal */}
        {props.meal.title}
      </div>
      {/* Prix du meal */}
      <span>{totalItem.toFixed(2).replace(".", ",")} €</span>
    </div>
  );
}
