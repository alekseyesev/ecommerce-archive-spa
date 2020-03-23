import { Dispatch } from "redux";
import {
  LOADING,
  SET_PAGE,
  LOAD_ITEMS,
  CREATE_FILTER_LIST,
  GO_TO_PAGE,
  FILTER_ITEMS
} from "./types";
import DB from "../models/DB";

export const setLoadingStatus = (loading: boolean): ActionLoadingStatus => {
  return {
    type: LOADING,
    loading
  };
};

export const setPage = (paged: number): ActionSetPage => {
  return {
    type: SET_PAGE,
    paged
  };
};

export const initArchive = (
  paged: number
): any => {
  return (dispatch: Dispatch) => {
    DB.select("item").then((response: Response) => {
      response.json().then(
        (result: { schema: Item; items: Array<Item> }) => {
          setTimeout(() => {
            dispatch(loadItems(result));
            dispatch(createFilterList());
            dispatch(goToPage(paged));
            dispatch(setLoadingStatus(false));
          }, 1000);
        },
        err => {
          throw new Error(err);
        }
      );
    });
  };
};

export const loadItems = (result: {
  schema: Item;
  items: Array<Item>;
}): ActionLoadItems => {
  return {
    type: LOAD_ITEMS,
    result
  };
};

export const createFilterList = (): Action => {
  return {
    type: CREATE_FILTER_LIST
  };
};

export const goToPage = (paged: number): ActionGoToPage => {
  return {
    type: GO_TO_PAGE,
    paged
  };
};

export const filterItems = (brands: Array<string> = []): ActionFilterItems => {
  return {
    type: FILTER_ITEMS,
    brands
  };
};
