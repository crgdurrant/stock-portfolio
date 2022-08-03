import React from "react"
import { Link } from "react-router-dom"

export default function Landing(){
  return (
    <div className="landing">
      <h3 className="landing-text">Find the best performing portfolio for you</h3>
      <button className="start-btn"><Link to={"/picker"}>Get started</Link></button>
    </div>
  )
}