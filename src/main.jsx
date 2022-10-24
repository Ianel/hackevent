import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./layouts/main.layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MainLayout>
        <App />
      </MainLayout>
    </Router>
  </React.StrictMode>
);
