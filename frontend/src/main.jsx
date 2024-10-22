import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./Context/StoreContext.jsx";
createRoot(document.getElementById("root")).render(
  /*Set Up The React Router - to get react router support in the app component*/
  <BrowserRouter>
    {/*Can reach it from everywhere in teh project */}
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
