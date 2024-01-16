import styles from "./Cart.module.css";
import Item from "./Item";

export default function Cart({ ...props }) {
  return (
    <aside className={styles.cart}>
      <button>Valider mon panier</button>
      <div className={styles["items-cart"]}>
        {props.meals.length !== 0 ? (
          props.meals.map((meal) => (
            <Item
              key={meal.id}
              name={meal.title}
              price={meal.price}
              quantity={1}
              champs="product"
            />
          ))
        ) : (
          <p>Votre panier est vide.</p>
        )}
      </div>
      {props.meals.length !== 0 && (
        <div>
          <Item name="Sous-total" price={0} />
          <Item name="Frais de livraison" price={2.5} />
          <Item name="Total" price={0} />
        </div>
      )}
    </aside>
  );
}
