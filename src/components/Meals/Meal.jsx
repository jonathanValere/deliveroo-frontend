import styles from "./Meal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Composant qui affiche un repas

export default function Meal({ ...props }) {
  // Fonction permettant d'ajouter le repas dans le panier
  const handleAddMealToCart = () => {
    const copyCart = [...props.cart];

    // Boucle qui vérifie si le repas avait déjà été inséré dans le panier. Si c'est le cas, ne pas l'afficher dans ce dernier mais modifie la valeur du state total
    for (const meal of copyCart) {
      if (meal.id === props.datas.id) {
        // Ajout d'une quantité supplémentaire
        meal.quantity += 1;
        props.setCart(copyCart);
        return console.log("Ajout d'une quantité en plus");
      }
    }

    props.datas.quantity = 1;
    copyCart.push(props.datas);
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
