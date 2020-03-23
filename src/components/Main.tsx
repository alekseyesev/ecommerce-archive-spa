import React from "react";
import styles from "../assets/custom.module.scss";
import Filter from "./filter/Filter";
import Items from "./items/Items";
import ResultCount from "./ResultCount";

const Main: React.FC<{}> = () => {
  return (
    <main className={styles["container-xl"]}>
      <p className={`${styles["lead"]} ${styles["mt-3"]}`}>
        This React App loads items asynchronously and provides customers with
        filter and pagination through items.
      </p>
      <div
        className={`${styles["d-flex"]} ${styles["justify-content-between"]} ${styles["align-items-center"]}`}
      >
        <ResultCount />
        <Filter />
      </div>
      <Items />
    </main>
  );
};

export default Main;
