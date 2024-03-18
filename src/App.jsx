import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Blogs from "./Pages/Blogs/Blogs";
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
