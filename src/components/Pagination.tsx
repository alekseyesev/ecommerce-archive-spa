import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "../assets/custom.module.scss";
import config from "../App.config";

const Pagination: React.FC<{}> = () => {
  const [paged, pageCount] = useSelector((state: { archive: Items }) => {
    const items: Array<Item> =
      state.archive.filter && state.archive.filter.length
        ? state.archive.filter
        : state.archive.items;
    return [
      state.archive.paged,
      Math.ceil(items.length / config.itemsPerPage)
    ];
  });
  return (
    <nav
      className={`${styles["d-flex"]} ${styles["justify-content-center"]}`}
      aria-label="pagination"
    >
      <ul className={styles["pagination"]}>
        {Array(pageCount)
          .fill(null)
          .map((dummy, i) => {
            const pageId: number = i + 1;
            const paginationItemClassName: string =
              pageId === paged
                ? `${styles["page-item"]} ${styles["active"]}`
                : styles["page-item"];
            return (
              <li key={i} className={paginationItemClassName} aria-current="page">
                <NavLink className={styles["page-link"]} to={`/page/${pageId}`}>
                  {pageId}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Pagination;
