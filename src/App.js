import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Footer from './components/Footer'
import Inquiry from './components/Inquiry'
import Freshmen from "./components/Freshmen";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<><Header/><Home/><Footer/></>}/>         
          <Route path="/inquiry" element={<><Header/><Inquiry/><Footer/></>}/>   
          <Route path="/freshmen" element={<><Header/><Freshmen/><Footer/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
