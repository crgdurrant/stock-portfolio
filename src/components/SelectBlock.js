import React from "react";
import styled from "styled-components"
import bin from "../images/dustbin.png"
import StockMenu from "./StockMenu";

export default function SelectBlock(props){

  const [selected, setSelected] = React.useState(props.name)
  console.log(selected)

  function changeName(){
    props.onClick(selected)
  }

  return (
    <div>
      <div className="stock-block">
        <div className="top">
          <h3 className="stock-title">{<StockMenu name={setSelected} addBlock={props.addFunction} afterSelection={changeName} />}</h3>
        </div>
        
      </div>
    </div>
  )
}

