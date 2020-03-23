import React from "react";
import { useSelector } from "react-redux";
import styles from "../assets/custom.module.scss";
import config from "../App.config";

const ResultCount: React.FC<{}> = () => {
  const [paged, itemCount] = useSelector((state: { archive: Items }) => {
    const items =
      state.archive.filter && state.archive.filter.length
        ? state.archive.filter
        : state.archive.items;
    return [state.archive.paged, items.length];
  });
  const firstItemIndex: number = config.itemsPerPage * (paged - 1) + 1;
  const lastItemIndex: number =
    firstItemIndex +
    (itemCount - firstItemIndex > config.itemsPerPage
      ? (config.itemsPerPage - 1)
      : itemCount - firstItemIndex);
  return (
    <div className={`${styles["mt-1"]} ${styles["mb-1"]}`}>
      Show{" "}
      <span className={styles["font-weight-bold"]}>
        {firstItemIndex}
        {lastItemIndex > firstItemIndex && `-${lastItemIndex}`}
      </span>{" "}
      of <span className={styles["font-weight-bold"]}>{itemCount}</span>
    </div>
  );
};

export default ResultCount;
