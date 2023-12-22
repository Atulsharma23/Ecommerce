import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Addproduct from "./Addproduct";
import Protected from "./ProtectedRoute";
import Productlist from "./productlist";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Navigate
                to="/productlist
          "
                replace
              />
            }
          />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          {/* <Route path="/productlist" element={<Productlist />} /> */}

          <Route
            path="/productlist"
            element={<Protected cmp={Productlist} />}
          />

          <Route path="/addproduct" element={<Protected cmp={Addproduct} />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
