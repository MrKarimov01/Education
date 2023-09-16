import React from "react";
import "./Home.scss";
import AdminSideBar from "../../Components/AdminSideBar/AdminSideBar";

const Home = () => {
  return (
    <div className="Admin_Home">
      <AdminSideBar />
      <div className="glavni">
        <div className="glavni_user">
          <b>Главное</b>
        </div>
      </div>
    </div>
  );
};

export default Home;
