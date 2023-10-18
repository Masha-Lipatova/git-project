import styles from "./style.module.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Link className={styles.link}  to="/">Главная страница</Link>
        <Link className={styles.link}  to="/chat">Чат</Link>
        <Link className={styles.link} to="/test">Материалы</Link>
      </nav>
    </div>
  );
};

export default Header;