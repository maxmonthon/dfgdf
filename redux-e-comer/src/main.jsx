import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Importing the Bootstrap 5 CSS
import "bootstrap/dist/css/bootstrap.min.css";
//redux
import { store } from "./components/store/store";
import { Provider } from "react-redux";
// Route
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
