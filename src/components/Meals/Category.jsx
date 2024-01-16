import Meal from "./Meal";
import styles from "./Category.module.css";

export default function Category({ ...props }) {
  // console.log("category>>>", props);
  return (
    <article className={styles.category}>
      <h2>{props.dataCategory.name}</h2>
      <ul className={styles.meals}>
        {props.dataCategory.meals.map((meal) => (
          <Meal
            key={meal.id}
            datas={meal}
            setSelectMeals={props.setSelectMeals}
            meals={props.meals}
          />
        ))}
      </ul>
    </article>
  );
}
