import Meal from "./Meal";
import styles from "./Category.module.css";

// Composant qui affiche la catégorie avec ses différents repas

export default function Category({ ...props }) {
  return (
    <article className={styles.category}>
      <h2>{props.dataCategory.name}</h2>
      <ul className={styles.meals}>
        {props.dataCategory.meals.map((meal) => (
          // Boucle pour afficher tous les repas de la catégorie
          <Meal
            key={meal.id}
            datas={meal}
            cart={props.cart}
            setCart={props.setCart}
            total={props.total}
            setTotal={props.setTotal}
          />
        ))}
      </ul>
    </article>
  );
}
