import styles from "./Cart.module.css";
import Item from "./Item";
import Result from "./Result";

export default function Cart({ ...props }) {
  const fee = 2.5;
  const subTotal = props.total - fee;
  // const subTwoDecimal = subTotal.toFixed(2).replace(".", ",");
  // const totalTwoDecimal = props.total.toFixed(2).replace(".", ",");
  // console.log(props);
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
            <Item
              key={meal.id}
              name={meal.title}
              price={meal.price}
              setTotal={props.setTotal}
            />
          ))}
      </div>
      {props.cart.length === 0 && <p>Votre panier est vide</p>}
      {props.cart.length !== 0 && (
        <div>
          <Result name="Sous-total" price={subTotal} />
          <Result name="Frais de livraison" price={fee} />
          <Result name="Total" price={props.total} />
        </div>
      )}
    </aside>
  );
}
