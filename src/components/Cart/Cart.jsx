import styles from "./Cart.module.css";

export default function Cart() {
  return (
    <div className={styles.cart}>
      <button>Valider mon panier</button>
      <p>Panier est vide</p>
    </div>
  );
}
