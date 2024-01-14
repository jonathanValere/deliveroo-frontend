import styles from "./Meal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Meal({ datas }) {
  return (
    <article className={styles.meal}>
      <div>
        <h3>{datas.title}</h3>
        <p className={styles.description}>{datas.description}</p>
        <p className={styles["price-popular"]}>
          {datas.price} €
          {datas.popular && (
            <span>
              {" "}
              <FontAwesomeIcon icon="star" /> Populaire
            </span>
          )}
        </p>
      </div>
      {datas.picture && <img src={datas.picture} alt="plat" />}
    </article>
  );
}
