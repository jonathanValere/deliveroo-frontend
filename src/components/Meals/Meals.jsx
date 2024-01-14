import Meal from "./Meal";
import styles from "./Meals.module.css";
export default function Meals({ dataMeals }) {
  return (
    <div className={styles.meals}>
      {dataMeals.map((meal) => (
        <Meal key={meal.id} datas={meal} />
      ))}
    </div>
  );
}
