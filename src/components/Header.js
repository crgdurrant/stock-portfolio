import React from "react"
import { Link } from "react-router-dom"

export default function Header(){
  return (
    <div className="header">
      <div className="header-container">
        <div className="title-container">
          <div className="title">Portfolio Bud</div>
          <img className="logo-img" src={require("../images/statue.png")} alt="" />
        </div>
        
        <nav className="menu">
          <ul>
            <li className="nav-link"><Link to={"/"}>HOME</ Link></li>
            <li className="nav-link"><Link to={"/picker"}>PICKER</ Link></li>
            <li className="nav-link"><Link to={"/blog"}>BLOG</ Link></li>
            <li className="nav-link"><Link to={"/about"}>ABOUT</ Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}