import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeStudent from "../students/HomeStudent";

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeStudent />} />
      </Routes>
    </div>
  );
}

export default Routers;
