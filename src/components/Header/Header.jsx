import styles from "./Header.module.css";
import logo from "./../../assets/img/logo-teal.svg";

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
    </header>
  );
}
