import React from "react";
import styles from "../assets/custom.module.scss";

const Header: React.FC<{}> = () => {
  return (
    <header
      className={`${styles["navbar"]} ${styles["navbar-dark"]} ${styles["bg-dark"]}`}
    >
      <div className={styles["container-xl"]}>
        <a className={styles["navbar-brand"]} href="/">
          <span className={styles["text-uppercase"]}>Ecommerce archive</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
