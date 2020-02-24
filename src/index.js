import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Pages from "./pages";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Pages />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
