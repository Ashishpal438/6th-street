import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { BrandContextProvider } from "./contexts/BrandContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BrandContextProvider>
        <App />
      </BrandContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
