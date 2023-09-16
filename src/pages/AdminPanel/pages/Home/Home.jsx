import React from "react";
import "./Home.scss";
import AdminSideBar from "../../Components/AdminSideBar/AdminSideBar";

const Home = () => {
  return (
    <div className="Admin_Home">
      <AdminSideBar />
      <div className="glavni">
        <h1>salom</h1>
      </div>
    </div>
  );
};

export default Home;
