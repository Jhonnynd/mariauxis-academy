// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ResponsiveAppBar from "./Components/ResponsiveAppBar.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ResponsiveAppBar />
    <App />
  </BrowserRouter>
);