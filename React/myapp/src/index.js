import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Hooks from "./Hooks/Hooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App />
      <Hooks/>
  </React.StrictMode>
);
