import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Landing from "./components/Landing"
import Footer from "./components/Footer"
import Picker from "./components/Picker"
import React from "react"
import StockMenu from './components/StockMenu';
import Blog from './components/Blog';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SingleBlogPost from './components/SingleBlogPost';
import About from './components/About';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
    
        <Switch>

          <Route exact path="/">
            <Landing />
          </Route>
          
          <Route exact path="/picker">
            <Picker />
          </Route>
        
          <Route exact path="/blog">
            <Blog />
          </Route>

          <Route exact path="/blog/:id">
            <SingleBlogPost />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/admin">
            <Admin />
          </Route>

        </Switch>
        <Footer />
      </div>
    </ Router>
  );
}

export default App;
