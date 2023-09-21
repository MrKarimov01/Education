import React from "react";

import HomePage__Home from "./pages/HomePage/pages/HomePage__Home/HomePage__Home";
import { Outlet, Route, Routes } from "react-router-dom";
import Home__Search from "./pages/HomePage/pages/Home__Search/Home__Search";
import Login from "./pages/LoginPage/login";
import Home from "./pages/AdminPanel/pages/Home/Home";

import AdminPanel from "./pages/AdminPanel/AdminPanel";
import StudentHome from "./pages/Student/StudentHome";
import Univer__single from "./pages/Student/pages/Univer__single/Univer__single";
import Menedjer__page from "./pages/Student/pages/Menedjer__page/Menedjer__page";
import Edogover from "./pages/Student/pages/Edogover/Edogover";


const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="" element={<HomePage__Home />} />
          <Route path="search" element={<Home__Search />} />
          <Route path="search/id" element={<h1>searchid</h1>} />
        </Route>
        <Route path="/login" element={<Outlet />}>
          <Route path="" element={<Login />} />
          <Route path="register" element={<h1>register</h1>} />
        </Route>
        <Route path="admin" element={<AdminPanel />}>
          <Route path="" element={<Home />} />
          <Route path="institute" element={<h1>institute</h1>} />
        </Route>
        <Route path="student" element={<StudentHome />}>
          <Route path="" element={<h1>salom</h1>} />
          <Route path="institute" element={<h1>institute</h1>} />
          <Route path="institute/id" element={<Univer__single/>} />
          <Route path="student" element={<Menedjer__page/>} />
          <Route path="doc" element={<Edogover/>} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
