import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import LineChart from './LineChart';
import StockCard from './StockCard';

function createData(name, myPortfolio, benchmark) {
  return { name, myPortfolio, benchmark};
}

const rows = [
  createData('1 year', 10, 4.65),
  createData('3 years', 8.11, 8.56),
  createData('5 years', 9.21, 9.33)
];


export default function Results(props){

  console.log(props.data)
  const equityData = props.data
  const equityCardComponents = equityData.map((equity, index) => {
    return (
    <StockCard 
      name={equity.name}
      ticker={equity.stock_code}
      broker={equity.broker_rating} 
      trend={equity.trend} 
      marketCap={equity.market_cap}
      returns={equity.return}
      />
    )
  })



  return (
    <div>
      <h1 className="picker-header">Results:</h1>
      <TableContainer sx={{ maxWidth: 708 }} className="main-table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right" className='table-header'>My Portfolio* (%)</TableCell>
              <TableCell align="right" className='table-header'>Benchmark** (%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.myPortfolio}</TableCell>
                <TableCell align="right">{row.benchmark}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <p className='benchmark-disclaimer'>* Based on equal weighting of each share in your portfolio. See optimal weighting below.</p>
      <p className='benchmark-disclaimer'>** The benchmark used is the Satrix SA40</p>
      <LineChart />
      <div className='component-container'>
        {equityCardComponents}
      </div>
      <div className='weighting-container'>
        Recommended Weightings
        
      </div>
    </div>
    
  )
}













/*  <div className="results-container">
      <h1 className="picker-header">Results:</h1>
      <div className="results-bubble">
        <table className="main-table">
          <tr>
            <th></th>
            <th>My Portfolio</th>
            <th>Benchmark</th>
          </tr>
          <tr>
            <td>1 year</td>
            <td>3 years</td>
            <td>5 years</td>
          </tr>
          <tr> 
            <td>3 years</td>
            <td>50%</td>
            <td>40%</td>
          </tr>
          <tr>
            <td>5 years</td>
            <td>10%</td>
            <td>3%</td>
          </tr>
        </table>
      </div>
    </div> */