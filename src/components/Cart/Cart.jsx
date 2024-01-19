// import { useState } from "react";
import styles from "./Cart.module.css";
import Item from "./Item";
import Result from "./Result";

export default function Cart({ ...props }) {
  let subTotal = 0;
  const fee = 2.5; // Valeur des frais de livraison

  const tabPrice = props.cart.map((m) => m.price * m.quantity); // Tableau contenant tous les prix

  // Calcul de la somme des prix
  for (let index = 0; index < tabPrice.length; index++) {
    subTotal += tabPrice[index];
  }

  const totalWithFee = subTotal + fee; // Valeur de total avec ajout des frais de livraison
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
                  // envoyer toutes les infos meal
                  meal={meal}
                  key={meal.id}
                  onClick={props.handleQuantity}
                />
              )
          )}
      </div>
      {props.cart.length === 0 && <p>Votre panier est vide</p>}
      {props.cart.length !== 0 && (
        // Affiche la partie résultat du panier ---
        <div className={styles.result}>
          <Result
            name="Sous-total"
            price={subTotal.toFixed(2).replace(".", ",")}
          />
          <Result
            name="Frais de livraison"
            price={fee.toFixed(2).replace(".", ",")}
          />
          <Result
            name="Total"
            price={totalWithFee.toFixed(2).replace(".", ",")}
          />
        </div>
      )}
    </aside>
  );
}
