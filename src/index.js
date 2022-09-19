import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "flag-icon-css/css/flag-icons.min.css";

import "./i18next";
import App from "./App";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const loadingMarkup = (
  <div className="py-4 text-center">
    <h1>Loading...</h1>
  </div>
);

root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </Suspense>
);
