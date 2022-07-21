import React from "react"

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
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}