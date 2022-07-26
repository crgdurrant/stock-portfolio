import React from "react"
import bin from "../images/dustbin.png"

export default function Block(props){

  const [blockName, setBlockName] = React.useState(props.name)

  return (
    <div>
      <div className="stock-block">
        <div className="top">
          <h3 className="stock-title">{blockName}</h3>
          <img src={bin} alt="" onClick={(event) => props.onClick(event, props.name)} />
        </div>
        
      </div>
    </div>
  )
}