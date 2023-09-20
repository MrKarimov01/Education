import React from 'react'
import AdminSideBar from '../AdminPanel/Components/AdminSideBar/AdminSideBar'
import { NavLink, Outlet } from 'react-router-dom'
import { Glavniy, Student, Universitet } from '../../assets/icons'
import "./Student.scss"



const StudentHome = () => {
  return (
    <div className='StudentHome'>
        <AdminSideBar>
            <NavLink to={""} className="SidebarLinks sideHome">
                <Glavniy/>
                <span>Главное</span>
            </NavLink>
            <NavLink to={"institute"} className="SidebarLinks sideins">
                <Universitet/>
                <span className='kattatext'>Университеты</span>
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

export default StudentHome
