// import { useState } from "react";
import styles from "./Item.module.css";

//Composant du repas dans le panier (Cart) ----------------

export default function Item({ ...props }) {
  // récupérer props.meal

  // const [quantity, setQuantity] = useState(1); // State de la quantité choisie
  // const priceToNumber = Number(props.meal.price); // Conversion de la chaîne de caractère en nombre pour effectuer les calculs
  // const [priceItem, setPriceItem] = useState(priceToNumber); // State de la valeur du repas de type Number

  // Fonction permettant de gérer la quantité ----
  // const handleClickQuantity = (operator) => {
  //   if (operator === "+") {
  //     props.meal.quantity += 1;
  //     props.meal.price *= props.meal.quantity;
  //     // setQuantity((prev) => prev + 1);
  //     // setTotal((prev) => prev + priceToNumber);
  //   } else {
  //     props.meal.quantity -= 1;
  //     props.meal.price /= props.meal.quantity;
  //     // setQuantity((prev) => prev - 1);
  //     // setTotal((prev) => prev - priceToNumber);
  //   }
  // };
  const totalItem = props.meal.price * props.meal.quantity;
  // props.setSubTotal(totalItem);

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
      <span>{totalItem} €</span>
    </div>
  );
}
