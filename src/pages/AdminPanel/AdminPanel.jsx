import React, { useState } from 'react'
import { NavLink, Outlet } from "react-router-dom";
import { Glavniy, Student, Universitet } from '../../assets/icons';
import AdminSideBar from "./Components/AdminSideBar/AdminSideBar"



const AdminPanel = () => {
    const [sidenavclick, setSidenavclick ]= useState("home")  
  return (
    <div className='Admin_Home'>
        <AdminSideBar >
            
            <NavLink to={""} className={sidenavclick === "home" ? "SidebarLinks sideHome Homeactive":"SidebarLinks sideHome"} onClick={()=>setSidenavclick("home")}>
                <Glavniy/>
                <span>Главное</span>
            </NavLink>
            <NavLink to={"institute"} className={sidenavclick === "isitut" ? "SidebarLinks sideins sideinsactive":"SidebarLinks sideins"} onClick={()=>{setSidenavclick("isitut")}}>
                <Universitet/>
                <span className='kattatext'>Университеты</span>
            </NavLink>
            <NavLink to={"student"} className={sidenavclick === "student" ? "SidebarLinks sideStu sideStuactive":"SidebarLinks sideStu"} onClick={()=>{setSidenavclick("student")}}>
                <Student/>
                <span>Студенты</span>
            </NavLink>
        </AdminSideBar>
        
        <Outlet />
    </div>
  )
}

export default AdminPanel
