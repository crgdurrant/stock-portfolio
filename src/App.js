import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Landing from "./components/Landing"
import Footer from "./components/Footer"
import Picker from "./components/Picker"
import React from "react"
import StockMenu from './components/StockMenu';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Landing /> */}
      <Picker />
      <Footer />
    </div>
  );
}

export default App;
