import { useState, useEffect } from "react";
import styles from "./Item.module.css";
export default function Item({ ...props }) {
  const { name, price, setTotal } = props;
  const [quantity, setQuantity] = useState(1);
  const [priceItem, setPriceItem] = useState(Number(price));

  const handleClickQuantity = (operator) => {
    return operator === "+"
      ? setQuantity(quantity + 1)
      : setQuantity(quantity - 1);
  };

  useEffect(() => {
    setPriceItem(quantity * priceItem);
  }, [quantity]);

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
