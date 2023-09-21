import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Exit, Side_Logo } from "../../../../assets/icons";
import "./AdminSideBar.scss"

const AdminSideBar = (props) => {
  const navigati = useNavigate()
  function LogOut() {
    localStorage.clear()
    setTimeout(() => {
      navigati("/")
    }, 500);
  }

  
  return (
    <div className="AdminSideBar">
      <Link to={"/"} className="logo">
        <Side_Logo/>
        <span>Education</span>
      </Link>
      <ul className="SidebarBox">
        
          {/* <NavLink to={"home"} className="SidebarLinks sideHome">
            <Glavniy/>
            <span>Главное</span>
          </NavLink>
          <NavLink to={"institute"} className="SidebarLinks sideins">
            <Universitet/>
            <span>Университеты</span>
          </NavLink>
          <NavLink to={"student"} className="SidebarLinks sideStu">
            <Student/>
            <span>Студенты</span>
          </NavLink> */}
          {props.children}
        
          <button onClick={LogOut} className="SidebarLinks sideExit">
            <Exit/>
            <span>Выйти</span>
          </button>
        
        <i className="Sidebarpos">
            <div className="sidebarpos_inner"></div>
        </i>
      </ul>
    </div>
  );
};

export default AdminSideBar;
