import Home from "./pages/home/Home";
import Login from "./pages/login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { useAuth } from "./context/AuthContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
              
                  <Home />
              
              }
            />
            <Route path="users">
              <Route
                index
                element={
                
                    <List />
                
                }
              />
              <Route
                path=":userId"
                element={
                 
                    <Single />
                 
                }
              />
              <Route
                path="new"
                element={
                 
                    <New inputs={userInputs} title="Add New User" />
                 
                }
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                
                    <List />
                 
                }
              />
              <Route
                path=":productId"
                element={
                
                    <Single />
                 
                }
              />
              <Route
                path="new"
                element={
                
                    <New inputs={productInputs} title="Add New Product" />
                 
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
