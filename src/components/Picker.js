import React from "react"
import Block from "./Block"
import AddBlock from "./AddBlock"
import Results from "./Results"
import {nanoid} from "nanoid"
import SelectBlock from "./SelectBlock"

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

  console.log(singleCom)

  React.useEffect(() => {
    console.log(components)
  },[components])

  function deleteBlock(event, blockId){
    setComponents(oldComponents => oldComponents.filter(comp => comp.props.name !== blockId))
  }

  function getRandomNumber(){
    return Math.floor(Math.random()*10)
  }

  // function getData(){
  //   const jsonData= require('../stockList.json');
  //   return jsonData.stocks[getRandomNumber()].name;
  // }

  function getResults(){
    setResultsPage(prevResults => !prevResults)
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
        <Results />
        <button className="results-btn" onClick={(getResults)}>Go back</button>
      </div>
      }
      
    </div>
    

  )
}