import React from "react";
import styles from "../../assets/custom.module.scss";

const FilterItem: React.FC<{
  brand: string;
  active: boolean;
  toggleFilter: (filter: string) => void;
}> = ({ brand, active, toggleFilter }) => {
  return (
    <div
      className={`${styles["custom-control"]} ${styles["custom-checkbox"]} ${styles["my-1"]} ${styles["mr-sm-2"]}`}
    >
      <input
        name="filter[]"
        type="checkbox"
        className={styles["custom-control-input"]}
        id={brand.toLowerCase()}
        onChange={() => toggleFilter(brand)}
        checked={active}
      />
      <label className={styles["custom-control-label"]} htmlFor={brand.toLowerCase()}>
        {brand}
      </label>
    </div>
  );
};

export default React.memo(FilterItem);
