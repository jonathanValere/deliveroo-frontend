import styles from "./Restaurant.module.css";

export default function Restaurant({ name, description, picture }) {
  return (
    <section style={{ backgroundColor: "#fff" }}>
      <div className="wrapper">
        <div className={styles.restaurant}>
          <div className={styles["title-description"]}>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
          <img src={picture} alt={`restaurant ${name}`} />
        </div>
      </div>
    </section>
  );
}
