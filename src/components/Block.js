import React from "react"
import bin from "../images/dustbin.png"

export default function Block(props){

  return (
    <div>
      <div className="stock-block">
        <div className="top">
          <h3 className="stock-title">{props.name}</h3>
          <img src={bin} alt="" onClick={(event) => props.onClick(event, props.id)} />
        </div>
        
      </div>
    </div>
  )
}