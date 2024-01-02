import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { PortfolioProvider } from "./context";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSkull } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faSkull);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
