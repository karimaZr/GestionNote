import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { DarkModeContextProvider } from "./context/darkModeContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
