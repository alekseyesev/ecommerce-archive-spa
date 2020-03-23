import { combineReducers } from "redux";
import config from "../App.config";
import {
  LOADING,
  SET_PAGE,
  LOAD_ITEMS,
  CREATE_FILTER_LIST,
  GO_TO_PAGE,
  FILTER_ITEMS
} from "./types";

const status = (
  state: { loading: boolean } = { loading: true },
  action: Action & { loading: boolean }
) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

const archive = (
  state: Items = { paged: 1, brands: [], items: [] },
  action: ActionLoadItems & ActionFilterItems & ActionSetPage & ActionGoToPage
): Items => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        paged:
          typeof action.paged === "number"
            ? action.paged
            : Number.parseInt(action.paged as string, 10)
      };
    case LOAD_ITEMS:
      return { ...state, ...action.result };
    case CREATE_FILTER_LIST:
      return {
        ...state,
        ...{
          brands: state.items.reduce((brands: Array<any>, item: Item) => {
            return brands.includes(item.brand)
              ? brands
              : (brands.push(item.brand), brands);
          }, [])
        }
      };
    case GO_TO_PAGE:
      const items =
        state.filter && state.filter.length ? state.filter : state.items;
      const fromIndex: number = config.itemsPerPage * (action.paged - 1);
      const toIndex: number | undefined =
        (items.length - fromIndex >= 4 && fromIndex + config.itemsPerPage) ||
        undefined;
      return {
        ...state,
        ...{
          displayedItems: items.slice(fromIndex, toIndex)
        }
      };
    case FILTER_ITEMS:
      return {
        ...state,
        ...{
          filter: state.items.filter((item: Item) =>
            action.brands.includes(item.brand)
          )
        }
      };
    default:
      return state;
  }
};

const reducers = {
  status,
  archive
};

const archiveReducers = combineReducers(reducers);

export default archiveReducers;
