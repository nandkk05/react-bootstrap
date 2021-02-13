import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Maps from "./components/Maps";
import Footer  from "./components/Footer";

const App = () => {
  return (
    <div className="App">
       <Navbar/>
       <Hero/>
       <About/>
       <Services/>
       <Portfolio/>
       <Pricing/>
       <Contact/>
       <Maps/>
       <Footer/>
    </div>
  );
}

export default App;
 