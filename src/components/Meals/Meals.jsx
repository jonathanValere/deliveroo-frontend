import Category from "./Category";
import Cart from "../Cart/Cart";
import styles from "./Meals.module.css";
import { useState } from "react";

export default function Meals({ categories }) {
  const [mealDatas, setMealDatas] = useState({});

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
                    mealDatas={mealDatas}
                    setMealDatas={setMealDatas}
                  />
                )
              );
            })}
          </div>
          <Cart />
        </div>
      </div>
    </section>
  );
}
