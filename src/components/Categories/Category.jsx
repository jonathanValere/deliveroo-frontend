import Meals from "../Meals/Meals";
import styles from "./Category.module.css";

export default function Category({ dataCategory }) {
  return (
    <div className={styles.category}>
      <h2>{dataCategory.name}</h2>
      <Meals dataMeals={dataCategory.meals} />
    </div>
  );
}
