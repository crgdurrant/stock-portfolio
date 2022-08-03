import { useSlotProps } from "@mui/base"
import React from "react"

export default function StockCard(props){

  let brokerColor = ""
  let brokerEmoji =""

  if (props.broker === "SELL"){
    brokerColor = "#ff6666"
    brokerEmoji = "🏃"
  } else if (props.broker === "BUY"){
    brokerColor = "green"
    brokerEmoji="👍"
  } else if (props.broker === "HOLD"){
    brokerColor = "orange"
    brokerEmoji="✋"}  

  return (
    <div className="single-equity">
      <div className="card-title card-section">
        <h2 className="stock-card-title">{props.name}</h2>
        <h5 className="ticker-symbol">${props.ticker}</h5>
      </div>

      <div className="broker-section card-section">
        <h5 className="card-section-title">Broker rating:</h5>
        <p className="card-section-content" style={{color: brokerColor}}>{brokerEmoji} {props.broker}</p>
      </div>

      <div className="trend-section card-section">
        <h5 className="card-section-title">Trend:</h5>
        <p className="card-section-content">{props.trend === "UP" ? "📈" : "📉"}</p>
      </div>

      <div className="market-cap-section card-section">
        <h5 className="card-section-title">Market cap:</h5>
        <p className="card-section-content">💰 {props.marketCap} ZAR</p>
      </div>

      <div className="returns-section card-section">
        <h5 className="card-section-title">📅 Annualised Returns (5yrs):</h5>
        <p className="card-section-content">{props.returns}%</p>
      </div>

      
    </div>
  )
}