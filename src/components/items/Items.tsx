import React from "react";
import styles from "../../assets/custom.module.scss";
import ItemProps from "./ItemProps";
import ItemList from "./ItemList";

const Items: React.FC<{}> = () => {
  return (
    <div className={styles["table-responsive-sm"]}>
      <table
        className={`${styles["table"]} ${styles["table-hover"]} ${styles["table-dark"]}`}
      >
        <thead>
          <ItemProps />
        </thead>
        <ItemList />
      </table>
    </div>
  );
};

export default Items;
