import styles from "./Meal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Meal({ ...props }) {
  // console.log(props);
  const handleAddMealToCart = () => {
    const copyMeals = [...props.meals];
    copyMeals.push(props.datas);
    return props.setSelectMeals(copyMeals);
  };

  return (
    <li className={styles.meal} onClick={handleAddMealToCart}>
      <div>
        <h3>{props.datas.title}</h3>
        <p className={styles.description}>{props.datas.description}</p>
        <p className={styles["price-popular"]}>
          {props.datas.price} €
          {props.datas.popular && (
            <span>
              {" "}
              <FontAwesomeIcon icon="star" /> Populaire
            </span>
          )}
        </p>
      </div>
      {props.datas.picture && <img src={props.datas.picture} alt="plat" />}
    </li>
  );
}
