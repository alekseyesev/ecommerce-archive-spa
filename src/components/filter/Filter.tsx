import React, { useState, useEffect } from "react";
import { Dispatch, Action } from "redux";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../assets/custom.module.scss";
import { goToPage, filterItems } from "../../redux/actions";
import FilterItem from "./FilterItem";

export const useFilters = () => {
  const dispatch: Dispatch<Action> = useDispatch();

  const [filters, setFilters] = useState<Array<string>>([]);

  useEffect(() => {
    dispatch(filterItems(filters));
    dispatch(goToPage(1));
  }, [dispatch, filters]);

  return {
    filters,
    setFilters,
    toggleFilter: (filter: string): void => {
      let newFilters: Array<string> = filters.concat([]);
      const filterIndex = newFilters.findIndex(
        (_filter: string) => _filter === filter
      );
      if (filterIndex === -1) {
        newFilters.push(filter);
      } else {
        newFilters.splice(filterIndex, 1);
      }
      setFilters(newFilters);
    }
  };
};

const Filter: React.FC<{}> = () => {
  const brands: Array<string> = useSelector(
    (state: { archive: Items }) => state.archive.brands
  );
  const { filters, setFilters, toggleFilter } = useFilters();

  return (
    <form className={styles["form-inline"]}>
      <span
        className={`${styles["my-1"]} ${styles["mt-0"]} ${styles["mb-0"]} ${styles["mr-2"]}`}
      >
        Filter by brand:
      </span>
      {brands.map((brand: string, i: number) => {
        return (
          <FilterItem
            key={i}
            {...{
              brand,
              toggleFilter,
              active: filters.includes(brand)
            }}
          />
        );
      })}
      <button
        type="submit"
        className={`${styles["btn"]} ${styles["btn-primary"]} ${styles["my-1"]}`}
        onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          event.preventDefault();
          setFilters([]);
        }}
      >
        Reset
      </button>
    </form>
  );
};

export default Filter;
