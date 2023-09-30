import React, { useState } from "react";
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
      <div className="adminsidebarwrapper">
      <Link to={"/"} className="logo">
        <Side_Logo/>
        <span>Education</span>
      </Link>
      <ul className="SidebarBox">
        
     
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
    </div>
  );
};

export default AdminSideBar;
