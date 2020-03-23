import React from "react";
import ReactDOM from "react-dom";
import { Store, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { devToolsEnhancer } from "redux-devtools-extension/logOnlyInProduction";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import reducers from "./redux/reducers";

const store: Store = createStore(
  reducers,
  compose(applyMiddleware(thunk), devToolsEnhancer({}))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/page/:paged" component={App} />
        <Route component={App} />
        </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
