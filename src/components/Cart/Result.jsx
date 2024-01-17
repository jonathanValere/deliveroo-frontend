import styles from "./Result.module.css";

export default function Result({ ...props }) {
  // console.log(props);
  return (
    <div className={styles.result}>
      <div className={styles["result-infos"]}>{props.name}</div>
      <span>{props.price.toFixed(2).replace(".", ",")} €</span>
    </div>
  );
}
