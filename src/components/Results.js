import React from "react"

export default function Results(props){
  return (
    <div className="results-container">
      <h1 className="picker-header">Results:</h1>
      <div className="results-bubble">
        <table>
          <tr>
            <th></th>
            <th>1 year</th>
            <th>3 years</th>
            <th>5 years</th>
          </tr>
          <tr>
            <td>My Portfolio</td>
            <td>{props.one}</td>
            <td>{props.three}</td>
            <td>{props.five}</td>
          </tr>
          <tr> 
            <td>SA Top 40 (benchmark)</td>
            <td>50%</td>
            <td>40%</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>Shoprite</td>
            <td>10%</td>
            <td>3%</td>
            <td>23%</td>
          </tr>
        </table>
      </div>
    </div>
  )
}