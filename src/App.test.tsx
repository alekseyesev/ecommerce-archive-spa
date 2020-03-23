import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Store, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import App from "./App";

const store: Store = createStore(
  reducers,
  applyMiddleware(thunk)
);

let container: Element;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it("has rendered a loader on init", () => {
  const paged: number = 1;

  act(() => {
    render(<Provider store={store}><App {...{ match: { params: { paged: paged } } }} /></Provider>, container);
  });
  expect((container.querySelectorAll("#loader") as NodeList).length).toBe(1);
});
