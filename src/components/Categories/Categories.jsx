import Category from "./Category";
import styles from "./Categories.module.css";
import Cart from "../Cart/Cart";

export default function Categories({ categories }) {
  return (
    <section>
      <div className="wrapper">
        <div className={styles["part-content"]}>
          <div className={styles.categories}>
            {categories.map((cat) => {
              // console.log(cat.meals);
              return (
                cat.meals.length !== 0 && (
                  <Category key={cat.name} dataCategory={cat} />
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
