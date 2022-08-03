import React from "react"
import Block from "./Block"
import AddBlock from "./AddBlock"
import Results from "./Results"
import {nanoid} from "nanoid"
import SelectBlock from "./SelectBlock"
import stockList from "../stockList.json"

export default function Picker(){

  const [components, setComponents] = React.useState([])

  const [resultsPage, setResultsPage] = React.useState(true)

  const [singleCom, setSingleCom] = React.useState("place")


  function addBlock(){
    setComponents([...components,
                  <SelectBlock 
                    id={"select"} 
                    onClick={setSingleCom} 
                    name={setSingleCom}
                    addFunction={addStockBlock}/>])            
  }

  function addStockBlock(name){
    setComponents([...components,
                  <Block 
                    id={nanoid()}
                    name={name}
                    onClick={deleteBlock}/>
    ])
  }

  function deleteBlock(event, blockId){
    setComponents(oldComponents => oldComponents.filter(comp => comp.props.id !== blockId))
  }

  function getResults(){
    setResultsPage(prevResults => !prevResults)
  }

  // **** API stuff

  function getData(){
    let chosenStocksArray = []
    for(let i=0; i < compList.length; i++){
      for(let j=0; j < stockList.stocks.length; j++){
        if(compList[i] === stockList.stocks[j].name){
          chosenStocksArray.push(stockList.stocks[j])
        }
      }
    }
    return chosenStocksArray
    }


  //* */ Get the list of stock components that have been selected.

  const compList = components.map(comp => {
    return comp.props.name
  })

  console.log(compList)

  return(
    
    <div className="picker-container">
      {resultsPage ? 
      <div>
        <h1 className="picker-header">Add portfolio components:</h1>
        <div className="component-container" id="container">
          {components.map((item, i) => (item))}
          <AddBlock  onClick={addBlock}/>
        </div>
        <button className="results-btn" onClick={getResults}>Get results</button>
      </div> : 
      <div>
        <Results data={getData()} />
        <button className="results-btn" onClick={(getResults)}>Go back</button>
      </div>
      }
      
    </div>
    

  )
}