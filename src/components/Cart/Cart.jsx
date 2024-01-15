import styles from "./Cart.module.css";
import Item from "./Item";

export default function Cart() {
  return (
    <div className={styles.cart}>
      <button>Valider mon panier</button>
      <Item name="Brunch" price={25.0} quantity={3} />
      <p>Panier est vide</p>
    </div>
  );
}
