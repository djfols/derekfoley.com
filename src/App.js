import React from "react";
import Header from "./components/Header";
// import Jumbotron from "./components/Jumbotron";
import Jumbotron2 from "./components/Jumbotron2";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import CV from "./components/CV";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App" id="page-top">
      <Header/>
      <Jumbotron2/>
      <About/>
      <Portfolio/>
      <CV/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
