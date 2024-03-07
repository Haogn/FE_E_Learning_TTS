import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeStudent from "../students/HomeStudent";
import LoginPage from "../login_register/LoginPage";

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeStudent />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default Routers;
