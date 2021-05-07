import React from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import CV from "./components/CV";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Jumbotron/>
      <About/>
      <Portfolio/>
      <CV/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
