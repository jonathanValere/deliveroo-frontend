import { useState, useEffect } from "react";
import styles from "./Item.module.css";

//Composant du repas dans le panier (Cart) ----------------

export default function Item({ ...props }) {
  const { name, price, setTotal, handleRemoveMealToCart, id } = props;

  const [quantity, setQuantity] = useState(1); // State de la quantité choisie
  const priceToNumber = Number(price); // Conversion de la chaîne de cractère en nombre pour effectuer les calculs
  const [priceItem, setPriceItem] = useState(priceToNumber); // State de la valeur du repas de type Number

  // Hook déclenché au moment où quantity est mis à jour. Il modifie la valeur du repas

  useEffect(() => {
    const newPrice = priceToNumber * quantity;
    setPriceItem(newPrice);
    // Gestion de la suppression du panier lorsque la quantité est à 0. --
    if (quantity === 0) {
      handleRemoveMealToCart(id);
    }
    // --
  }, [quantity]);

  //Fonction permettant de gérer la quantité ----
  const handleClickQuantity = (operator) => {
    if (operator === "+") {
      setQuantity((prev) => prev + 1);
      setTotal((prev) => prev + priceToNumber);
    } else {
      setQuantity((prev) => prev - 1);
      setTotal((prev) => prev - priceToNumber);
    }
  };

  return (
    <div className={styles.item}>
      <div className={styles["item-infos"]}>
        <div className={styles["item-quantity"]}>
          <span
            className="icon-minus"
            onClick={() => handleClickQuantity("-")}
          ></span>
          {quantity}{" "}
          <span
            className="icon-plus"
            onClick={() => handleClickQuantity("+")}
          ></span>
        </div>
        {/* name du meal */}
        {name}
      </div>
      {/* Prix du meal */}
      <span>{priceItem} €</span>
    </div>
  );
}
