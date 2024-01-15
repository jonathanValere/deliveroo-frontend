import styles from "./Item.module.css";
export default function Item({ name, price, quantity }) {
  return (
    <div className={styles.item}>
      <div className={styles["item-infos"]}>
        <div className={styles["item-quantity"]}>
          <span className="icon-minus"></span>
          {quantity} <span className="icon-plus"></span>
        </div>
        {/* name du meal */}
        {name}
      </div>
      {/* Prix du meal */}
      <span>{price} €</span>
    </div>
  );
}
