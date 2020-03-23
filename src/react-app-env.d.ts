/// <reference types="react-scripts" />

type model = "item";

interface Config {
  itemsPerPage: number;
}

interface Item {
  artnumber: string;
  name: string;
  brand: string;
  weight: number;
  quantity: number;
  price: string;
  stock: number;
}

interface Items {
  paged: number;
  brands: Array<any>;
  items: Array<Item>;
  schema?: Item;
  displayedItems?: Array<Item>;
  filter?: Array<Item>;
}

interface Types {
  LOADING: string;
  SET_PAGE: string;
  LOAD_ITEMS: string;
  CREATE_FILTER_LIST: string;
  GO_TO_PAGE: string;
  FILTER_ITEMS: string;
}

interface Action {
  type: keyof Types;
}

interface ActionLoadingStatus extends Action {
  loading: boolean;
}

interface ActionSetPage extends Action {
  paged: number;
}

interface ActionLoadItems extends Action {
  result: response;
}

interface ActionGoToPage extends ActionSetPage {}

interface ActionFilterItems extends Action {
  brands: Array<string>;
}
