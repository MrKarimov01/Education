import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'


const Footer=() =>{
  return (
    <div className='UmumiyFotter'>
      <div className="wrapper">
        <Link to={"/"}>Lochinbek</Link>
        <Link to={"/student"}>Abrorbek</Link>
        <Link to={"student/institute/id"}>Sarvinoz</Link>
        <Link to={"/student/student"}>Sarvinoz</Link>
        <Link to={"student/doc"}>Sarvinozni dugonasi</Link>
        <Link to={"/login"}>Odilbek</Link>
        
      </div>
    </div>
  )
}

export default Footer
