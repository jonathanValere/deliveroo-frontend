import Category from "./Category";
import Cart from "../Cart/Cart";
import styles from "./Meals.module.css";
import { useState } from "react";

export default function Meals({ categories }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(2.5);

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
                    cart={cart}
                    setCart={setCart}
                    total={total}
                    setTotal={setTotal}
                  />
                )
              );
            })}
          </div>
          <Cart cart={cart} total={total} setTotal={setTotal} />
        </div>
      </div>
    </section>
  );
}
