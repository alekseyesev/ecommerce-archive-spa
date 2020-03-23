import React from "react";
import styles from "../assets/custom.module.scss";

const Footer: React.FC<{}> = () => {
  return (
    <footer
      className={`${styles["d-flex"]} ${styles["justify-content-center"]}`}
    >
      <span className={styles["text-muted"]}>
        &copy; {new Date().getFullYear()} Aleksey Esev
      </span>
    </footer>
  );
};

export default Footer;
