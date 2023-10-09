import React from "react"
import "./Login.css"

const Login =()=> {
  return (
    <React.Fragment>
      <div className="login_mini">
      <div className="login_page">
        <h1 className="edu">EDUCATION</h1>
        <p className="text">войти</p> 
        <p className="login_text">Логин</p>
        <input type="text" className="login_inp" minLength={6} />
        <p className="login_text">Парол</p>
        <input className="password_inp" type="password" minLength={6}/>
        <label htmlFor="">
          <input type="checkbox" />
          запомнит меня
        </label>
        <button className="btn">войти</button>
      </div>
      </div>
    </React.Fragment>
  )
}
export default Login