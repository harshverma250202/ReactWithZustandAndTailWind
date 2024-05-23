import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import Home from "./pages/Home";




const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );

};
export default Layout;
