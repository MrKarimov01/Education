import React from 'react'
import { NavLink, Outlet } from "react-router-dom";
import { Glavniy, Student, Universitet } from '../../assets/icons';
import AdminSideBar from "./Components/AdminSideBar/AdminSideBar"


const AdminPanel = () => {
  return (
    <div className='Admin_Home'>
        <AdminSideBar>
            <NavLink to={""} className="SidebarLinks sideHome">
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
            </NavLink>
        </AdminSideBar>
        
        <Outlet />
    </div>
  )
}

export default AdminPanel
