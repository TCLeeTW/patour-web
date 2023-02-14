import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection"
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Body/>
      <Footer/> */}
      <HeaderSection/>
      <HeroSection/>
      
    </div>
  );
}

export default App;
