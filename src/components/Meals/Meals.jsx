import Category from "./Category";
import Cart from "../Cart/Cart";
import styles from "./Meals.module.css";
import { useState } from "react";

export default function Meals({ categories }) {
  const [selectMeals, setSelectMeals] = useState([]);

  return (
    <section>
      <div className="wrapper">
        <div className={styles["part-content"]}>
          <div className={styles.categories}>
            {categories.map((cat) => {
              return (
                cat.meals.length !== 0 && (
                  <Category
                    key={cat.name}
                    dataCategory={cat}
                    setSelectMeals={setSelectMeals}
                    meals={selectMeals}
                  />
                )
              );
            })}
          </div>
          <Cart meals={selectMeals} />
        </div>
      </div>
    </section>
  );
}
