import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./AdminSideBar.scss"
import { Exit } from "../../../../assets/icons";

const AdminSideBar = (props) => {
  function LogOut() {
    localStorage.clear()
    setTimeout(() => {
      
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
        
          <NavLink to={"exit"} className="SidebarLinks sideExit">
            <Exit/>
            <span>Выйти</span>
          </NavLink>
        
        <i className="Sidebarpos">
            <div className="sidebarpos_inner"></div>
        </i>
      </ul>
    </div>
  );
};

export default AdminSideBar;
