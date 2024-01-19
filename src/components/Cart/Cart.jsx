// import { useState } from "react";
import styles from "./Cart.module.css";
import Item from "./Item";
import Result from "./Result";

export default function Cart({ ...props }) {
  // const [subTotal, setSubTotal] = useState(0); // Valeur totale du panier
  let subTotal = 0;
  const fee = 2.5; // Valeur des frais de livraison
  const totalWithFee = subTotal + fee; // Valeur de total avec ajout des frais de livraison

  console.log(props.cart);
  // Affiche le panier ---
  return (
    <aside className={styles.cart}>
      <button
        className={
          props.cart.length === 0
            ? styles["button-disabled"]
            : styles["button-validate"]
        }
      >
        Valider mon panier
      </button>
      <div className={styles["items-cart"]}>
        {props.cart.length !== 0 &&
          props.cart.map(
            (meal) =>
              // Affiche le contenu du panier ---

              meal.quantity !== 0 && (
                <Item
                  // envoyer totues les infos meal
                  meal={meal}
                  key={meal.id}
                  onClick={props.handleQuantity}
                  // subTotal={subTotal}
                  // setSubTotal={setSubTotal}
                />
              )
          )}
      </div>
      {props.cart.length === 0 && <p>Votre panier est vide</p>}
      {props.cart.length !== 0 && (
        // Affiche la partie résultat du panier ---
        <div className={styles.result}>
          <Result name="Sous-total" price={subTotal} />
          <Result name="Frais de livraison" price={fee} />
          <Result name="Total" price={totalWithFee} />
        </div>
      )}
    </aside>
  );
}
