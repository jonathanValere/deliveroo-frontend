import styles from "./Result.module.css";

// Composant qui affiche le résultat du panier, 3 seront créés (sous-total, frais de livraison, total)

export default function Result({ ...props }) {
  return (
    <div
      className={`${styles.result} ${
        props.name === "Total" ? styles.total : ""
      }`}
    >
      <div className={styles["result-infos"]}>{props.name}</div>
      {/* <span>{props.price.toFixed(2).replace(".", ",")} €</span> */}
      <span>{props.price} €</span>
    </div>
  );
}
