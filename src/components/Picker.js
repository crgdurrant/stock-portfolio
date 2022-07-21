import React from "react"
import Block from "./Block"
import AddBlock from "./AddBlock"
import Results from "./Results"
import {nanoid} from "nanoid"
import data from "../stockList.json"
import StockMenu from "./StockMenu"

export default function Picker(){

  const [components, setComponents] = React.useState([])

  const [resultsPage, setResultsPage] = React.useState(true)


  function addBlock(){
    setComponents([...components,
                  <Block 
                  id={nanoid()} 
                  onClick={deleteBlock} 
                  name={getData()}/>])              
  }

  function deleteBlock(event, blockId){
    setComponents(oldComponents => oldComponents.filter(comp => comp.props.id !== blockId))
  }

  function getRandomNumber(){
    return Math.floor(Math.random()*10)
  }

  function getData(){
    const jsonData= require('../stockList.json');
    return jsonData.stocks[getRandomNumber()].name;
  }

  function stockList(){
    const stockArr =[]
    for(let i=0; i < components.length; i++){
      stockArr.push(components[i].props.name)
    }
    console.log(stockArr)
    getResults()
  }

  function getResults(){
    setResultsPage(prevResults => !prevResults)
  }

  function getPrice(years){
    const priceArr =[]
  }

  return(
    
    <div className="picker-container">
      {resultsPage ? 
      <div>
        <h1 className="picker-header">Add portfolio components:</h1>
        <div className="component-container" id="container">
          {components.map((item, i) => (item))}
          <AddBlock  onClick={addBlock}/>
        </div>
        <button className="results-btn" onClick={stockList}>Get results</button>
      </div> : 
      <div>
        <Results />
        <button className="results-btn" onClick={getResults}>Go back</button>
      </div>
      }
      
    </div>
    

  )
}