import Category from "./Category";
import Cart from "../Cart/Cart";
import styles from "./Meals.module.css";
import { useState } from "react";

// Composant qui affiche la section principal : les catégories avec les repas et le panier

export default function Meals({ categories }) {
  const [cart, setCart] = useState([]); // Panier qui contiendra tous nos articles

  // Gestion de la quantité -----
  const handleQuantity = (mealId, operator) => {
    const copyCart = [...cart];
    for (const meal of copyCart) {
      if (mealId === meal.id) {
        if (operator === "+") {
          meal.quantity += 1;
        } else {
          meal.quantity -= 1;
        }
      }
    }
    // Gestion sur la quantité = 0 ---
    const copyCartFilter = copyCart.filter((meal) => meal.quantity !== 0);
    return setCart(copyCartFilter);
  };

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
                  />
                )
              );
            })}
          </div>
          {/* Affiche le panier */}
          <Cart cart={cart} setCart={setCart} handleQuantity={handleQuantity} />
        </div>
      </div>
    </section>
  );
}
