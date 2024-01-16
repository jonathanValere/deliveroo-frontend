import Category from "./Category";
import Cart from "../Cart/Cart";
import styles from "./Meals.module.css";
import { useState } from "react";

export default function Meals({ categories }) {
  const [selectMeals, setSelectMeals] = useState([]);

  // console.log("selectMeals >>>>> ", selectMeals);

  return (
    <section>
      <div className="wrapper">
        <div className={styles["part-content"]}>
          <div className={styles.categories}>
            {categories.map((cat) => {
              // console.log(cat.meals);
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
