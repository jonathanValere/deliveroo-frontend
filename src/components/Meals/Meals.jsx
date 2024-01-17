import Category from "./Category";
import Cart from "../Cart/Cart";
import styles from "./Meals.module.css";
import { useState } from "react";

// Composant qui affiche la section principal : les catégories avec les repas et le panier

export default function Meals({ categories }) {
  const [cart, setCart] = useState([]); // Panier qui contiendra tous nos articles
  const [total, setTotal] = useState(0); // Valeur totale du panier

  return (
    <section>
      <div className="wrapper">
        <div className={styles["part-content"]}>
          <div className={styles.categories}>
            {categories.map((cat) => {
              return (
                cat.meals.length !== 0 && (
                  // Affiche les catégories avec les repas
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
          {/* Affiche le panier */}
          <Cart
            cart={cart}
            setCart={setCart}
            total={total}
            setTotal={setTotal}
          />
        </div>
      </div>
    </section>
  );
}
