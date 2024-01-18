import styles from "./Cart.module.css";
import Item from "./Item";
import Result from "./Result";

export default function Cart({ ...props }) {
  const fee = 2.5; // Valeur des frais de livraison
  const totalWithFee = props.total + fee; // Valeur de total avec ajout des frais de livraison

  const handleRemoveMealToCart = (idMeal) => {
    const copyCart = [...props.cart];
    const copyCartUpdated = copyCart.filter((meal) => meal.id !== idMeal);
    props.setCart(copyCartUpdated);
  };

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
          props.cart.map((meal) => (
            // Affiche le contenu du panier ---
            <Item
              key={meal.id}
              id={meal.id}
              name={meal.title}
              price={meal.price}
              setTotal={props.setTotal}
              handleRemoveMealToCart={handleRemoveMealToCart}
            />
          ))}
      </div>
      {props.cart.length === 0 && <p>Votre panier est vide</p>}
      {props.cart.length !== 0 && (
        // Affiche la partie résultat du panier ---
        <div className={styles.result}>
          <Result name="Sous-total" price={props.total} />
          <Result name="Frais de livraison" price={fee} />
          <Result name="Total" price={totalWithFee} />
        </div>
      )}
    </aside>
  );
}
