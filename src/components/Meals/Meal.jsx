import styles from "./Meal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Composant qui affiche un repas
// ⚠️ A FAIRE : modifier le state quantity qui se trouve dans la panier (Cart > Item) lorsque l'on clique sur le composant (dans la boucle for of ?)

export default function Meal({ ...props }) {
  // Fonction permettant d'ajouter le repas dans le panier
  const handleAddMealToCart = () => {
    const copyCart = [...props.cart];
    const priceMeal = Number(props.datas.price);

    // Boucle qui vérifie si le repas avait déjà été inséré dans le panier. Si c'est le cas, ne pas l'afficher dans ce dernier mais modifie la valeur du state total
    for (const meal of copyCart) {
      if (meal.id === props.datas.id) {
        props.setTotal(props.total + priceMeal);
        return console.log("Il est déjà choisi");
      }
    }

    copyCart.push(props.datas);
    props.setTotal(props.total + priceMeal);
    return props.setCart(copyCart);
  };

  return (
    <li className={styles.meal} onClick={handleAddMealToCart}>
      <div>
        <h3>{props.datas.title}</h3>
        <p className={styles.description}>{props.datas.description}</p>
        <p className={styles["price-popular"]}>
          {props.datas.price} €
          {props.datas.popular && (
            <span>
              {" "}
              <FontAwesomeIcon icon="star" /> Populaire
            </span>
          )}
        </p>
      </div>
      {props.datas.picture && <img src={props.datas.picture} alt="plat" />}
    </li>
  );
}
