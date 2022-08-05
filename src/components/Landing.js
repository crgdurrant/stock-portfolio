import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"

export default function Landing(){
  return (
    <div className="landing">
      <h3 className="landing-text">Find the best performing portfolio for you</h3>
      <Button variant="contained"><Link to={"/picker"}>Get started</Link></Button>
    </div>
  )
}