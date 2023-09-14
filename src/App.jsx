import React from "react";

import HomePage__Home from "./pages/HomePage/pages/HomePage__Home/HomePage__Home";
import { Outlet, Route, Routes } from "react-router-dom";
import Home__Search from "./pages/HomePage/pages/Home__Search/Home__Search";
import Login from "./pages/LoginPage/login";
import Home from "./pages/AdminPanel/pages/Home/Home";

const App = () => {
  return (
    <React.Fragment>

      <Routes>
        <Route path="/" element={<Outlet/>}>
          <Route path="" element={<HomePage__Home/>}/>
          <Route path="search" element={<Home__Search/>}/>
          <Route path="search/id" element={<h1>searchid</h1>}/>
        </Route>
        <Route path="/login" element={<Outlet/>}>
          <Route path="" element={<Login/>}/>
          <Route path="register" element={<h1>register</h1>}/>
        </Route>
        <Route path="admin" element={<Outlet/>}>
          <Route path="" element={<Home/>}/>
         
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
